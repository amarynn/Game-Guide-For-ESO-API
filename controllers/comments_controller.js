const express = require('express')
const router = express.Router()

const Comments = require('../models/comments.js')

router.get('/:id', (req, res) => {
    const guideId = req.params.id

    Comments
        .findByGuideId(guideId)
        .then(comments => res.json(comments))
})

router.post("/", (req, res) => {
    const guideId = req.body.guideId
    const commentText = req.body.commentText

    Comments
        .create(guideId, commentText)
        .then(comments => res.json(comments))
})

module.exports = router