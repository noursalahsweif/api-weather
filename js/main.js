let todayTemp = document.getElementById("today-weather");
let todayLocation = document.getElementById("day-one-location");
let todayImg = document.getElementById("today-img");
let todayInfo = document.getElementById("today-info");
let todayUmb = document.getElementById("today-umb");
let todayWind = document.getElementById("today-wind");
let todayCom = document.getElementById("today-com");
let toDayName = document.getElementById("today-name");
let toDayDayNum = document.getElementById("today-number");
let toDayMonth= document.getElementById("today-month");




let nextDayImg = document.getElementById("next-day-img");
let nextDayTemp = document.getElementById("next_day_temp");
let nextDayCe = document.getElementById("next-day-ce");
let nextDayInfo = document.getElementById("next-day-info");
let nextDayName = document.getElementById("next-day-name");


let thirdDayTemp = document.getElementById("third-day-temp");
let thirdDayCe = document.getElementById("third-day-ce");
let thirdDayInfo = document.getElementById("third-day-info");
let thirdDayImg = document.getElementById("third-day-img");
let thirdDaynaem = document.getElementById("third-day-name");



let input = document.getElementById("input");

// input name city value


input.addEventListener("keyup" , function(){
    
    let cityName = input.value;
    console.log(cityName);

    response(cityName);
})


// response



async function response(city){
    let todayData =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e98ac784f0c24557ace140730232108&q=${city}&days=4`);
    let thisDayData = await todayData.json();
    console.log(thisDayData);

    displayToDay(thisDayData);
    displayNextDay(thisDayData);
    displayThirdDay(thisDayData)
    
}

function displayToDay(todayData){
    todayTemp.innerHTML = todayData.current.temp_c + " c";
    todayLocation.innerHTML = todayData.location.name;
    todayImg.setAttribute("src" ,"https:" + todayData.current.condition.icon);
    todayInfo.innerHTML = todayData.current.condition.text;
    todayUmb.innerHTML = todayData.current.humidity +"%";
    todayWind.innerHTML = todayData.current.wind_kph + " KM-H"
    todayCom.innerHTML = todayData.current.wind_dir;
    let todayDate = new Date();
    toDayName.innerHTML = todayDate.toLocaleDateString("en-us" , {weekday:"long"});
    toDayDayNum.innerHTML = todayDate.getDate() + "-";
    toDayMonth.innerHTML = todayDate.toLocaleDateString("en-us" , {month:"long"})
}


function displayNextDay(data){
    let nextDayData = data.forecast.forecastday;
    nextDayTemp.innerHTML = nextDayData[1].day.maxtemp_c + " c";
    nextDayCe.innerHTML = nextDayData[1].day.mintemp_c + " c";
    nextDayInfo.innerHTML = nextDayData[1].day.condition.text;
    nextDayImg.setAttribute("src" , "https:" + nextDayData[1].day.condition.icon)
    let nextDayDate = new Date(nextDayData[2].date);
    // console.log(nextDayDate);
    nextDayName.innerHTML = nextDayDate.toLocaleDateString("en-us" , {weekday:"long"})
    
    
}
function displayThirdDay(data){
    let thirdDayData = data.forecast.forecastday;
    // console.log(thirdDayData);
    thirdDayTemp.innerHTML = thirdDayData[2].day.maxtemp_c + " c";
    thirdDayCe.innerHTML = thirdDayData[2].day.mintemp_c + " c";
    thirdDayInfo.innerHTML = thirdDayData[2].day.condition.text;
    thirdDayImg.setAttribute("src" ,"https:" + thirdDayData[2].day.condition.icon);
    let thirdDayDate = new Date(thirdDayData[3].date)
    console.log(thirdDayDate);
    thirdDaynaem.innerHTML = thirdDayDate.toLocaleDateString("en-us" , {weekday:"long"})

}