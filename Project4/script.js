let randomNumber = parseInt(Math.random()*100 + 1)
// console.log(randomNumber)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining')
const loworHi = document.querySelector('.loworHi')
const startOver = document.querySelector('.result-paras')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click' ,(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    //Here we will check the number whether it is between the range or not or even a number or not
    if(isNaN(guess)){
        alert('Please enter a valid number');
    } else if(guess < 1){
        alert('Please enter a number less than 1')
    } else if(guess > 100){
        alert('Please enter a number less than 100')
    } else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber} `)
            endGame();
        } else{
            displayGuess(guess)
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //here we will evaluate whether the number guessed is equal to the random number or not
    if(guess === randomNumber){
        displayMessage(`You guessed it right.`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number is TOOO low`)
    } else if(guess > randomNumber){
        displayMessage(`Numberis TOOO high`)
    }
}

function displayGuess(guess){
    // here we will clean up the things
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    // Here we will display the message during the process
    loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    //here, we will end the game and give a button to start a new game
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    startGame();
}

function startGame(){
    //here we will reset the variables
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
        
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML='';
        loworHi.innerHTML='';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}