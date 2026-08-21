let input = document.getElementById("input");
let button = document.querySelector("button");
let kota = document.getElementById("kota");
let suhu = document.getElementById("suhu");
let kelembapan = document.getElementById("kelembapan"); 
let cuaca = document.getElementById("cuaca");
let kecepatan = document.getElementById("kecepatan");
let tabel = document.getElementById("tabel");
let tekanan = document.getElementById("tekanan");
const apiKey = "f2bde5f6dd24ea4b9c7acf32a8f88340"; 
let container = document.getElementById("container");
tabel.style.display = "none";

container.addEventListener('wheel', function(e){
e.preventDefault();
container.scrollLeft += e.deltaY 
})

button.addEventListener("click", function() {
    async function getWeather() {   
        
            let namakota = input.value;
         
const link = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${namakota}&appid=${apiKey}&units=metric&lang=id`);
if (namakota === "") {
    alert("masukkan nama kota!");
    return;
}
if (!link.ok) {
    alert("kota tidak ditemukan!");
    input.value = "";
    return;
} 
  tabel.style.display = "block";
           tabel.style.display = "flex";
            input.value = "";
const data = await link.json();
kota.innerHTML = `kota: ${data.name}, ${data.sys.country}`
suhu.innerHTML = `suhu: ${data.main.temp}°C, terasa seperti: ${data.main.feels_like}°C`
kelembapan.innerHTML = `kelembapan: ${data.main.humidity}%`
cuaca.innerHTML = `cuaca: ${data.weather[0].description}`
kecepatan.innerHTML = `kecepatan angin: ${data.wind.speed} m/s`
tekanan.innerHTML = `tekanan: ${data.main.pressure} hPa`

const iconcode = data.weather[0].icon;
const iconurl = `https://openweathermap.org/img/wn/${iconcode}@2x.png`;
document.getElementById('icon').src = iconurl
}
getWeather();
})



