console.log("JavaScript is ready to run");
var playersInput = document.getElementById('players__input');
var playersList = document.getElementsByClassName('players__list')[0];
var players = []; // this is array of plaryers list
const arrayP = ['jorge', 'karol', 'jjulian', 'andrews', 'carlos', 'melany', 'juan']

const killButton = document.getElementById('kill__button')
var playerContainer = document.getElementsByClassName('player__container')[0]
const nextButton = document.getElementById('next__button')
const overLay = document.getElementById('overlay')
const continueButton = document.getElementById('btn__continue')
const playerEliminated = document.getElementsByClassName('player__eliminated')[0]
const startGameButton = document.getElementById('star_game')
let selectPlayer;



function addPlayer(nombre, lista) {
    const player = nombre.value;
    console.log(player)
    if (player !== '') {
        players.push(player);
        console.log(players)

        let eraserButton = document.createElement('button')
        eraserButton.classList.add('eraser')
        let new_element = document.createElement('li');
        new_element.textContent = player;
        new_element.classList.add('list_item') // class of list 'li'
        lista.appendChild(new_element);
        lista.appendChild(eraserButton)
        //clear input
        nombre.value = '';
        eraserButton.addEventListener('click', erasePlayer(player))
    }
}

function erasePlayer(player){
}

function startGame(){
    if ( players.length >= 2){
        location.href = "game.html"
    }
    else {
        alert("Se necesitan almenos dos jugadores para iniciar")
    }
}


function nextPlayer(playersArray, containerPlayer) {

    if (playersArray.length === 1) {
        const winner = playersArray[0];
        console.log('El ganador es: ', winner);
        alert('¡El ganador es: ' + winner + '!')
    }

    const playerRamdom = Math.floor(Math.random() * playersArray.length); // select player ramdom in array
    selectPlayer = playersArray[playerRamdom] // name of player select 
    playersArray.splice(playerRamdom, 1) //Delete playerselect ramdom
    

    let newNameElement = document.createElement('h4');
    newNameElement.textContent = selectPlayer;
    containerPlayer.appendChild(newNameElement);
    console.log(playersArray)

}


function killPlayer(containerPlayer, elimatedPlayer) {
    while (containerPlayer.firstChild) {
        containerPlayer.removeChild(containerPlayer.firstChild);
        //pendiende agregar animacion de muerte

        setTimeout(function () {
            overLay.classList.add('active');
        }, 2000);
    playerEliminated.textContent = elimatedPlayer + ' ha muerto'
    }
}


//Event list:


document.getElementById("save").addEventListener('click', function () {
    addPlayer(playersInput, playersList)
});

nextButton.addEventListener('click', function () {
    nextPlayer(arrayP, playerContainer)
})

killButton.addEventListener('click', function () {
    killPlayer(playerContainer, selectPlayer)
})

continueButton.addEventListener('click', function(){
    overLay.classList.remove('active')
})


