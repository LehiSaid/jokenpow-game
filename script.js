const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const finalMessage = document.getElementById("final-message");
const MAX_WINS = 2; // melhor de 3
const soundWin = new Audio("sounds/win.mp3");
const soundLose = new Audio("sounds/lose.mp3");
const soundDraw = new Audio("sounds/draw.mp3");



let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine());

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}


const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + " Máquina: " + machine)

    if (human === machine) {
        result.textContent = "Empate!";
        soundDraw.play();
    } else if ((human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "Você ganhou!"
        soundWin.play();
        checkWinner();
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Você perdeu!"
        soundLose.play();
        checkWinner();
    }
}

const animeBackgrounds = [
    "img/anime.jpg",
    "img/cavaleiros1.jpg",
    "img/cavaleiros2.jpg",
    "img/naruto1.jpg",
    "img/naruto2.jpg",
    "img/naruto3.jpg",
    "img/dbz1.jpg",
    "img/dbz2.jpg",
    "img/dbz3.jpg",
];

animeBackgrounds.forEach(src => {
    const img = new Image();
    img.src = src;
});


let currentBg = 0;

function changeBackground() {
    document.body.style.setProperty(
        "--bg",
        `url('${animeBackgrounds[currentBg]}')`
    );

    currentBg = (currentBg + 1) % animeBackgrounds.length;
}

// fundo inicial
changeBackground();

// troca a cada 8 segundos
setInterval(changeBackground, 6000);


function checkWinner() {
    if (humanScoreNumber === MAX_WINS) {
        showFinalMessage("🏆 Você venceu a melhor de 3!", "win");
        resetGame();
    }

    if (machineScoreNumber === MAX_WINS) {
        showFinalMessage("🤖 A Alexa venceu a melhor de 3!", "lose");
        resetGame();
    }
}

function showFinalMessage(text, type) {
    finalMessage.textContent = text;
    finalMessage.className = `final-message show ${type}`;

    setTimeout(() => {
        finalMessage.className = "final-message";
    }, 3000);
}

function resetGame() {
    humanScoreNumber = 0;
    machineScoreNumber = 0;

    humanScore.textContent = 0;
    machineScore.textContent = 0;
    result.textContent = "Novo jogo iniciado!";
}


