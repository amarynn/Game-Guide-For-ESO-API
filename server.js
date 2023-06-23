const express = require('express')

const guidesController = require("./controllers/guides_controller.js")
const commentsController = require("./controllers/comments_controller.js")

const app = express()
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on http://localhost:${port}`))
app.use(express.json())

app.use("/guides", guidesController)
app.use("/comments", commentsController)

app.get("/", (req, res) => {
    res.send(`API is running on port ${port}`)
})
