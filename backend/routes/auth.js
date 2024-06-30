const express = require('express')
const User = require("../models/User")
const router = express.Router()
const {body, validationResult } = require('express-validator');
router.post('/', [
  body('name', "Enter A Valid Name!").isLength({min:3}),
  body('email', "Enter A Valid Email!").isEmail(),
  body('password', "Enter A Valid Password!").isLength({min:6}),
],(req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
          return res.status(400).json({ errors: errors.array() })
        }
       User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
       }).then(user=>res.json(user)).catch(err => {res.status(400)
         res.json({errors: "User With Same E-mail Already Exists!"})});
     })
    // app.get('/name', (req, res) => {
    //     res.send('Jatin')
    //   })
  

    module.exports = router