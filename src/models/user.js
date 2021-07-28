const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowerCase: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;