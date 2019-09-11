const weatherManager = new WeatherManager()
const render = new Renderer()


const loadPage = function () {
weatherManager.getDataFromDB()
setTimeout(()=> {render.renderData(weatherManager.cityData)}, 2000)
}

const handleSearch = function () {
    let cityInput = $("#cityInput").val()
    weatherManager.getCityData(cityInput)
    setTimeout(()=> {render.renderData(weatherManager.cityData)}, 2000)
}



const saveThisToDB = function(){
    debugger
let cityName = $(this).closest("div").find(".name").html()
weatherManager.saveCity(cityName)
}

$("#searchButton").on("click", handleSearch)


$("body").on("click",".saveToDB", saveThisToDB())

const removeFromDB = function () {
    findCityName()
    weatherManager.removeCity(cityName)
}


$(".removeFromDB").on("click", function () {

})



// =======================

// const findCityName = function () {
//     return cityName = $(this).closest("div").find(".name")
// }

// const saveToDB = function () {
//     debugger
//     findCityName()
//     weatherManager.saveCity(cityName)
// }