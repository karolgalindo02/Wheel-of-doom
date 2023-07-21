const arrayP = ['jorge', 'karol', 'jjulian', 'andrews', 'carlos', 'melany', 'juan']

const killButton = document.getElementById('kill__button')
var playerContainer = document.getElementsByClassName('player__container')[0]
const nextButton = document.getElementById('next__button')
const overLay = document.getElementById('overlay')
const continueButton = document.getElementById('btn__continue')
const restartButton = document.getElementById('restart__btn')
const playerEliminated = document.getElementsByClassName('player__eliminated')[0]
let selectPlayer;

const imgMovement = { 
    container : document.getElementsByClassName('example__img'), 
    img : document.getElementById('player__image'),
    leftPosition : 0,
    topPosition : 0,
}
const shark = document.getElementById('shark__gif')

function hide(){
    restartButton.style.display = 'none'
    imgMovement.img.style.display = 'none'
    shark.style.display = 'none'
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

        if ( imgMovement.topPosition === 250 ) {
            clearInterval(interval)
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