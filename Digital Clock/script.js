function updateTime() {
  const clockElement = document.getElementById("clock");
  const now = new Date(); // Get the current date
  let hours = now.getHours(); // Get the current hour
  let minutes = now.getMinutes(); // Get the current minute
  let seconds = now.getSeconds(); // Get the current second

  //format hours,minutes,seconds to be in 2 digit
  hours = hours < 10 ? "0" + hours : hours; // Add a leading zero if the hour is less than 10 (0-9)
  minutes = minutes < 10 ? "0" + minutes : minutes; // Add a leading zero if the minute is less than 10 (0-9)
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000); // Update the time every second

updateTime();
