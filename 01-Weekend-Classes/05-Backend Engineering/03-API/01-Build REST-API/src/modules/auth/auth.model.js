import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    // key: value
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 50,
        required: [true, "Name is required"] // [boolean, error message]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required"], // [boolean, error message]
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"], // [boolean, error message]
        minlength: 8,
        select: false,
    },
    role: {
        type: String,
        // enum ke sath hamesha default vhi likhna
        enum: ["customer", "seller", "admin"],
        default: "customer",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        select: false,
    },
    refreshToken: {
        type: String,
        select: false,
    },
    resetPasswordtoken: {
        type: String,
        select: false,
    },
    resetPasswordExpires: {
        type: Date,
        select: false,
    },
}, { timestamps: true });


// hook
userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 12) // salt value = 10 or 12, not more than 12

    next();
})

userSchema.methods.comparePassword = async function (clearTextPassword) {
    // return await bcrypt.compare(clearTextPassword, this.password);
    return bcrypt.compare(clearTextPassword, this.password);
};
//                          table name || schema
//                              ⬇           ⬇
export default mongoose.model("User", userSchema)
