'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const list = document.querySelector('#ingredients');
// const markup = ingredients.reduce(
//   (string, item) => string + `<li> ${item} </li>`,
//   '',
// );
// list.innerHTML = markup;

//а потом я перечитала условие задачи) Так что, способ 2 - через createElement
const listOfIngridients = document.querySelector('#ingredients');

ingredients.forEach(item => {
  let node = document.createElement('li');
  node.textContent = item;
  listOfIngridients.appendChild(node);
});
