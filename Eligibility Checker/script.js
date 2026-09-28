const labelshow = document.getElementById("inputin");
const btnclick = document.getElementById("submit");
const resultshow = document.getElementById("result");
let age;
btnclick.onclick = function () {
  age = labelshow.value;
  age = Number(age);

  if (age == 18) {
    resultshow.textContent = `You are eligible`;
  } else if (age <= 0) {
    resultshow.textContent = `Enter a valid number`;
  } else if (age < 18) {
    resultshow.textContent = `You must be 18+ to apply`;
  } else if (age <= 95) {
    resultshow.textContent = `Welcome to our services`;
  } else if (age <= 200) {
    resultshow.textContent = `You are too old to apply & sorry you are not eligible`;
  } else {
    resultshow.textContent = `You should pass the eligibiltity criteria`;
  }
};
