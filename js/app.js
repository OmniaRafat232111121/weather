// api key = e0fdb99e108746b690b105738210205

let searchBtn = document.querySelector('.search__btn');
let searchInput = document.querySelector('#searchInput');
let dayName = document.querySelector('.day-name');
let dayName2=document.querySelector('.day-name2');
let dayName3=document.querySelector('.day-name3');
let dayDate = document.querySelector('.day-date');
let monthDate=document.querySelector('.month');
let cityName = document.querySelector('.city-name');
let tempreture = document.querySelector('#tempreture');
let maxTemp=document.querySelector("#maxTemp");
let minTemp=document.querySelector("#minTemp");
let maxTemp2=document.querySelector("#maxTemp2");
let minTemp2=document.querySelector("#minTemp2");
let icon = document.querySelector('#icon');
let icon2=document.querySelector("#icon2");
let icon3=document.querySelector("#icon3");

let weatherStatus = document.querySelector('#weather-status')
let weatherStatus2=document.querySelector("#weather-status2")
let weatherStatus3=document.querySelector("#weather-status3")
let humidity = document.querySelector('#humidity');
let speed=document.querySelector("#speed");
let Direction=document.querySelector("#Direction");




let FullDate=new Date();



searchInput.addEventListener('keyup', realTimeSearch)
searchBtn.addEventListener('click', getData);
/*self invoked*/
 (async function () {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e0fdb99e108746b690b105738210205&q=paris&days=3`);
    let response2 = await response.json();
     
    cityName.innerHTML = response2.location.name;
    tempreture.innerHTML = response2.current.temp_c;
    icon.src = `http:${response2.current.condition.icon}`;
    weatherStatus.innerHTML = response2.current.condition.text;
     humidity.innerHTML = response2.current.humidity;
     speed.innerHTML = response2.current.wind_kph;
     Direction.innerHTML=response2.current.wind_dir;
     dayDate.innerHTML= FullDate.getDate();
     icon2.src=`http:${response2.forecast.forecastday[1].day.condition.icon}`;
     icon3.src=`http:${response2.forecast.forecastday[2].day.condition.icon}`;
     maxTemp.innerHTML=response2.forecast.forecastday[1].day.maxtemp_c;
     minTemp.innerHTML=response2.forecast.forecastday[1].day.mintemp_c;

     maxTemp2.innerHTML=response2.forecast.forecastday[2].day.maxtemp_c;
     minTemp2.innerHTML=response2.forecast.forecastday[2].day.mintemp_c;

     weatherStatus2.innerHTML=response2.forecast.forecastday[1].day.condition.text;
     
     
     weatherStatus3.innerHTML=response2.forecast.forecastday[2].day.condition.text;

     weeks();
     months();


 })()
 
async function realTimeSearch() {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e0fdb99e108746b690b105738210205&q=${searchInput.value}&days=3`);
    let response2 = await response.json();
     
    cityName.innerHTML = response2.location.name;
    tempreture.innerHTML = response2.current.temp_c;
    icon.src = `http:${response2.current.condition.icon}`;
    weatherStatus.innerHTML = response2.current.condition.text;
     humidity.innerHTML = response2.current.humidity;
     speed.innerHTML = response2.current.wind_kph;
     Direction.innerHTML=response2.current.wind_dir;
     dayDate.innerHTML= FullDate.getDate();
     icon2.src=`http:${response2.forecast.forecastday[1].day.condition.icon}`;
     icon3.src=`http:${response2.forecast.forecastday[2].day.condition.icon}`;
     maxTemp.innerHTML=response2.forecast.forecastday[1].day.maxtemp_c;
     minTemp.innerHTML=response2.forecast.forecastday[1].day.mintemp_c;
     maxTemp2.innerHTML=response2.forecast.forecastday[2].day.maxtemp_c;
     minTemp2.innerHTML=response2.forecast.forecastday[2].day.mintemp_c;

     
     weatherStatus2.innerHTML=response2.forecast.forecastday[1].day.condition.text;
     
     weatherStatus3.innerHTML=response2.forecast.forecastday[2].day.condition.text;

    weeks();
    months();
}

async function getData() {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e0fdb99e108746b690b105738210205&q=${searchInput.value}&days=3`);
    let response2 = await response.json();
     
    cityName.innerHTML = response2.location.name;
    tempreture.innerHTML = response2.current.temp_c;
    icon.src = `http:${response2.current.condition.icon}`;
    weatherStatus.innerHTML = response2.current.condition.text;
     humidity.innerHTML = response2.current.humidity;
     speed.innerHTML = response2.current.wind_kph;
     Direction.innerHTML=response2.current.wind_dir;
     dayDate.innerHTML= FullDate.getDate();
     icon2.src=`http:${response2.forecast.forecastday[1].day.condition.icon}`;
     icon3.src=`http:${response2.forecast.forecastday[2].day.condition.icon}`;
     maxTemp.innerHTML=response2.forecast.forecastday[1].day.maxtemp_c;
     minTemp.innerHTML=response2.forecast.forecastday[1].day.mintemp_c;
     maxTemp2.innerHTML=response2.forecast.forecastday[2].day.maxtemp_c;
     minTemp2.innerHTML=response2.forecast.forecastday[2].day.mintemp_c;


     
     weatherStatus2.innerHTML=response2.forecast.forecastday[1].day.condition.text;
     weatherStatus3.innerHTML=response2.forecast.forecastday[2].day.condition.text;
     
    weeks();
    months();
}

function weeks(){
    let weekDays=new Array(7);
    weekDays[0]="sunday";
    weekDays[1]="monday"
    weekDays[2]="Tuesday";
    weekDays[3]="Wednesday";
    weekDays[4]="Thursday";
    weekDays[5]="Friday";
    weekDays[6]="Saturday";
let firstDay=weekDays[FullDate.getDay()];

let weekDays2=new Array(7);

weekDays2[0]="monday"
weekDays2[1]="Tuesday";
weekDays2[2]="Wednesday";
weekDays2[3]="Thursday";
weekDays2[4]="Friday";
weekDays2[5]="Saturday";
weekDays2[6]="sunday";
let secondDay=weekDays2[FullDate.getDay()];



let weekDays3=new Array(7);


weekDays3[0]="Tuesday";
weekDays3[1]="Wednesday";
weekDays3[2]="Thursday";
weekDays3[3]="Friday";
weekDays3[4]="Saturday";
weekDays3[5]="sunday";
weekDays3[6]="monday"


let thirdDay=weekDays3[FullDate.getDay()];
dayName.innerHTML = firstDay;
dayName2.innerHTML = secondDay;
dayName3.innerHTML = thirdDay;
}

function months(){
    let monthIndex=new Array(12);
    monthIndex[0] = "Jan";
    monthIndex[1] = "Feb";
    monthIndex[2] = "Mar";
    monthIndex[3] = "Apr";
    monthIndex[4] = "May";
    monthIndex[5] = "Jun";
    monthIndex[6] = "Jul";
    monthIndex[7] = "Aug";
    monthIndex[8] = "Sept";
    monthIndex[9] = "Oct";
    monthIndex[10] = "Nov";
    monthIndex[11] = "Dec";

let monthDate=monthIndex[FullDate.getMonth()];
month.innerHTML=monthDate;
}