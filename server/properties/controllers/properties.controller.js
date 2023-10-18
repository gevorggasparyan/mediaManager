const jwt = require('jsonwebtoken');
const propertiesService = require('../services/properties.service')

exports.addCredentials = async (req,res) => {
    try{
        const { email, password } = req.body;
        const newCredential = await propertiesService.addCredentials({ email, password });

        res.status(201).json({ message: "Credential is added", newCredential })
    } catch (err) {
        res.status(500).json({ error: "Unable to add credentials" });
    }
}