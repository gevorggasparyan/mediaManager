const propertiesService = require('../services/properties.service');
const {verify} = require("jsonwebtoken");

exports.addCredentials = async (req,res) => {
    try{
        const { email, password, status } = req.body;
        const token = req.header('Authorization')?.split('Bearer ')[1];
        const userId = verify(token, process.env.JWT_SECRET_KEY).userId;
        const newCredential = await propertiesService.addCredentials({ email, password, userId, status });

        res.status(201).json({ message: "Credential is added", newCredential })
    } catch (err) {
        res.status(500).json({ error: "Unable to add credentials" });
    }
}

exports.getAllProperties = async (req, res) => {
    try {
        const userId = req.user.userId;
        console.log('User ID:', userId);
        const allProperties = await propertiesService.getAllUsers(userId);
        res.json(allProperties);
    } catch (err) {
        res.status(500).json({ error: 'Unable to fetch books' });
    }
};