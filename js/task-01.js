const item = document.querySelectorAll('.item');
console.log(`В списке ${item.length} категории.`);

const navItemEl = document.querySelectorAll('li.item');
navItemEl.forEach(item => console.log('Категория:', item.firstElementChild.textContent, 'Количество элементов:', item.lastElementChild.children.length));
 