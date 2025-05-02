const phoneNumber = document.querySelector(".phone-nmber");
const musicEl = document.querySelector(".music");

const nmbers = [
  "+998 90 123 45 67 ",
  "+998 91 111 33 23",
  "+998 93 345 67 89 ",
  "+998 93 567 89 01 ",
  "+998 93 765 43 21 ",
  "+998 93 888 88 88 ",
  "+998 93 999 99 99 ",
  "+998 94 123 45 67 ",
  "+998 94 321 09 87 ",
  "+998 99 444 55 66 ",
];
function randomes() {
  const interval = setInterval(() => {
    let randonNumber = Math.floor(Math.random() * nmbers.length);
    phoneNumber.innerHTML = nmbers[randonNumber];
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    musicEl.play();
  }, 2500);
}
