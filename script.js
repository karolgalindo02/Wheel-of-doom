console.log("JavaScript is ready to run");
var playersInput = document.getElementById('players__input');
var playersList = document.getElementsByClassName('players__list') [0];
var players = []; // this is array of plaryers list

function addPlayer(nombre, lista) {
    var player = nombre.value;
    console.log(player)
    if (player !== '') {
        players.push(player);
        console.log(players)

        let new_element = document.createElement('li');
        new_element.textContent = player;
        new_element.classList.add('list_item')
        // if (lista && typeof lista.appendChild === 'function') {
            lista.appendChild(new_element);
        // } else {
            // console.error("Error: Invalid 'lista' element.");
        // }


        //clear input
        nombre.value = '';
    }
}

document.getElementById("save").addEventListener('click', function () {
    addPlayer(playersInput, playersList)
});
