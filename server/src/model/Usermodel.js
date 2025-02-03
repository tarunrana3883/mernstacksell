const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    profileImg: { type: String, trim: true },
    OtpVerification: { type: String, trim: true },
    isOTPVerified: { type: Boolean, default: false, trim: true },
    adminid: { type: String, trim: true },
    name: { type: String, required: true, trim: true },
    role: { type: String,enum:['user','shopkeeper','admin'], required: true, trim: true },
    userName: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    mobileNo: { type: String, required: true, trim: true },
    isdeleted: { type: Boolean, default: false }
    


}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)






