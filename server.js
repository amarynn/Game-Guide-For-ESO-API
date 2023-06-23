const express = require('express')

const guidesController = require("./controllers/guides_controller.js")

const app = express()
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on http://localhost:${port}`))
app.use(express.json())

app.use("/", guidesController)

app.get('/', (req, res) => {
    res.json(guide)
})