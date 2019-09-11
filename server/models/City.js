const mongoose = require("mongoose")
const Schema = mongoose.Schema

const weatherSchema = new Schema({
    name: String,
    updatedAt: Date,
    temperature: Number,
    condition: String,
    conditionPic: String
})

const Weather = mongoose.model("Weather", weatherSchema)

module.exports = Weather