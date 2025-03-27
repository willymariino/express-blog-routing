const express = require("express")
const router = express.Router()

router.get("/app", (req, res) => {
    res.send("lista dei post")
})

router.post("/app", (req, res) => {
    res.send("creazione di nuovi post")
})

router.put("/app:id", (req, res) => {
    res.send("modifica integrale del post" + req.params.id)

})

router.patch("/app:id", (req, res) => {
    res.send("aggiornamento o modifica parziale del post" + req.params.id)

})

router.delete("/app:id", (req, res) {
    res.send("eliminazione del post" + req.params.id)
})