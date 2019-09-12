const weatherManager = new WeatherManager()
const render = new Renderer()


const loadPage = function () {
weatherManager.getDataFromDB().then(function(res){
    
    if(weatherManager.cityData.length != 0){
        render.renderData(weatherManager.cityData)} else {
            console.log("No data to render")
        }})
}

const handleSearch = function () {
    let cityInput = $("#cityInput").val()
    if(cityInput){
    weatherManager.getCityData(cityInput).then(function(res){render.renderData(weatherManager.cityData)})
    }else {alert("Please enter a City!")}
}



const saveToDB = function(){
       let cityName = $(this).closest(".cityContainer").find(".name").html()
weatherManager.saveCity(cityName)
}

const removeFromDB = function () {
    let cityName = $(this).closest(".cityContainer").find(".name").html()
    weatherManager.removeCity(cityName).then(function(res){render.renderData(weatherManager.cityData)})
}


$("#searchButton").on("click", handleSearch)

$("#main").on("click", ".saveButton", saveToDB)

$("#main").on("click", ".removeButton", removeFromDB)
