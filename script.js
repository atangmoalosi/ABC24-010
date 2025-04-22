function createCarousel(images, imgId, titleId, prevClass, nextClass) {
  let index = 0;
  const imgEl = document.getElementById(imgId);
  const titleEl = document.getElementById(titleId);
  const prevBtn = document.querySelector(`.${prevClass}`);
  const nextBtn = document.querySelector(`.${nextClass}`);

  function show() {
    imgEl.src = images[index].src;
    titleEl.textContent = images[index].title;
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    show();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    show();
  });

  show(); 
}

createCarousel([
  { src: 'images/straplesstop.jpg', title: 'Strapless Top',price:,size: },
  { src: 'images/blackfloralhaltertop.jpg', title: 'Black Floral Halter Top',price:,size:},
  {src: 'images/orangedresstop.jpg', title: 'Orange Dress Top',price:,size: },
  {src: 'images/leopardprinttop.jpg',title: 'Leopard Print Top',price:,size:},
  {src: 'images/lacetop.jpg', title: 'Lace Top',price:,size:},
  {src: 'images/meshtop.jpg',title: 'Mesh Top',price:,size:},
  {src: 'images/vneckleopardtop.jpg',title: 'V-Neck Leopard Top',price:,size:},
  {src: 'images/dazzlingredtop.jpg',title: 'Dazzling Red Top',price:,size:},
  {src: 'images/tightlongsleeve.jpg',title: 'Tight Long Sleeve Top',price:,size:},
  {src: 'images/stripedlongsleeve.jpg',title: 'Striped Long Sleeve Top',price:,size:}          
], 'tops-image', 'tops-title','tops-price','tops-size', 'tops-prev', 'tops-next');


createCarousel([
  { src: 'images/blacklaceskirt.jpg', title: 'Black Lace Skirt',price:,size: },
  { src: 'images/blackwrapneckdress.jpg', title: 'Black Wrap Neck Dress',price:,size: },
  {src: 'images/bluefloralskirt.jpg', title: 'Blue Floral Skirt',price:,size:},
  {src: 'images/olivemaxidress.jpg', title: 'Olive Maxi Dress',price:,size:},
  {src: 'images/denimmaxiskirt.jpg', title: 'Denim Maxi Skirt',price:,size:},
  {src: 'images/pinkmaxidress.jpg', title: 'Pink Maxi Dress',price:,size:},
  {src: 'images/rainbowminidress.jpg', title: 'Rainbow Mini Dress',price:,size:},
  {src: 'images/purplemeshskirt.jpg', title: 'Purple Mesh Skirt',price:,size:},
  {src: 'images/yellowleoparddress.jpg', title: 'Yellow Leopard Dress',price:,size:},
  {src: 'images/pinkmaxiskirt.jpg', title: 'Pink Maxi Skirt',price:,size:}  
], 'skirts-and-dresses-image', 'skirts-and-dresses-title','skirts-and-dresses-price','skirts-and-dresses-size', 'skirts-and-dresses-prev', 'skirts-and-dresses-next','add-skirts-and-dresses');

createCarousel([
    { src: 'images/blackjacket.jpg', title: 'Black Jacket', price: 'P80', size: 'M' },
    { src: 'images/bluedenimcoat.jpg', title: 'Denim Coat', price: 'P90', size: 'L' }
  ],'outerwear-image','outerwear-title','outerwear-price','outerwear-size','outerwear-prev','outerwear-next', 'add-outerwear');

createCarousel([
    { src: 'images/blackleggings.jpg', title: 'Black Leggings', price: 'P45', size: 'M' },
    { src: 'images/beigetrousers.jpg', title: 'Beige Trousers', price: 'P65', size: 'L' }
  ],'trousers-leggings-image','trousers-leggings-title','trousers-leggings-price','trousers-leggings-size','trousers-leggings-prev','trousers-leggings-next','add-trousers-leggings');

