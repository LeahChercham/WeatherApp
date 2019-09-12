const weatherManager = new WeatherManager()
const render = new Renderer()


const loadPage = function () {
weatherManager.getDataFromDB().then(function(res){render.renderData(weatherManager.cityData)})
}

const handleSearch = function () {
    let cityInput = $("#cityInput").val()
    weatherManager.getCityData(cityInput).then(function(res){render.renderData(weatherManager.cityData)})
}



const saveToDB = function(){
       let cityName = $(this).closest("div").find(".name").html()
weatherManager.saveCity(cityName)
}

const removeFromDB = function () {
    let cityName = $(this).closest("div").find(".name").html()
    weatherManager.removeCity(cityName).then(function(res){render.renderData(weatherManager.cityData)})
}


$("#searchButton").on("click", handleSearch)

$("#main").on("click", ".saveButton", saveToDB)

$("#main").on("click", ".removeButton", removeFromDB)
