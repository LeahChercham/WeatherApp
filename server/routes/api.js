const express = require("express")
const router = express.Router()
const request = require("request")
const apiKey = "17b16b2c7d335f2a1641e886890e543e"
const City = require("../models/City")
const moment = require("moment")

// =============================


router.get("/city/:cityName", function (req, res) { // works but need to clean up updatedAt
    let cityName = req.params.cityName
    request(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}`, function (err, response) {
    let data = JSON.parse(response.body) 
    if(data.success==false){
        let data = {problem : `Couldn't get Data for ${cityName}. Please check the spelling.`}
        res.send(data)} else {

    let date = data.location.localtime.split(" ", 1) + " " + data.current.observation_time
    date = moment(date).format('lll')
    let city = {
             "name": data.location.name,
             "updatedAt": date,
             "temperature": data.current.temperature,
             "condition": data.current.weather_descriptions[0],
             "conditionPic": data.current.weather_icons[0]
         }
         res.send(city)
        }
    })
})

router.get("/cities", function (req, res) { //works
    City.find({}, function (err, cities) {
        
        cities.forEach(a => a.updatedAt = moment(a.updatedAt).format('lll') )
        console.log(cities)
        res.send(cities)
    })
})

router.post("/city", function (req, res) { //works
    let data = req.body
    console.log(data)
    let city = new City(data)
    city.save()
    console.log(`Saved ${city} to DB`)
})

router.delete("/city/:cityName", function (req, res) { //works
    let cityName = req.params.cityName
    City.findOneAndDelete({ "name": cityName }, () => res.send(`Deleted ${cityName}`))
})



// =============================
module.exports = router