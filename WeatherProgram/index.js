const apiKey = '6d736d4afff3f21c24cfb122e8a43dd2';

async function getWeather(){
    var cityName = document.getElementById("cityEdit").value;
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    var response = await fetch(weatherUrl);
    try
    {
        if (response.ok){
            displayInformation(await response.json());
        }
        else{
            throw new Error("City hasn't been found!");
        }
    }
    catch(error){
        console.error(error);
        displayError(error);
    }
}

function displayInformation({name: city,
                             main: {temp,humidity},
                             weather: [{description,id}]}) 
{
    const weatherCard = document.getElementsByClassName("weatherCard")[0]; 
            
    while (weatherCard.firstChild) {
        weatherCard.removeChild(weatherCard.lastChild);
    }

    const cityDisplay = document.createElement("p");
    const tempDisplay = document.createElement("p");
    const tempNumberDisplay = document.createElement("span");
    const humidityDispay = document.createElement("p");
    const humidityNumberDispay = document.createElement("span");
    const descrDisplay = document.createElement("p");
    const emojiDisplay = document.createElement("img");

    cityDisplay.id = "city";
    tempNumberDisplay.id = "temp";
    humidityNumberDispay.id = "humidity";
    descrDisplay.id = "description";
    emojiDisplay.id = "emoji";

    cityDisplay.textContent = city;
    tempDisplay.textContent = "Temperature:";
    tempNumberDisplay.textContent = `${Math.floor(temp - 273)}°C`
    humidityNumberDispay.textContent = `${humidity} %`
    tempDisplay.append(tempNumberDisplay);
    humidityDispay.textContent = "Humidity:";
    humidityDispay.append(humidityNumberDispay);
    descrDisplay.textContent = description;
    const emojiInfo = getEmojiPath(id);
    emojiDisplay.src = emojiInfo[0];
    emojiDisplay.alt = emojiInfo[1];
    
    weatherCard.appendChild(cityDisplay);
    weatherCard.appendChild(tempDisplay);
    weatherCard.appendChild(humidityDispay);
    weatherCard.appendChild(descrDisplay);
    weatherCard.appendChild(emojiDisplay);
}

function getEmojiPath(weatherId){
    var info = ["",""];
    switch (weatherId) {
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 231:
            info = ["images/thunderstorm/200.png","thuderstorm"];
            break;
        case 500:
        case 501:
        case 511:
        case 520:
        case 521:
            info = ["images/rain/500.png","rain"];
            break;
        case 502:
        case 503:
        case 504:
        case 522:
        case 531:
            info = ["images/rain/502.png","heavy rain"];
            break;
        case 600:
        case 601:
            info = ["images/snow/600.png","heavy rain"];
            break;    
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
            info = ["images/snow/600.png","heavy snow"];
            break;    
        case 620:
        case 621:
            info = ["images/snow/600.png","shower snow"]
            break;
        case 622:
            info = ["images/snow/600.png","heavy shower snow"]
            break;
        case 701:
            info = ["images/atmosphere/721.png","mist"];
            break;
        case 711:
            info = ["images/atmosphere/721.png","smoke"];
        case 721:
            info = ["images/atmosphere/721.png","haze"];
            break;
        case 731:
            info = ["images/atmosphere/721.png","dust"];
            break;
        case 741:
            info = ["images/atmosphere/741.png","fog"];
            break;
        case 751:
            info = ["images/atmosphere/721.png","sand"];
            break;
        case 761:
            info = ["images/atmosphere/721.png","dust"];
            break;
        case 762:
            info = ["images/atmosphere/781.png","volcanic ash"];
            break;
        case 771:
            info = ["images/atmosphere/781.png","squalls"];
            break;
        case 781:
            info = ["images/atmosphere/781.png","tornado"];
            break;
        case 800:
            info = ["images/clear/800.png","clear sky"];
            break;
        case 801:
            info = ["images/clouds/801.png","few clouds"];
            break;
        case 802:
            info = ["images/clouds/802.png","scattered clouds"];
            break;
        case 803:
            info = ["images/clouds/803.png","broken clouds"];
            break;
        case 804:
            info = ["images/clouds/804.png","overcast clouds"];
            break;    
        default:
            info = ["images/undefined/900.png","undefined"];
            break;
    }
    return info;
}

function displayError(error){
    const weatherCard = document.getElementsByClassName("weatherCard")[0]; 
    while (weatherCard.firstChild) {
        weatherCard.removeChild(weatherCard.lastChild);
    }
    const errorMessage = document.createElement("h3");
    errorMessage.classList.add("errorMsg");
    errorMessage.textContent = error;
    weatherCard.appendChild(errorMessage);
}