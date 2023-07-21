console.log("JavaScript is ready to run");
var playersInput = document.getElementById('players__input');
var playersList = document.getElementsByClassName('players__list')[0];
var players = []; // this is array of plaryers list




function addPlayer(nombre, lista) {
    const player = nombre.value.trim();
    console.log(player)
    if (player !== '') {
        let new_element = document.createElement('li');
        new_element.textContent = player;
        new_element.classList.add('list_item') // class of list 'li'

        let delete_button = document.createElement('i');
        delete_button.classList.add('fa-solid','fa-trash-can');
        delete_button.classList.add('delete_button');
        delete_button.addEventListener('click', function () {
            removePlayer(new_element, lista);
        });

        new_element.appendChild(delete_button);
        lista.appendChild(new_element);

        
        
        
        //clear input
        nombre.value = '';
    }
}

function removePlayer(playerElement, lista) {

    const playerIndex = Array.from(lista.children).indexOf(playerElement);
    if (playerIndex !== -1) {
        players.splice(playerIndex, 1); 
        lista.removeChild(playerElement);
    }
}
//Event list:


document.getElementById("save").addEventListener('click', function () {
    addPlayer(playersInput, playersList)
});

document.getElementById('play').addEventListener('click', function () {
    players = [];
    const listItems = playersList.getElementsByClassName('list_item');
    for (let i = 0; i < listItems.length; i++) {
        const playersName = listItems[i].firstChild.textContent.trim();
        players.push(playersName)
    }
    console.log(players)

})