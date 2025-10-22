//your JS code here. If required.
const buttonsContainer = document.getElementById('buttons');
let currentAudio = null;

buttonsContainer.addEventListener('click', (e) => {
  const target = e.target;

  if (!target.classList.contains('btn')) return;

  // Stop button clicked
  if (target.classList.contains('stop')) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    return;
  }

  // Play the selected sound
  const soundFile = target.dataset.sound;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(`sounds/${soundFile}`);
  currentAudio.play();
});
