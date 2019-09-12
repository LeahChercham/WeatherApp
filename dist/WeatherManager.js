class WeatherManager {
    constructor() {
        this.cityData = []
    }

    getDataFromDB() {
        //works
       return $.ajax({
            method: "get",
            url: "/cities",
            success: (data)=> {
              // // check if data is already in array or if i should push etc
               if(data){
                   this.cityData = data
                   console.log("this is the data we get from db: "  + this.cityData)
               }else {
                   console.log("No Data")
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
                if(data.problem){alert(data.problem)}else {
                this.cityData.push(data)
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
        console.log(data)

        return $.ajax({
            method: "post",
            url: `/city`,
            data: data,
            success: function (data) {
                console.log("post request success!")
            },
            error: function (xhr, text, error) { console.log("error"+ text) }
        })
    }

    removeCity(cityName) {
        //works
       return $.ajax({
            method: "delete",
            url: `/city/${cityName}`,
            success: ()=> {
                let index = this.cityData.findIndex(c => c.name = cityName)
                this.cityData.splice(index,1)
                console.log("Successful delete manoever")
            },
            error: function (xhr, text, error) { console.log(text) }
        })
    }

}

