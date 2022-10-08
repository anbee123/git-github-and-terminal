const submitBtn = document.querySelector("button");
const inputBox = document.querySelector("input");
const titleH1 = document.querySelector('h1');

const tempDisplay = document.querySelector("#temperature");
const feelDisplay = document.querySelector("#feel-like");
const conditionDisplay = document.querySelector("#condition");



submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    city = inputBox.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=4099a0d6348fc13281114ea7785b4a18`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const temp = data["main"]["temp"] 
            const feelslike = data["main"]["feels_like"]
            const condition = data["weather"][0]["main"] 

            tempDisplay.innerHTML = "Temperature: " + Math.round(temp) + "°F"; 
            feelDisplay.innerHTML = "Feels like: " + Math.round(feelslike) + "°F";
            conditionDisplay.innerHTML = "Condition: "  + condition;
            titleH1.innerHTML = "Weather for: " + data.name;

            
        })
        .catch((err) => console.log(err));
