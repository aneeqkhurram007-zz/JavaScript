const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const API_KEY = '8362d851b2c2fec17202d7f65fd5d529'
const city_name = document.getElementById('city_name');
const tempValue = document.getElementById('tempValue');
const data_hide = document.querySelector('.data_hide');
const today_date = document.getElementById('today_date');
const day = document.getElementById('day');

today_date.innerHTML = `${new Date().getDate()} / ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`

const d = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const n = weekday[d.getDay()];
day.innerHTML = n
const getTemperature = async (value) => {
    try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${API_KEY}`)
        const data = await res.json();
        city_name.innerHTML = `${data.name}`
        if (data.name != '') {

            data_hide.classList.remove('data_hide')
            tempValue.innerHTML = `${data.main.temp}`


        }


    } catch (error) {
        console.log(error);
    }

}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const value = cityname.value
    if (value) {
        getTemperature(value)
    }
    else {
        city_name.innerHTML = `Please Enter a value`
        data_hide.classList.add('data_hide')
    }
})