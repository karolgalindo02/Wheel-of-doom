console.log("JavaScript is ready to run");
var playersInput = document.getElementById('players__input');
var playersList = document.getElementsByClassName('players__list') [0];
var players = []; // this is array of players list

function addPlayer(nombre, lista) {
    var player = nombre.value;
    let eraserButton = document.createElement('button')
    let new_element = document.createElement('li');
    console.log(player)
    if (player !== '') {
        players.push(player);
        console.log(players)

        eraserButton.classList.add('eraser')
        new_element.classList.add('list_item')
        new_element.textContent = player;

        // if (lista && typeof lista.appendChild === 'function') {
            lista.appendChild(new_element);
            lista.appendChild(eraserButton);
        // } else {
            // console.error("Error: Invalid 'lista' element.");
        // }

        //clear input
        nombre.value = '';
    }
    eraserButton.addEventListener('click', erasePlayer(player, eraserButton))
}

function erasePlayer(player, eraserButton){

}

document.getElementById("save").addEventListener('click', function () {
    addPlayer(playersInput, playersList)
});
