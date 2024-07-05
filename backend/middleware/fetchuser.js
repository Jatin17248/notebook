const jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
// Get The User From JWT token and add id to req body
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please enter a auth-token"});
    }
    try {
        
    let jwtSecret = "JatinGuptaIsAGoodBo";
    const data = jwt.verify(token, jwtSecret);
    req.user = data.user;
    } catch (error) {
        res.status(401).send({error: "Please Authenticate with Valid auth-token"});
    }
    
    next();
}

module.exports = fetchuser;