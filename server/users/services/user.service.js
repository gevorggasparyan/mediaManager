const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const uuid = require("uuid");
dotenv.config();

const transporter = nodemailer.createTransport({
    service:"gmail",
    secure: false,
    auth: {
        user: process.env.SENDER,
        pass: process.env.PASS,
    },
});

exports.createUser = async (userData) => {
    try {
        const { username, password , email } = userData;

        const candidate = await User.findOne({ email });
        if (candidate) {
            throw new Error(`Username "${candidate.username}" already exists!`);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const activationLink = uuid.v4();

        const user = new User({
            username,
            password: hashedPassword,
            email: email,
            isActivated: false,
            activationLink
        });

        await user.save();

        const mailOptions = {
            from: process.env.SENDER,
            to: email,
            subject: 'Activate your account',
            html: `
                <p>Dear User,</p>
                <p>Click the link below to activate your account:</p>
                <b><a href="http://localhost:3000/user/activate/${activationLink}">Activate Account</a></b>
                <p>If you have trouble clicking the link, please copy and paste it into your browser's address bar.</p>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending activation email:', error);
                throw new Error('Failed to send activation email');
            } else {
                console.log('Activation email sent:', info.response);
            }
        });

        return user;
    } catch (error) {
        throw error;
    }
}