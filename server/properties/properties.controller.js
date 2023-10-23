const propertiesService = require('./properties.service');

exports.addProperty = async (req,res) => {
    try{
        const { email, password, status } = req.body;
        const userId = req.user.id;
        const newCredential = await propertiesService.addProperty({ email, password, userId, status });

        res.status(201).json({ message: "Property is added", newCredential })
    } catch (err) {
        res.status(500).json({ error: "Unable to add property" });
    }
}

exports.getAllProperties = async (req, res) => {
    try {
        const userId = req.user.id;
        const allProperties = await propertiesService.getAllProperties(userId);
        res.json(allProperties);
    } catch (err) {
        res.status(500).json({ error: 'Unable to fetch books' });
    }
};