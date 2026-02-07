const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

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
        result.textContent = "Empate!"
    } else if ((human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Você perdeu!"
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


let currentBg = 0;

function changeBackground() {
    document.body.style.backgroundImage =
        `url('${animeBackgrounds[currentBg]}')`;

    currentBg = (currentBg + 1) % animeBackgrounds.length;
}

// fundo inicial
changeBackground();

// troca a cada 8 segundos
setInterval(changeBackground, 3000);


