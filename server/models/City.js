const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CitySchema = new Schema({
    name: { type: String},
    updatedAt: { type: Date},
    temperature: { type: Number},
    condition: {type: String},
    conditionPic: {type: String}
    })

const City = mongoose.model("City", CitySchema)

module.exports = City