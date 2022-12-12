let correctAnswer = 7;

let guess = prompt('Guess a number between 1 and 10')

if (parseInt(guess) === correctAnswer)  {
    console.log("You guessed right")
} else {
    if (parseInt(guess) < correctAnswer) {
        console.log("You guessed wrong, try a higher number")
    } else {
        console.log("You guessed wrong, try a lower number")
    }
}







