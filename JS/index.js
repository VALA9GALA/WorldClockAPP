function updateTime() {
  // New York
  let nyElement = document.querySelector("#ny");
  let nyDateElement = nyElement.querySelector(".date");
  let nyTimeElement = nyElement.querySelector(".time");
  let nyDateTime = moment().tz("America/New_York");
  nyDateElement.innerHTML = nyDateTime.format("MMMM D, YYYY");
  nyTimeElement.innerHTML = nyDateTime.format("h:mm:ss[<small>] A[</small>]");

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
  event.preventDefault();
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityDateTime = moment().tz(cityTimezone);
  let firstCityElement = document.querySelector("#selected-city");
  firstCityElement.innerHTML = `<div id="#selected-city">
          <h2>${cityName}</h2>
          <div class="date">${cityDateTime.format("MMMM D, YYYY")}</div>
          <div class="time">${cityDateTime.format(
            "h:mm:ss[<small>] A[</small>]"
          )}</div></div>`;
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCitySelect);

updateTime();
setInterval(updateTime, updateCitySelect, 1000);
