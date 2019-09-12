class Renderer {

    renderData(allCityData){
        $("#main").empty()

        if(allCityData != []){
        const source = $("#weather-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({allCityData})
        $("#main").append(newHtml)} else{console.log("No data in DB")}
    }
}
