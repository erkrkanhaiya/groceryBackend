const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    __v: {
        type: Number,
        select: false
    },
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
        select: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    userMaint: {
        type: Boolean,
        default: false
    },
    country_code: {
        type: String,
        required: true,
    },
    mobile_number: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
    },
    refer_code: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('mobileUser', userSchema);
