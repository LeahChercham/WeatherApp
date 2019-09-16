class Renderer {
    renderData(allCityData) {
        if (allCityData.length != 0) {
            const source = $("#weather-template").html()
            const template = Handlebars.compile(source)
            const newHtml = template({ allCityData })
            $("#main").empty().append(newHtml)
        } else {
            $("#main").empty()
            console.log("No data in DB")
        }
    }
}
