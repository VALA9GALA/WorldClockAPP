function updateTime() {
  // New York
  let nyElement = document.querySelector("#ny");
  let nyDateElement = nyElement.querySelector(".date");
  let nyTimeElement = nyElement.querySelector(".time");
  let nyDateTime = moment().tz("America/New_York");
  nyDateElement.innerHTML = nyDateTime.format("MMMM D, YYYY");
  nyTimeElement.innerHTML = nyDateTime.format("h:mm:ss[<small>] A[</small>]");

  /* // Los Angeles
  let laElement = document.querySelector("#la");
  let laDateElement = laElement.querySelector(".date");
  let laTimeElement = laElement.querySelector(".time");
  let laDateTime = moment().tz("America/Los_Angeles");
  laDateElement.innerHTML = laDateTime.format("MMMM D, YYYY");
  laTimeElement.innerHTML = laDateTime.format("h:mm:ss[<small>] A[</small>]");

  // Mexico City
  let mexicoCityElement = document.querySelector("#mexico-city");
  let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
  let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
  let mexicoCityDateTime = moment().tz("America/Mexico_City");
  mexicoCityDateElement.innerHTML = mexicoCityDateTime.format("MMMM D, YYYY");
  mexicoCityTimeElement.innerHTML = mexicoCityDateTime.format(
    "h:mm:ss[<small>] A[</small>]"
  );*/
}

updateTime();
setInterval(updateTime, 1000);
