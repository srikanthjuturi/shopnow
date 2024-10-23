const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token,'yourSecretKeyisdropquick' , (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.userId = decoded.id;  // Attach userId to the request object
        req.userPhone = decoded.phone;
        next();
    });
};

module.exports = verifyToken;
