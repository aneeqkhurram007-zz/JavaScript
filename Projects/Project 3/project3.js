let thermo = document.querySelector("i");
setInterval(() => {

    setTimeout(() => {
        thermo.className = "fas fa-thermometer-quarter"
        thermo.style.color = "yellow"
    }, 1000);
    setTimeout(() => {
        thermo.className = "fas fa-thermometer-half"
    }, 2000);
    setTimeout(() => {
        thermo.className = "fas fa-thermometer-three-quarters"
    }, 3000);

    setTimeout(() => {
        thermo.className = "fas fa-thermometer-full"
        thermo.style.color = "red"

    }, 4000);


}, 5000);