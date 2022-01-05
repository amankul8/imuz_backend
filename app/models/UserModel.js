const mongoose = require("mongoose");

const User = new mongoose.Schema({
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: false,
        default: new Date()
    },
    friends: {
        type: [String],
        required: false
    },
    playList: {
        type: [String],
        required: false
    },
    active: {
        type: Boolean,
        default: false,
        required: false
    },
}, { versionKey: false });

module.exports = mongoose.model("Users", User);