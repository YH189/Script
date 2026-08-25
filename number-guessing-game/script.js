const min = 23;
const max = 120;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempt = 1;
let guess;
let runn = true;
while (runn) {
  guess = Number(window.prompt(`Enter a number between ${min}-${max}`));
  if (isNaN(guess)) {
    window.alert("Enter a number");
  } else if (guess < min || guess > max) {
    window.alert(`Enter the number between ${min}-${max}`);
  } else {
    attempt++;
    if (guess > answer) {
      window.alert("The given Number is TOO HIGH!");
    } else if (guess < answer) {
      window.alert("The given Number is TOO LOW");
    } else {
      window.alert(
        `CONGRATS! You guessed the number after ${attempt} attempt`,
      );
      runn = false;
    }
  }
}
