const express = require("express")
const router = express.Router()
const request = require("request")
const apiKey = "17b16b2c7d335f2a1641e886890e543e"

// =============================

let city = "Paris"

router.get("/weatherAPI", function (req, res) {
request(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`, function (err, response) {
       console.log(response.body)
        res.send(response.body)
    })
}



)



// =============================
module.exports = router