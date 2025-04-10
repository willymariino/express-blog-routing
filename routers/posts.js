const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("lista dei post")
})

router.post("/", (req, res) => {
    res.send("creazione di nuovi post")
})

router.put("/:id/", (req, res) => {
    res.send("modifica integrale del post" + req.params.id)

})

router.patch("/:id", (req, res) => {
    res.send("aggiornamento o modifica parziale del post" + req.params.id)

})

router.delete("/:id", (req, res) => {
    res.send("eliminazione del post" + req.params.id)
})

module.exports = router