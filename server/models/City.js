const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CitySchema = new Schema({
    name: {type: String, sparse:true},
    updatedAt: {type: Date, sparse:true},
    temperature: {type: Number, sparse:true},
    condition: {type: String, sparse:true},
    conditionPic: {type: String, sparse:true}
})

const City = mongoose.model("City", CitySchema)

module.exports = City