const day = document.querySelector(".day");
const time = document.querySelector(".time");
const deta = document.querySelector(".deta");

function timeFormat() {
  let date = new Date();
  let hour = date.getHours();
  let mint = date.getMinutes();
  let second = date.getSeconds();

  mint = mint < 10 ? ` 0 ${mint}` : mint;
  second = second < 10 ? ` 0 ${second}` : second;
  return `${hour} : ${mint} : ${second}`;
}

function dayFormat() {
  let date = new Date();
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return weekDays[date.getDate()];
}

function detaFormat() {
  let date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return date.getDate() + " - " + months[date.getDate()];
}

time.innerHTML = timeFormat();
deta.innerHTML = detaFormat();
day.innerHTML = dayFormat();
setInterval(() => {
  time.innerHTML = timeFormat();
  day.innerHTML = dayFormat();
}, 1000);
