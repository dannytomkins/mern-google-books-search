const router = require("express").Router()
const axios = require("axios")

router.get("/api/googlebooks/:title", function(req, res) {
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+req.params.title).then(function(results){
        res.json(results.data.items)
    })
})

module.exports = router