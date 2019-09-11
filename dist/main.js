const renderer = Renderer
const weatherManager = WeatherManager

const loaddPage = function(){

    weatherManager.getDataFromDB()
    // it should render the city data from weathermanager
}

const handleSearch = function(){
    let cityInput = $("#cityInput").val()
    weatherManager.getCityData(cityInput).then(renderer.renderData())
}

$("#searchButton").on("click", handleSearch)
$(".saveToDB").on("click", function(){

})

const findCityName = function(){
    return cityName = $(this).closest("div").find(".name")
}

const saveToDB = function(){
    findCityName()
    weatherManager.saveCity(cityName)
}

const removeFromDB = function(){
    findCityName()
    weatherManager.removeCity(cityName)
}


$(".removeFromDB").on("click", function(){

})