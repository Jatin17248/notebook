const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
       res.send('Hello World! By Jatin in notes.js')
     })
    // app.get('/name', (req, res) => {
    //     res.send('Jatin')
    //   })

    module.exports = router