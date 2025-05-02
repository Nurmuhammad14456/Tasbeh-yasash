let bos = 0;

function inc() {
  bos++;
  document.querySelector(".count").innerHTML = bos;

  if (bos >= 33) {
    document.getElementById("text").innerHTML = "Alhamdulillah";
  }
  if (bos >= 66) {
    document.getElementById("text").innerHTML = "Ollohu Akbar";
  }
  if (bos >= 100) {
    document.querySelector(".count").innerHTML = bos = 0;
  }
}
