let liItems = document.querySelectorAll('.item');
console.log('Number of categories:', liItems.length);

liItems.forEach(item => {

  let title = item.querySelector('h2').textContent;
  let ulItems = item.querySelectorAll('ul li');

  console.log('Category :', title);
  console.log('Elements :', ulItems.length);
});
