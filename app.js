// // function setUp()  {
// //     let info = {
// //         solved: false,
// //         counter: 0,
// //         answer: [],
// //         players: {

// //         },
// //         secretNumber: Math.floor(Math.random() * 10)    
// //     }
// //     let userName = prompt('What is your name?');
// //     info.players[userName] = 0;
// //     return info;
// // }
// // setUp();
// // // playerName();
// // console.log(setUp())

// // function startGame () {

// // }

// // function playerName () {
// //     let userName = prompt('What is your name?');
// //     return userName;
// // }
// // function setUp()  {
// //     let info = {
// //         solved: false,
// //         counter: 0,
// //         answer: [],
// //         players: {

// //         }

// //     }
// //     console.log()
// // }

// // THIS IS WHERE THE OLD CODE FOR THE GAME BEGINS//
// // guessingGame();


// // function guessingGame () {
// //     // let correctAnswer = Math.floor(Math.random() * 10)
// //     // console.log(correctAnswer);
// //     // let solved = false;
// //     // let answerArray = [];
// //     // let names = prompt('What is your name?');
// //     // let playerInfo = {

// //     // };
// //     let info = {
// //         correctAnswer: Math.floor(Math.random() * 10),
// //         solved: false,
// //         answerArray: [],
// //         names: prompt('What is your name?'),
// //         playerInfo: {
            
// //         },
// //         counter: 0
// //     }
// //     // info.playerInfo[names] = 0;
// //     console.log(info)
// //     if (info.names === null) {
// //         return;
// //     }
// //     while (info.solved === false) {
// //         let guess = prompt('Guess a number between 1 and 10');
// //         if (guess === null) {
// //             break;
// //         }
// //         else if (parseInt(guess) < info.correctAnswer) {
// //             info.playerInfo[names]++;
// //             info.counter++;
// //             console.log(info.playerInfo)
// //             info.answerArray.push(parseInt(guess));
// //             alert(`Sorry ${info.names}, too low.`);
// //         } 
// //         else if (parseInt(guess) > correctAnswer) {
// //             info.playerInfo[names]++;
// //             info.counter++;
// //             console.log(playerInfo)
// //             info.answerArray.push(parseInt(guess));
// //             alert(`Sorry ${info.names}, too high.`);
// //         }
// //         else if (counter === 0) {
// //             alert(`Correct ${info.names}!`);
// //             info.solved = true;
// //             playAgain();
// //         }
// //         else if (parseInt(guess) === correctAnswer)  {
// //             let answerString = answerArray.toString();
// //             alert(`Correct ${names}! Your previous guesses were ${answerString}!`);
// //             solved = true;
// //             playAgain();
// //             }
// //         }
// // }

// // function playAgain() {
// //     let positive = confirm("Do you want to play again?");
// //      if (positive) {
// //          guessingGame();
// //      }
// // }
// // THIS IS WHERE THE OLD CODE FOR THE GAME ENDS

// function gameInit (obj) {
    
// }

// function guessingGame ()  {
//     let gameSettings = {
//         solved: false,
//         secretNumber: Math.floor(Math.random() * 10),
//         counter: [],
//         playerNames: {

//         } 
//     }
//     return gameSettings;
// }
        
//     let playerName = getName();
//     gameSettings.playerNames[playerName] = 0;
//     console.log(gameSettings.secretNumber)
    
//     while (!gameSettings.solved)  {

//         let answer = prompt("Guess a number between 1 - 10")

//         if (parseInt(answer) > gameSettings.secretNumber)  {

//             gameSettings.counter.push(parseInt(answer));

//             gameSettings.playerNames[playerName]++
//             console.log(gameSettings.playerNames)
//             alert(`Wrong ${playerName}, you guessed too high!`)

//         } else if (parseInt(answer) < gameSettings.secretNumber)  {

//             gameSettings.counter.push(answer);

//             gameSettings.playerNames[playerName]++
//             console.log(gameSettings.playerNames)
//             alert(`Wrong ${playerName}, you guessed too low!`)

//         } else {

//             alert(`Winner, ${playerName}! Your previous guesses were ${gameSettings.counter}!`);

//             gameSettings.solved = true;

//             gameSettings.playerNames[playerName] = 0;
//             console.log(gameSettings.playerNames)
//             playAgain();
//         }
//     }



// function playAgain () {
//     let playAgain = confirm("Do you want to play again?");
//     if (playAgain) {
//         guessingGame();
//     }
// }
// function getName () {
//     let playerName = prompt('What is your name');
//     return playerName;
// }

// guessingGame();

// How does localStorage work?

// To use localStorage in your web applications, there are five methods to choose from:

// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage
function gameInit() {
    let gameObj = {
        min: 1,
        max: 10,
    };

    return gameObj
}

function game(gameObj) {       
    let playerName = prompt('Please enter your name to begin playing:');

    gameObj.secretNum = randomNumber(gameObj.min, gameObj.max)
    gameObj = playerInit(playerName, gameObj);
    gameObj = playGame(playerName, gameObj);
    playAgain(gameObj);
}

function playerInit(name, obj) {
    if (obj[name] === undefined) {
        obj[name] = {
            guesses: [],
            tryHistory: 0
        };
    }
    return obj
}

function playGame(name, obj) {
    let gameComplete = false;

    while (!gameComplete) {
        let userGuess = prompt(`${name}, please enter your number guess in a range of ${obj.min}-${obj.max}:`);
        if (parseInt(userGuess) === obj.secretNum) {
            obj[name].guesses.push(userGuess); // Added in the event a player guesses on the first try.           
            winMessage(name, obj);
            obj[name].tryHistory = obj[name].guesses.length; // Records history of "tries" for this game session
            gameComplete = true;
            return obj;
        } else if ((parseInt(userGuess) < obj.secretNum)) {
            alert(`Sorry ${name}, your guess of ${userGuess} was too low.`);
            obj[name].guesses.push(userGuess)
        } else {
            alert(`Sorry ${name}, your guess of ${userGuess} was too high.`);
            obj[name].guesses.push(userGuess)
        }
    }
}

function playAgain(obj) {
    let playerAnswer = prompt(`Would you like to play again? (y/n)`);
    let answerArr = ['Y', 'y', 'N', 'n'];
    while (!answerArr.includes(playerAnswer)) {
            playerAnswer = prompt(`Please enter a "y" or "n" for your response`);
    }
    if ((playerAnswer === 'Y') || (playerAnswer === 'y')) {
        game(obj);
    }
}

function winMessage(name, obj) {
    if (obj[name].tryHistory === 0) {
        return alert(`Excellent ${name}, you guessed the secret number ${obj.secretNum}!\nIt only took you ${obj[name].guesses.length} tries.\nYour previous guesses where ${obj[name].guesses.join(', ')}!`);
    } else if (obj[name].guesses.length > obj[name].tryHistory) {
        return alert(`Excellent ${name}, you guessed the secret number ${obj.secretNum}!\nIt only took you ${obj[name].guesses.length} tries, which was ${obj[name].guesses.length - obj[name].tryHistory} more than your previous game.\nYour guesses where ${obj[name].guesses.join(', ')}!`);
    } else if (obj[name].guesses.length < obj[name].tryHistory) {
        return alert(`Excellent ${name}, you guessed the secret number ${obj.secretNum}!\nIt only took you ${obj[name].guesses.length} tries, which was ${obj[name].tryHistory - obj[name].guesses.length} less than your previous game.\nYour guesses where ${obj[name].guesses.join(', ')}!`);
    } else {
        return alert(`Excellent ${name}, you guessed the secret number ${obj.secretNum}!\nIt only took you ${obj[name].guesses.length} tries which was the same as your previous game.\nYour previous guesses where ${obj[name].guesses.join(', ')}!`);
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

game(gameInit);