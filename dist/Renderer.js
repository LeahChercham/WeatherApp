const Renderer = function(){

    const renderData = function(allCityData){

        console.log(allCityData) // to see if it is already an object

        const source = $("weather-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template(allCityData)
        $("#main").append(newHtml)

    }

    return{
        renderData: renderData
    }
}
