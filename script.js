console.log("JavaScript is ready to run");
var playersInput = document.getElementById('players__input');
var playersList = document.getElementsByClassName('players__list')[0];
var players = []; // this is array of plaryers list




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






//Event list:


document.getElementById("save").addEventListener('click', function () {
    addPlayer(playersInput, playersList)
});

