const weatherManager = new WeatherManager()
const render = new Renderer()


const loadPage = function () {
    console.log("loadpage started")
weatherManager.getDataFromDB().then(function(res){
    
    if(weatherManager.cityData.length != 0){
        console.log("render started")
        render.renderData(weatherManager.cityData)} else {
            console.log("No data to render")
        }})
}

const handleSearch = function () {
    let cityInput = $("#cityInput").val()
    weatherManager.getCityData(cityInput).then(function(res){render.renderData(weatherManager.cityData)})
}



const saveToDB = function(){
    debugger
       let cityName = $(this).closest(".cityContainer").find(".name").html()
weatherManager.saveCity(cityName)
}

const removeFromDB = function () {
    debugger
    let cityName = $(this).closest(".cityContainer").find(".name").html()
    weatherManager.removeCity(cityName).then(function(res){render.renderData(weatherManager.cityData)})
}


$("#searchButton").on("click", handleSearch)

$("#main").on("click", ".saveButton", saveToDB)

$("#main").on("click", ".removeButton", removeFromDB)
