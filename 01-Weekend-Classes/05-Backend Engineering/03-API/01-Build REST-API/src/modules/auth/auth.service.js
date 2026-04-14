import ApiError from "../../common/utils/api-error.js";
import {
    generateAccessToken,
    generateRefershToken,
    generateResetToken,
    verifyRefreshToken
} from "../../common/utils/jwt.utils.js";
import User from "./auth.model.js"

const hashToken = (token) => crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex")

const register = async ({ name, email, password, role }) => {

    const existing = await User.findOne({ email })
    if (existing) throw ApiError.conflict("Email already existis");

    // rawToken --> User ko mail jhaye ka
    // hashedToken --> In DB 
    const { rawToken, hashedToken } = generateResetToken()

    const user = await User.create({
        name,
        email,
        password,
        role,
        verificationToken: hashedToken,
    })

    //TODO: sendan email to user with token: rawToken

    const userObj = user.toObject()
    delete userObj.password
    delete userObj.verificationToken

    return userObj;
}

const login = async ({ email, password }) => {
    // 1. take email and find user in DB
    // 2. then check if password is correct
    // 3. check if verified or not

    const user = await User.findOne({ email }).select("+password")
    if (!user) throw ApiError.unauthorized("Invalid Email or password");

    // somehow I will check Password

    if (!user.isVerified) {
        throw ApiError.forbidden("Please verify your email before login")
    }

    // Generate Access Token
    const accessToken = generateAccessToken({ id: user._id, role: user.role })
    const refreshToken = generateRefershToken({ id: user._id })

    // Hashing RefershToken
    user.refreshToken = hashToken(refreshToken)

    // Save in Database
    await user.save({ validateBeforeSave: false })

    const userObj = user.toObject()
    delete userObj.password
    delete userObj.refreshToken

    return {
        user: userObj,
        accessToken,
        refreshToken
    };

};

const refresh = async (token) => {
    // token havn't recieved
    if (!token) throw ApiError.unauthorized("Refresh token missing")
    const decoded = verifyRefreshToken(token)

    const user = await User.findById(decoded.id).select("+refreshToken")
    if (!user) throw ApiError.unauthorized("User not found")

    if (user.refreshToken !== hashToken(token)) {
        throw ApiError.unauthorized("Invalid refresh token")
    }

    const accessToken = generateAccessToken({ id: user._id, role: user.role })

    return { accessToken };
};

const logout = async (userId) => {
    // const user = await User.findById(userId);
    // if (!user) throw ApiError.unauthorized("User not found");

    // user.refreshToken = undefined; // undefinded or null (AI says null ??)
    // await user.save({ validatedBeforeSave: false });

    await User.findByIdAndUpdate(userId, {refreshToken: null})
}; 

const forgotPassword = async (email) => {
    const user = await User.findOne({email})
    if(!user) throw ApiError.notFound("No account with that email")

    const {rawToken, hashedToken} = generateResetToken();
    user.resetPasswordtoken = hashedToken
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000

    await user.save();

    // TODO: mail bhejna nhi aata
}

export { register };
