

class Renderer {

    renderData(allCityData){
        console.log(allCityData) // to see if its an object or array

        const source = $("weather-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template(allCityData)
        $("#main").append(newHtml)
    }
}