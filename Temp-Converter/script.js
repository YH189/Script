const textbox = document.getElementById("textbox");
const fahrRadio = document.getElementById("fahr");
const celRadio = document.getElementById("cel");
const result = document.getElementById("answer");
let temp;

function check() {
  if (fahrRadio.checked) {
    temp = Number(textbox.value);
    temp = (temp - 32) / 1.8;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (celRadio.checked) {
    temp = Number(textbox.value);
    temp = temp * 1.8 + 32;
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "Select any 1 Unit to convert";
  }
}
