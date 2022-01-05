const mongoose = require("mongoose");

const Music = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: false,
        default: "Undefined"
    },
    url: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true
    },
    addDate: {
        type: Date,
        required: false,
        default: new Date()
    },
    rating: {
        type: Number,
        required: false,
        default: 0
    }
}, { versionKey: false });

module.exports = mongoose.model("Musics", Music);