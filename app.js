const express = require("express")
const app = express()
const port = 3000

const postRouter = require("./routers/posts.js")

// public assets
app.use(express.static("public"))

// posts
app.use("/posts", postRouter)

app.listen(port, () => {
    console.log("server attivo sulla su http:127.0.0.1:" + port)
})