document.querySelector("#form").addEventListener("submit",function(e){
    e.preventDefault();
    const city=document.querySelector("input[name='city']").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5ca505642e54ff56f3c09e68dca8812`;
    fetch(url).then((res)=>{
        console.log("RESOLVED!",res);
        return res.json();
    }).then((data)=>{
        const {weather,main,wind}=data;
        const imageType=weather[0].main.toLowerCase();
        const existingImage=document.querySelector("#weatherImage");
        existingImage.style.backgroundImage=`url('./${imageType}.png')`;
        
        const temp=document.querySelector("#temperature");
        temp.innerText=`${main.temp}°C`;
        const cityHeader=document.querySelector("#city-name");
        cityHeader.innerText=city[0].toUpperCase()+city.slice(1);
        const humidity=document.querySelector(".temp .humidity #hdata");
        humidity.innerText=`${main.humidity}%`;
        const windSpeed=document.querySelector(".temp .windSpeed #wdata");
        windSpeed.innerText=`${wind.speed}km/h`;    
    }).catch((e)=>{
        console.log("OOPSSS AN ERRO",e);
    });
});
