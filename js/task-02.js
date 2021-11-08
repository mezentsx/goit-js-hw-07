const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elements = [];

for (const ingredient of ingredients) {
  const ingredientsList = document.createElement('li');
  ingredientsList.textContent = ingredient;
 
  elements.push(ingredientsList);
};
//console.log(elements);

const list = document.getElementById('ingredients');
list.append(...elements);
console.log(list);