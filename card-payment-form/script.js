const checkbox = document.getElementById("checkit");
const visabtn = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const submit = document.getElementById("submit");
const Paypl = document.getElementById("Paypal");
const subresult = document.getElementById("subresult");
const submitbtn = document.getElementById("submitbtn");
submit.onclick = function () {
  if (checkbox.checked) {
    subresult.textContent = `You are subscribed`;
  } else {
    subresult.textContent = `You should subscribe first!`;
  }
  if (visabtn.checked) {
    submitbtn.textContent = `Payment by using Visa`;
  } else if (mastercard.checked) {
    submitbtn.textContent = `Payment by using mastercard`;
  } else if (Paypl.checked) {
    submitbtn.textContent = `Payment by using Paypal`;
  } else {
    submitbtn.textContent = `Choose any of the given Card payment!`;
  }
};
