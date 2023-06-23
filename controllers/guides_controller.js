const express = require('express')
const router = express.Router()

const Guides = require('../models/guides.js')

router.get('/', (req, res) => {
    Guides
        .findAll()
        .then(guides => res.json(guides))
})

module.exports = router