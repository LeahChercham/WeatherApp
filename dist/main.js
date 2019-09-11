const weatherManager = new WeatherManager()
const render = new Renderer()


const loadPage = function () {
setTimeout(()=> {render.renderData(weatherManager.cityData)}, 3000)
weatherManager.getDataFromDB()
}

const handleSearch = function () {
    let cityInput = $("#cityInput").val()
    weatherManager.getCityData(cityInput)
    setTimeout(()=> {render.renderData(weatherManager.cityData)}, 2000)
}



const saveToDB = function(){
    let cityName = $(this).closest("div").find(".name").html()
weatherManager.saveCity(cityName)
}

const removeFromDB = function () {
    let cityName = $(this).closest("div").find(".name").html()
    weatherManager.removeCity(cityName)
    setTimeout(()=> {loadPage()}, 2000)
}


$("#searchButton").on("click", handleSearch)

$("#main").on("click", ".saveButton", saveToDB)

$("#main").on("click", ".removeButton", removeFromDB)
