console.log("JavaScript is ready to run");
var playersInput = document.getElementById('players__input');
var playersList = document.getElementsByClassName('players__list') [0];
var players = []; // this is array of plaryers list

var killButton = document.getElementById('kill__button')
var playerContainer = document.getElementsByClassName('player__container') [0]


function addPlayer(nombre, lista) {
    var player = nombre.value;
    console.log(player)
    if (player !== '') {
        players.push(player);
        console.log(players)

        let new_element = document.createElement('li');
        new_element.textContent = player;
        new_element.classList.add('list_item') // class of list 'li'
        // if (lista && typeof lista.appendChild === 'function') {
            lista.appendChild(new_element);
        // } else {
            // console.error("Error: Invalid 'lista' element.");
        // }


        //clear input
        nombre.value = '';
    }
}

function killPlayer (playersArray, playerCont){
    let activePlayers = [...playersArray] /// clone players array.
    while (activePlayers.length > 1) {
        const playerRamdom = Math.floor(Math.random() * activePlayers.length); // select player ramdom in array
        const selectPlayer = activePlayers[playerRamdom] // name of player select 
        activePlayers.splice(playerRamdom, 1) //Delete playerselect ramdom
        let newNameElement = document.createElement('h4');
        newNameElement.textContent = selectPlayer;
        playerCont.appendChild(newNameElement);

    }
    const winingPlayer = activePlayers[0];

}

document.getElementById("save").addEventListener('click', function () {
    addPlayer(playersInput, playersList)
});

killButton.addEventListener('click', function () {
    killPlayer(players, playerContainer)
})
