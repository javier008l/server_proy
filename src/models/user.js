const mongoose = require("mongoose");
const UserSchame = mongoose.Schema({
    name: {
        type: String,
        require: true,
        min:3,
    },
    lastname: {
        type: String,
        require: true,
        min:3,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    },
    active: {
        type: Boolean,
        require: true,
    },
    avatar: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("User", UserSchame);