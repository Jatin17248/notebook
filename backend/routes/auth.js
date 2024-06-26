const express = require('express')
const User = require("../models/User")
const router = express.Router()
router.post('/', (req, res) => {
        const user = User(req.body);
        user.save();
       res.send('Hello World! By Jatin in auth.js');
     })
    // app.get('/name', (req, res) => {
    //     res.send('Jatin')
    //   })

    module.exports = router