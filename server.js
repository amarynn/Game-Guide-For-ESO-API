const express = require('express')

const guidesController = require("./controllers/guides_controller.js")
const commentsController = require("./controllers/comments_controller.js")

const app = express()
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on http://localhost:${port}`))
app.use(express.json())

app.use("/guides", guidesController)
app.use("/comments", commentsController)

if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

app.get("/", (req, res) => {
    res.send(`API is running on port ${port}`)
})
