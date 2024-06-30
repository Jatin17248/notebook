const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
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
      res.json({ user });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({error: "Some Error Happened"});
    }
  }
);

module.exports = router;
