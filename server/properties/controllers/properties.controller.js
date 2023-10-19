const propertiesService = require('../services/properties.service');
const {verify} = require("jsonwebtoken");

exports.addCredentials = async (req,res) => {
    try{
        const { email, password, status} = req.body;
        const token = req.header('Authorization')?.split('Bearer ')[1];
        const userId = verify(token, process.env.JWT_SECRET_KEY).userId;
        const newCredential = await propertiesService.addCredentials({ email, password, status, userId });

        res.status(201).json({ message: "Credential is added", newCredential })
    } catch (err) {
        res.status(500).json({ error: "Unable to add credentials" });
    }
}
