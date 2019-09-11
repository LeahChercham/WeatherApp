const express = require("express")
const router = express.Router()
const request = require("request")
const apiKey = "17b16b2c7d335f2a1641e886890e543e"
const City = require("../models/City")

// =============================


router.get("/city/:cityName", function(req,res){
    
    let cityName = req.params.cityName

    request(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}`, function (err, response) {
        console.log(response.body)
        res.send(response.body)
    })
})

router.get("/cities", function(req,res){
    City.find({}, function(err, cities){
        res.send(cities)
    })
})

router.post("/city", function(req,res){
    let data = req.body 
    let city = new City(data)
    console.log(city)
    // data.save()
})

router.delete("/city/:cityName", function(req,res){
    let cityName = req.params.cityName
    City.findOneAndDelete({"name":cityName}, ()=> res.send(`Deleted ${cityName}`))
})



// =============================
module.exports = router