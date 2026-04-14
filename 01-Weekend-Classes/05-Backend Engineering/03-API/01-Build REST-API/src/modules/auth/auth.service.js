import ApiError from "../../common/utils/api-error.js";
import {
    generateAccessToken,
    generateRefershToken,
    generateResetToken
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
    user.refreshtoken = hashToken(refreshToken)

    // Save in Database
    await user.save({ validateBeforeSave: false })

    const userObj = user.toObject()
    delete userObj.password
    delete userObj.refreshtoken

    return { 
        user: userObj, 
        accessToken, 
        refreshToken 
    };
}
export { register };
