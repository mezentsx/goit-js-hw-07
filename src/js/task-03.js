const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const container = [];
 
const elements = images.map(image => {
  // const img = document.createElement('img');
  // img.url = image.url;
  // img.alt = image.alt;

  // const item = document.createElement('li');

  // item.append(img);

  // container.push(item);

  return `<li style="margin: 40px; width = 400px; list-style: none; border: 10px solid yellow; background-color: yellow; flex-wrap: wrap;">
  <img src = '${image.url}' 
  alt = '${image.alt}'
  width = 100%
  style = "display:block; object-fit: contain;"
  ><li>`;
}).join('');

// console.log(elements);

const list = document.getElementById('gallery');

list.insertAdjacentHTML('afterbegin', elements);
console.log(list);