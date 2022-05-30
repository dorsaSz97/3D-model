'use strict';

const audioToggle = document.querySelector('#musicon');
const audio = document.querySelector('.music');

audioToggle.addEventListener('click', () => {
  if (audioToggle.checked == true) {
    audio.muted = false;
    audio.play();
  } else {
    audio.muted = true;
    audio.pause();
  }
});
