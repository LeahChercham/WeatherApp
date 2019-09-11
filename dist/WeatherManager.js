const WeatherManager = function(){

let cityData = []

const getDataFromDB = function(){
    $.ajax({
        method:"get",
        url:"/cities",
        success:function(data){
            console.log(data) // check if data is already in array or if i should push etc
            cityData = data
        }, 
        error: function(xhr,text,error){console.log(text)}
    })
}

const getCityData = function(){
    let cityName 

    $.ajax({
        method:"get",
        url:`/city/${cityName}`,
        success:function(data){
            cityData.push(data)
        }, 
        error: function(xhr,text,error){console.log(text)}
    })
}

const saveCity = function(){
    let cityName 

    let data = cityData.find(c => c.name = cityName)
    console.log(data)

    $.ajax({
        method:"post",
        url:`/city/${cityName}`,
        data: data,
        success:function(data){
            console.log("post request success!")
        }, 
        error: function(xhr,text,error){console.log(text)}
    })
}

const removeCity = function(){
    let cityName

    $.ajax({
        method:"delete",
        url:`/city/${cityName}`,
        success: function(){
            console.log("Successful delete manoever")
        },
        error:function(xhr,text,error){console.log(text)}
    })
}


return {
    getDataFromDB : getDataFromDB,
    saveCity: saveCity,
    removeCity: removeCity,
    getDataFromDB: getDataFromDB
}

}