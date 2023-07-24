const arrayP = ['jorge', 'karol', 'jjulian', 'andrews', 'carlos', 'melany', 'juan']

const killButton = document.getElementById('kill__button')
var playerContainer = document.getElementsByClassName('player__container')[0]
const nextButton = document.getElementById('next__button')
const overLay = document.getElementById('overlay')
const continueButton = document.getElementById('btn__continue')
const playerEliminated = document.getElementsByClassName('player__eliminated')[0]
let selectPlayer;


function nextPlayer(playersArray, containerPlayer) {

    if (playersArray.length === 1) {
        const winner = playersArray[0];
        console.log('El ganador es: ', winner);
        alert('¡El ganador es: ' + winner + '!')
        nextButton.disabled = true;
        killButton.disabled = true;
        return;
    }

    const playerRamdom = Math.floor(Math.random() * playersArray.length); // select player ramdom in array
    selectPlayer = playersArray[playerRamdom] // name of player select 
    playersArray.splice(playerRamdom, 1) //Delete playerselect ramdom


    let newNameElement = document.createElement('h4');
    newNameElement.textContent = selectPlayer;
    newNameElement.classList.add('name')
    containerPlayer.appendChild(newNameElement);
    console.log(playersArray)
    killButton.disabled = false;
    nextButton.disabled = true;

}


function killPlayer(containerPlayer, elimatedPlayer) {
    while (containerPlayer.firstChild) {
        containerPlayer.removeChild(containerPlayer.firstChild);
        //pendiende agregar animacion de muerte

        setTimeout(function () {
            overLay.classList.add('active');
        }, 2000);
        playerEliminated.textContent = elimatedPlayer + ' ha muerto'
        continueButton.disabled = false;

        killButton.disabled = true;
        nextButton.disabled = false;
    }
}


//Event list:


nextButton.addEventListener('click', function () {
    nextPlayer(arrayP, playerContainer)
})

killButton.addEventListener('click', function () {
    killPlayer(playerContainer, selectPlayer)
})

continueButton.addEventListener('click', function () {
    overLay.classList.remove('active')
})
nextButton.disabled = false;