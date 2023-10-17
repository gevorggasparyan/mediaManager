const User = require('../models/userPropertyModel');
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
dotenv.config();

exports.getAllUsers = async () => {
    return User.find({}, {password: 0, activationLink: 0});
}

exports.createUser = async (userData) => {
    try {
        const { username, password } = userData;

        const candidate = await User.findOne({ username });
        if (candidate) {
            throw new Error(`Username "${candidate.username}" already exists!`);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            password: hashedPassword
        });

        await user.save();

        return user;
    } catch (error) {
        throw error;
    }
}