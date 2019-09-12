const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const PORT = 3000
const api = require("./server/routes/api")

const app = express()

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WeatherDB", {useNewUrlParser:true}, ()=> console.log("Connected to DB"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, "node_modules")))
app.use("/", api)


// =====================================================
app.listen(process.env.PORT || PORT, function(){console.log("Running on port " + PORT)})