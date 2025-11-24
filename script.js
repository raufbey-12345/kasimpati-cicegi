const chrys = document.getElementById('chrys');
const replayBtn = document.getElementById('replay');

function playBloom() {
  chrys.classList.remove('bloom');
  void chrys.offsetWidth; 
  chrys.classList.add('bloom');
}

window.addEventListener('load', playBloom);

replayBtn.addEventListener('click', () => {
  playBloom();
});

chrys.addEventListener('click', () => {
  chrys.classList.toggle('spin');
});
