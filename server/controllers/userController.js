const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userPropertyModel');
const userService = require('../services/userService');

exports.createUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await userService.createUser(userData);

        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({error: 'Failed to create user'});
    }
}

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'No user found' });
        } else if (!(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Wrong password' });
        }

        const token = jwt.sign({ userId: user._id, username: user.username, isActivated: user.isActivated }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}