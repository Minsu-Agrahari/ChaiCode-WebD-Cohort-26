import ApiError from "../../common/utils/api-error";
import { verifyAccessToken } from "../../common/utils/jwt.utils";
import User from "./auth.model.js"

const authenticate = async (req, res, next) => {

    let token;
    // console.log(req.headers) kar ke dekho
    if (req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) throw ApiError.unauthorized("Not Autheticated");

    const decoded = verifyAccessToken(token);
    const user = await User.findById(decoded.id);
    if (!user) throw ApiError.unauthorized("User no longer exists");

    // data add
    req.user = {
        id: user._id,
        role: user.role,
        name: user.name,
        email: user.email,
    };

    next();

};

// [teacher, student, admin] wala function
const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw ApiError.forbidden("You do not have permission to perform this action");
        };
        next();
    };
};

export { authenticate, authorize };
