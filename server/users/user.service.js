const User = require('./user.model');
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
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                    <p style="font-size: 16px; color: #333;">Dear User,</p>
                    <p style="font-size: 16px; color: #333;">Click the link below to activate your account:</p>
                    <p style="font-size: 16px;">
                        <a href="http://localhost:3000/user/activate/${activationLink}" style="background-color: #007BFF; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-weight: bold;">Activate Account</a>
                    </p>
                </div>
                `
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