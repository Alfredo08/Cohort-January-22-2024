const jwt = require('jsonwebtoken');
const SECRET = 'this_must_be_secret';

const validateToken = (req, res, next) => {
    const {user_token} = req.headers;
    jwt.verify(user_token, SECRET, (error, decoded) => {
        if(error){
            return res.status(401).json({message: 'Unauthorized'});
        }
        req.userInfo = {
            email: decoded.email,
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            id: decoded.id
        }
        next();
    });
}

module.exports = validateToken;