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

        let new_element = document.createElement('li');
        new_element.textContent = player;
        new_element.classList.add('list_item') // class of list 'li'
        lista.appendChild(new_element);
        //clear input
        nombre.value = '';
    }
}






//Event list:


document.getElementById("save").addEventListener('click', function () {
    addPlayer(playersInput, playersList)
});

function toggleMute() {
    var music = document.getElementById("music");
    var muteIcon = document.getElementById("muteIcon");

if (music.muted) {
    music.muted = false;
    muteIcon.src = "src/Imagenes/Sone.png"; // Cambiar al icono de sonido activado
} else {
    music.muted = true;
    muteIcon.src = "src/Imagenes/Mute.png"; // Cambiar al icono de silencio activado
}
}

