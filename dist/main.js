const weatherManager = new WeatherManager()
const render = new Renderer()


const loadPage = function () {
weatherManager.getDataFromDB().then(()=>{  
    if(weatherManager.cityData.length != 0){
        render.renderData(weatherManager.cityData)} else {
            console.log("No data to render")
        }})
}

const handleSearch = function () {
    let cityInput = $("#cityInput").val()
    if(cityInput){
        let index = weatherManager.cityData.findIndex(c => c.name == cityInput)
        if(index== -1){
        weatherManager.getCityData(cityInput).then(()=>{render.renderData(weatherManager.cityData)})}
        else{
            alert("City already on screen!")
            // call update function 
        }}else {alert("Please enter a City!")}  
}

const refreshCityData = function(){ // Put this into function in weatherManager and use put 
    let cityName = $(this).closest(".cityContainer").find(".name").html()
    let city = weatherManager.cityData.find(c => c.name == cityName)
    if(city.saved == true){
        debugger
        weatherManager.removeCity(cityName)
        weatherManager.getCityData(cityName).then(()=>weatherManager.saveCity(cityName)).then(()=>render.renderData(weatherManager.cityData))
    } else {
        let index = weatherManager.cityData.findIndex(c => c.name == cityName)
        weatherManager.cityData.splice(index, 1)
        weatherManager.getCityData(cityName).then(()=>{render.renderData(weatherManager.cityData)})
    }

}

const saveToDB =  function(){
    let cityName = $(this).closest(".cityContainer").find(".name").html()
    let index = weatherManager.cityData.findIndex(c => c.name == cityName)
    weatherManager.cityData[index].saved = true
    weatherManager.saveCity(cityName)
    console.log(weatherManager.cityData)
    render.renderData(weatherManager.cityData)
}

const removeFromDB = function () {
    let cityName = $(this).closest(".cityContainer").find(".name").html()
    weatherManager.removeCity(cityName).then(()=>{render.renderData(weatherManager.cityData)})
}


loadPage()

$("#searchButton").on("click", handleSearch)

$("#main").on("click", ".saveButton", saveToDB)

$("#main").on("click", ".removeButton", removeFromDB)

$("#main").on("click", ".refreshButton", refreshCityData)
