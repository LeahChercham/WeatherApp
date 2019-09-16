class WeatherManager {
    constructor() {
        this.cityData = []
    }

    getDataFromDB() {
        return $.ajax({
            method: "get",
            url: "/cities",
            success: (data) => {
                if (data) {
                    this.cityData = data
                } else {
                    console.log("No Data in DB")
                }
            },
            error: function (xhr, text, error) { console.log(text) }
        })
    }

    getCityData(cityName) {
        //works
        return $.ajax({
            method: "get",
            url: `/city/${cityName}`,
            success: (data) => {
                if (data.problem) { alert(data.problem) } else {
                    this.cityData.unshift(data)
                    console.log(data)
                    console.log(this.cityData)
                }
            },
            error: function (xhr, text, error) { console.log(text) }
        })
    }

     saveCity(cityName) {
        //works
        
        let data = this.cityData.find(c => c.name === cityName)
        console.log(this.cityData)

         $.ajax({
            method: "post",
            url: `/city`,
            data: data,
            success: function (data) {
                console.log("post request success!")
            },
            error: function (xhr, text, error) { console.log("error" + text) }
        })
    }

    removeCity(cityName) {
        return $.ajax({
            method: "delete",
            url: `/city/${cityName}`,
            success: () => {
                let index = this.cityData.findIndex(c => c.name == cityName)
                this.cityData.splice(index, 1)
            },
            error: function (xhr, text, error) { console.log(text) }
        })
    }
}

