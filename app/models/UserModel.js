const mongoose = require("mongoose");

const User = new mongoose.Schema({
    nickname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    createDate: {type: Date, default: new Date()},
    friends: {type: [String], re},
    playList: {},
    active: {}
})

module.exports = mongoose.model("User", User);