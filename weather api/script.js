fetch(
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-566FD187-2A7C-4845-AC20-59E5816BA0BA&format=JSON&locationName=&elementName="
)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        // console.log(data);
        const weatherData = data.records.location;


        [...weatherData].forEach((currentValue, index) => {
            let name = weatherData[index].locationName;
            let Rain =
                weatherData[index].weatherElement[1].time[2].parameter.parameterName;
            let Wx =
                weatherData[index].weatherElement[0].time[2].parameter.parameterName;
            let MinT =
                weatherData[index].weatherElement[2].time[2].parameter.parameterName;
            let MaxT =
                weatherData[index].weatherElement[4].time[2].parameter.parameterName;
            // console.log(currentValue);
        });
    });