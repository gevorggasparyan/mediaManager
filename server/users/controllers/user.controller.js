const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const userService = require('../services/user.service');
const playwright = require('playwright');

exports.register = async (req, res) => {
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

exports.activation = async (req, res) => {
    try {
        const { activationToken } = req.params;
        const user = await User.findOne({ activationLink: activationToken });

        if (!user) {
            return res.status(404).json({ error: 'Invalid activation token' });
        }

        user.isActivated = true;
        await user.save();

        res.status(200).send(`
            <html>
                <body>
                    <p>Dear User,</p>
                    <p>Your account is <b>activated successfully</b>!</p>
                    <p>You can close this tab.</p>
                </body>
            </html>
        `);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during activation' });
    }
}