const jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
// Get The User From JWT token and add id to req body
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please Authenticate with Valid Header"});
    }
    try {
        
    const JWT_Secret = process.env.JWT_Secret;
    const data = jwt.verify(token, JWT_Secret);
    req.user = data.user;
    } catch (error) {
        res.status(401).send({error: "Please Authenticate with Valid Header"});
    }
    const JWT_Secret = process.env.JWT_Secret;
    const data = jwt.verify(token, JWT_Secret);
    req.user = data.user;
    next();
}
module.exports = fetchuser;