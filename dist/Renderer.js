class Renderer {

    renderData(allCityData){
        $("#main").empty()

        const source = $("#weather-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({allCityData})
        $("#main").append(newHtml)
    }
}
