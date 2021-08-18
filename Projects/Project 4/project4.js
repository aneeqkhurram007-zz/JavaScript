
const calculateTemp = () => {
    const number = document.getElementById("number").value
    console.log(number);

    const select = document.querySelector("select");
    const value = select.options[select.selectedIndex].value;
    let p = document.querySelector('p');
    let converted;
    if (value === "cel") {
        converted = (9 / 5) * number + 32;
        p.innerHTML = `${converted} F`
    }
    else {
        converted = (5 / 9) * (number - 32);
        p.innerHTML = `${converted} C`

    }

}