const router = require("express").Router()
const axios = require("axios")
const db = require("../models")

router.get("/api/googlebooks/:title", function(req, res) {
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+req.params.title).then(function(results){
        res.json(results.data.items)
    })
})

router.post("/api/books",  function(req, res){
    db.Book.create(req.body).then(function(results){
        res.json(results)
    })
})

router.get("/api/books", function(req, res){
    db.Book.find().then(function(results){
        res.json(results)
    })
})

router.delete("/api/books/:_id", function(req, res){
    db.Book.deleteOne({_id:req.params._id}).then(function(results){
        res.json(results)
    })
})

module.exports = router