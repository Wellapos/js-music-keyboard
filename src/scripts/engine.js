const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keyCheck = document.querySelector(".keys-check input");

let mappedKeys = []
let audio = new Audio("src/tunes/a.wav")

const playTyne = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add('active');

  setTimeout(() => {
    clickedKey.classList.remove('active');
  }
  , 150);
}

pianoKeys.forEach((key) => {
  key.addEventListener('click', () => playTyne(key.dataset.key));
  mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (mappedKeys.includes(e.key)) {
    playTyne(e.key);
  }
})

const handleVolumeChange = (e) => {
  audio.volume = e.target.value / 100;
}

const showHideKeys = (e) => {
  pianoKeys.forEach((key) => key.classList.toggle('hidden'));
}

volumeSlider.addEventListener('input', handleVolumeChange);

keyCheck.addEventListener('change', showHideKeys);