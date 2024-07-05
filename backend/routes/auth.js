const express = require("express");
require('dotenv').config(); // Load environment variables from .env file
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
let jwtSecret = "JatinGuptaIsAGoodBo";
// process.env.JWT_Secret ;
router.post(
  "/createuser",
  [
    body("name", "Enter A Valid Name!").isLength({ min: 3 }),
    body("email", "Enter A Valid Email!").isEmail(),
    body("password", "Enter A Valid Password!").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(500)
          .json({ error: "Sorry, User With This E-Mail Already Exists!" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPwd = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPwd,
        email: req.body.email,
      });
      const data = {
        user:{
          id: user.id
        }
      }

      const jwttoken = jwt.sign(data, jwtSecret);
      res.json({authToken: jwttoken});
    } catch (error) {
      console.error(error.message);
      res.status(500).json({error: "Some Error Happened", errmessage: error.message});
    }
  }
);


router.post(
  "/login",
  [
    body("email", "Enter A Valid Email!").isEmail(),
    body("password", "Enter A Valid Password!").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const {email, password} = req.body;
      let user = await User.findOne({"email": email});
      if (!user) {
        return res
          .status(500)
          .json({ error: "Wrong Email! User With This E-Mail Doesn't Exists!" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      
      if(!passwordCompare){
        return res
          .status(500)
          .json({ error: "Wrong Password! Enter Valid Credientials!" });
      }
      const data = {
        user:{
          id: user.id
        }
      }
      const jwttoken = jwt.sign(data, jwtSecret);
      res.json({authToken: jwttoken});
    } catch (error) {
      console.error(error.message);
      res.status(500).json({error: "Some Error Happened", errmessage: error.message});
    }
  }
);


router.post(
  "/getuser", fetchuser, 
  async (req, res) => {
    try {
   userid = req.user.id;
   const user = await User.findById(userid).select("-password");
   res.send(user);
    } catch (error) {
   
    }
  }
);



module.exports = router;
