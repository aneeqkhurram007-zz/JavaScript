const card = document.querySelector(".card-body")
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/name/nepal");
request.send();

request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const innerHtml = `     
   
      <h4 class="card-title">${data.name.toUpperCase()}</h4>
      <img src=${data.flag} style="width: 125px; height: 100px" />
      <p class="card-text" style="padding: 10px">
       ${data.capital}
      </p>
   

`
    card.insertAdjacentHTML("afterbegin", innerHtml)

})