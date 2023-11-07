function updateTime() {
  let currentElement = document.querySelector("#current");
  let currentCityTimezone = moment.tz.guess();
  let currentDateTime = moment.tz(currentCityTimezone);
  currentElement.innerHTML = `<div id="#current">
          <h2>Here, Now</h2>
          <div class="date">${currentDateTime.format("MMMM D, YYYY")}</div>
          <div class="time">${currentDateTime.format(
            "h:mm:ss[<small>] A[</small>]"
          )}</div></div>`;

  // New York
  /* let nyElement = document.querySelector("#ny");
  let nyDateElement = nyElement.querySelector(".date");
  let nyTimeElement = nyElement.querySelector(".time");
  let nyDateTime = moment().tz("America/New_York");
  nyDateElement.innerHTML = nyDateTime.format("MMMM D, YYYY");
  nyTimeElement.innerHTML = nyDateTime.format("h:mm:ss[<small>] A[</small>]");*/

  // Giza

  let gizaElement = document.querySelector("#giza");
  let gizaDateElement = gizaElement.querySelector(".date");
  let gizaTimeElement = gizaElement.querySelector(".time");
  let gizaDateTime = moment().tz("Africa/Cairo");
  gizaDateElement.innerHTML = gizaDateTime.format("MMMM D, YYYY");
  gizaTimeElement.innerHTML = gizaDateTime.format(
    "h:mm:ss[<small>] A[</small>]"
  );
}

function updateCitySelect(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityDateTime = moment().tz(cityTimezone);
  let firstCityElement = document.querySelector("#selected-city");
  firstCityElement.innerHTML = `<div id="#selected-city">
          <h2>${cityName}</h2>
          <div class="date">${cityDateTime.format("MMMM D, YYYY")}</div>
          <div class="time">${cityDateTime.format(
            "h:mm:ss[<small>] A[</small>]"
          )}</div></div>
          <a href="index.html">Back</a>`;
  let secondCityElement = document.querySelector("#giza");
  secondCityElement.remove();
  let hrElement = document.querySelector("hr");
  hrElement.remove();
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCitySelect);

updateTime();
setInterval(updateTime, 1000);
