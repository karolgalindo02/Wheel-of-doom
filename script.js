var elementToChange = document.getElementsByTagName("body")[0];
elementToChange.style.cursor = "url('src/Imagenes/Garfio.png'), auto";

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('pirates');
    const volumeFill = document.getElementById('volume-fill');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeDownBtn = document.getElementById('volume-down');
    const volumeUpBtn = document.getElementById('volume-up');
  
    let volume = 50; // Volumen inicial
    const maxVolume = 100;
    const minVolume = 0;
  
    function updateVolumeVisuals() {
      const fillWidth = (volume / maxVolume) * 100;
      volumeFill.style.width = `${fillWidth}%`;
    }
  
    function decreaseVolume() {
      if (volume > minVolume) {
        volume -= 10; // Puedes ajustar el valor de decremento
        updateVolumeVisuals();
      }
    }
  
    function increaseVolume() {
      if (volume < maxVolume) {
        volume += 10; // Puedes ajustar el valor de incremento
        updateVolumeVisuals();
      }
    }
  
    volumeDownBtn.addEventListener('click', decreaseVolume);
    volumeUpBtn.addEventListener('click', increaseVolume);
  });
  