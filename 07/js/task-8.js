'use strict';

const input = document.querySelector('[type="number"]');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxesWraper = document.querySelector('#boxes');
function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}
btnRender.addEventListener('click', data => {
  data = input.value;
  let width = 30;
  let heigh = 30;
  for (let i = 0; i < data; i++) {
    let addDiv = document.createElement('div');
    addDiv.style.display = 'block';
    addDiv.style.marginTop = '5px';
    addDiv.style.width = `${width}px`;
    width = width + 10;
    addDiv.style.height = `${heigh}px`;
    heigh = heigh + 10;
    addDiv.style.backgroundColor = getRandomColor();
    boxesWraper.appendChild(addDiv);
  }
});

btnDestroy.addEventListener('click', () => {
  boxesWraper.innerHTML = '';
  input.value = null;
});
