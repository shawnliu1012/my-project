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

            let img;
            if (Rain == 0) {
                img = "svg/sun.svg";
            } else if (Rain > 25 || Rain < 40) {
                img = "svg/cloud-sun.svg";
            } else if (Rain > 50) {
                img = "svg/cloud.svg";
            } else {
                img = "svg/rain.svg";
            }

            let card = document.querySelector(".row");
            card.innerHTML += `
            <div class="card mb-2 text-center mx-auto" style="width: 18rem">
        <img src="${img}" class="card-img-top mx-auto"  style="width:50% " alt="weather">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">tmp: ${MinT}&#8451~${MaxT}&#8451</p>
                <p class="card-text">降雨機率: ${Rain}%</p>
                <p class="card-text">tmp: ${Wx}</p>
        </div>
        </div>
    `;
        });
    });

