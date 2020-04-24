'use strict';

let ulCategories = document.querySelectorAll('li.item');
console.log(`В списке ${ulCategories.length} категории.`);

function countCategoriesAndElements(item) {
  console.log(
    `Категория: ${item.querySelector('h2').innerHTML}. В ней ${
      item.querySelectorAll('li').length
    } элемента `,
  );
}

ulCategories.forEach(countCategoriesAndElements);
