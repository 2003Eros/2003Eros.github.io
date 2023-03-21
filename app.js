const apiKey = "1d5e4710bada16dfa1130d9ac0915dbd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const container = document.querySelector(".container");
const city = document.querySelector(".ciudad");
const temperature = document.querySelector(".grados");
const description = document.querySelector(".desc");
const viento = document.querySelector(".viento");
const tempMax = document.querySelector(".max");
const tempMin = document.querySelector(".min");
const humedad = document.querySelector(".humedad-p");
const clima = document.querySelector(".main");
const LinkeIn = document.querySelector(".li");

const buscarBtn = document.querySelector('#buscar-btn');

buscarBtn.addEventListener('click', () => {
  const ciudadSelect = document.querySelector('#ciudad');
  const ciudad = ciudadSelect.value;

function getWeather(cityName) {
  fetch(`${apiUrl}${cityName}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      city.textContent = data.name;
      temperature.textContent = `${Math.floor(data.main.temp)}°`;
      description.textContent = data.weather[0].description;
      viento.textContent = "Viento: " + data.wind.speed + "m/s";
      humedad.textContent = data.main.humidity + "%";
      tempMax.textContent = `${Math.floor(data.main.temp_max)}°`;
      tempMin.textContent = `${Math.floor(data.main.temp_min)}°`;
      clima.textContent = data.weather[0].main;
      LinkeIn.textContent = edadEnAnios;
    })
    
    .catch(() => {
      city.textContent = "No se pudo encontrar la ciudad.";
      temperature.textContent = "";
      description.textContent = "";
      viento.textContent = " ";
      humedad.textContent = " ";
      tempMax.textContent = "";
      tempMin.textContent = "";
      clima.textContent = " ";
      LinkeIn.textContent = " ";

    });
  }
  getWeather(ciudad);
  });


  const body = document.querySelector('body');
  const ciudad = document.querySelector('.ciudad');
  const hour = new Date().getHours();

if (hour >= 20 || hour <= 6) {
  body.style.backgroundColor = '#151515';
  ciudad.style.color = 'white';
} else {
  body.style.backgroundColor = '#A4EBF3';
  ciudad.style.color = 'black';
}


const fechaNacimiento = new Date('2003-07-24');
const edadEnMilisegundos = Date.now() - fechaNacimiento.getTime();
const edad = new Date(edadEnMilisegundos);
const edadEnAnios = Math.abs(edad.getUTCFullYear() - 1970);







