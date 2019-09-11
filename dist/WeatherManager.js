class TempManager {
    constructor() {
        this.cityData = []
    }

    getDataFromDB() {
        $.ajax({
            method: "get",
            url: "/cities",
            success: function (data) {
                console.log(data) // check if data is already in array or if i should push etc
                cityData = data
            },
            error: function (xhr, text, error) { console.log(text) }
        })
    }

    getCityData(cityName) {
        debugger
        $.ajax({
            method: "get",
            url: `/city/${cityName}`,
            success: function (data) {
                cityData.push(data)
                return cityData
            },
            error: function (xhr, text, error) { console.log(text) }
        })
    }

    saveCity() {
        let cityName

        let data = cityData.find(c => c.name = cityName)
        console.log(data)

        $.ajax({
            method: "post",
            url: `/city/${cityName}`,
            data: data,
            success: function (data) {
                console.log("post request success!")
            },
            error: function (xhr, text, error) { console.log(text) }
        })
    }

    removeCity() {
        let cityName

        $.ajax({
            method: "delete",
            url: `/city/${cityName}`,
            success: function () {
                console.log("Successful delete manoever")
            },
            error: function (xhr, text, error) { console.log(text) }
        })
    }

}