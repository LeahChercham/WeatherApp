const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const request = require("request")
const path = require("path")
const port = 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, "/dist")))
app.use(express.static(path.join(__dirname, "/node_modules")))
app.use("/", api)

// =====================================================
app.listen(port, function(){console.log("Running on port " + port)})