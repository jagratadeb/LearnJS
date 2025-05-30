let randomInt = Math.floor(Math.random() * 100) + 1;
let computerNumber = randomInt;
let chance = 1;
let guess = null;

alert("NUMBER KNOCK GAME\nYou have 10 chances!");

while (chance <= 10) {
    guess = Number(prompt("Enter your guess: "));
    if (isNaN(guess)) {
        alert(`Number is invalid! \nRemaining Chances: ${10 - chance}`);
    } else if (guess < computerNumber) {
        alert(`The number is too low! \nRemaining Chances: ${10 - chance}`)
    } else if (guess > computerNumber) {
        alert(`The number is too high! \nRemaining Chances: ${10 - chance}`);
    }
    else {
        alert("Congatulations!! Your guess is correct!");
        break;
    }
    chance++;
}
if (chance === 11) {
    alert("OUT OF CHANCES");
}