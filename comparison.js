function setUp()  {
    let info = {
        solved: false,
        counter: 0,
        answer: [],
        players: {

        }

    }
    console.log()
}


guessingGame();


function guessingGame () {
    let correctAnswer = Math.floor(Math.random() * 10)
    let solved = false;
    let answerArray = [];
    let names = prompt('What is your name?');
    let counter = 0;
    let playerInfo = {

    };
    if (names === null) {
        return;
    }
    while (solved === false) {
        let guess = prompt('Guess a number between 1 and 10');
        if (guess === null) {
            break;
        }
        else if (parseInt(guess) < correctAnswer) {
            counter++
            answerArray.push(parseInt(guess));
            alert(`Sorry ${names}, too low.`);
        } 
        else if (parseInt(guess) > correctAnswer) {
            counter++
            answerArray.push(parseInt(guess));
            alert(`Sorry ${names}, too high.`);
        }
        else if (counter === 0) {
            alert(`Correct ${names}!`);
            solved = true;
            playAgain();
        }
        else if (parseInt(guess) === correctAnswer)  {
            let answerString = answerArray.toString();
            alert(`Correct ${names}! Your previous guesses were ${answerString}!`);
            solved = true;
            playAgain();
            }
        }
}

function playAgain() {
    let positive = confirm("Do you want to play again?");
     if (positive) {
         guessingGame();
     }
}



let correctAnswer = Math.floor(Math.random() * 10)
console.log(correctAnswer);
let solved = false;
let answerArray = [];
let names = prompt('What is your name?');
let playerInfo = {

};
playerInfo[names] = 0;
console.log(playerInfo)



let info = {
    correctAnswer: Math.floor(Math.random() * 10),
    solved: false,
    answerArray: [],
    names: prompt('What is your name?'),
    playerInfo: {
        
    }
}