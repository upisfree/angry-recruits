let subpoenas = document.querySelector('.subpoenas');
let gameElement = document.querySelector('#game');

export default function(progress) {
  subpoenas.classList.add('hidden');
  gameElement.classList.remove('hidden');
}