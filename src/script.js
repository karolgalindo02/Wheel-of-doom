console.log("JavaScript is ready to run");

var elementToChange = document.getElementsByTagName("body")[0];
elementToChange.style.cursor = "url('/src/icons/garfio.cur'), auto";

/* --- Jorge --- */
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
const restartButton = document.getElementById('restart__btn')
let selectPlayer;

/* --- Karol --- */
// Obtener el elemento de audio
const audioElement = document.querySelector('audio');

// Función para reproducir/pausar el audio
function togglePlay() {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
}

// Función para ajustar el volumen del audio
function setVolume() {
  const volume = document.getElementById('r').value / 100;
  audioElement.volume = volume;
}

/* --- Juan --- */
const imgMovement = { 
    container : document.getElementsByClassName('example__img'), 
    img : document.getElementById('player__image'),
    leftPosition : 0,
    topPosition : 0,
}

const initialValues = {
    initialLeft : imgMovement.leftPosition = 0,
    initialTop : imgMovement.topPosition = 0,
}

continueButton.addEventListener('click', function () {
    overLay.classList.remove('active')
    hide()
})

const shark = document.getElementById('shark__gif')

function hide(){
    restartButton.style.display = 'none'
    imgMovement.img.style.display = 'none'
    shark.style.display = 'none'
    imgMovement.leftPosition = initialValues.initialLeft;
    imgMovement.topPosition = initialValues.initialTop;
    imgMovement.img.style.top = imgMovement.topPosition + "px";
}

/* --- Jorge --- */
function addPlayer(nombre, lista) {
    const player = nombre.value;
    console.log(player)
    if (player !== '') {
        players.push(player);
        console.log(players)

        let new_element = document.createElement('li');
        new_element.textContent = player;
        new_element.classList.add('list_item') // class of list 'li'
        lista.appendChild(new_element);
        //clear input
        nombre.value = '';
    }
}


function nextPlayer(playersArray, containerPlayer) {

    if (playersArray.length === 1) {
        const winner = playersArray[0];
        console.log('El ganador es: ', winner);
        alert('¡El ganador es: ' + winner + '!')
        killButton.disabled
        nextButton.disabled
        restartButton.style.display = 'flex'
    }

    const playerRamdom = Math.floor(Math.random() * playersArray.length); // select player ramdom in array
    selectPlayer = playersArray[playerRamdom] // name of player select 
    playersArray.splice(playerRamdom, 1) //Delete playerselect ramdom
    

    let newNameElement = document.createElement('h4');
    newNameElement.textContent = selectPlayer;
    newNameElement.classList.add('name')
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

/* --- Juan --- */
//Event list:

nextButton.addEventListener('click', function () {
    nextPlayer(arrayP, playerContainer)
    let interval = setInterval(moveImgLeft, 10)

    function moveImgLeft(){
        imgMovement.img.style.display = 'flex'
        imgMovement.leftPosition = imgMovement.leftPosition - 1;
        imgMovement.img.style.left = imgMovement.leftPosition + "px";
    
        if ( imgMovement.leftPosition === -240 ) {
            clearInterval(interval)
        }
    }
})

killButton.addEventListener('click', function () {
    killPlayer(playerContainer, selectPlayer)
    let interval = setInterval(moveImgDown, 10)

    function moveImgDown(){
        shark.style.display = 'flex'
        imgMovement.topPosition = imgMovement.topPosition + 5;
        imgMovement.img.style.top = imgMovement.topPosition + "px";

        if ( imgMovement.topPosition === 245 ) {
            clearInterval(interval)
            playDeathSound();

            playAhoySound();
        }
    }
})

continueButton.addEventListener('click', function () {
    overLay.classList.remove('active')
})

restartButton.addEventListener('click', function () {
    location.href = 'index.html'
})

window.addEventListener('load', hide)

continueButton.addEventListener('click', function(){
    overLay.classList.remove('active')
})

restartButton.addEventListener('click', function () {
    location.href = ('index.html')
})

window.addEventListener('load', hide)

/* --- Karol --- */

function changeFunctionality() {
    const image = document.getElementById('image');
    image.src = '/src/icons/silencio.png';
    image.onclick = changeFunctionality2;
  }

const backgroundMusic = document.getElementById('background-sound');
const sonido = document.querySelector('.audio-player');
const ahoySound = new Audio('./src/music/ahoy.mp3');
const deathSound = new Audio('./src/music/muerte.mp3');

function loro() {
  sonido.src = './src/music/loro.mp3';
  sonido.play();
}

function playAhoySound() {
  ahoySound.play();
  backgroundMusic.play();
}

function playDeathSound() {
    deathSound.play();
  }