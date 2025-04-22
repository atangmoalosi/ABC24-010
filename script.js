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

  show(); // show first image
}

// Carousel 1: Tops
createCarousel([
  { src: 'images/straplesstop.jpg', title: 'Strapless Top' },
  { src: 'images/blackfloralhaltertop.jpg', title: 'Black Floral Halter Top' },
  {src: 'images/orangedresstop.jpg', title: 'Orange Dress Top' },
  {src: 'images/leopardprinttop.jpg',title: 'Leopard Print Top'},
  {src: 'images/lacetop.jpg', title: 'Lace Top'},
  {src: 'images/meshtop.jpg',title: 'Mesh Top'},
  {src: 'images/vneckleopardtop.jpg',title: 'V-Neck Leopard Top'},
  {src: 'images/dazzlingredtop.jpg',title: 'Dazzling Red Top'},
  {src: 'images/tightlongsleeve.jpg',title: 'Tight Long Sleeve Top'},
  {src: 'images/stripedlongsleeve.jpg',title: 'Striped Long Sleeve Top'}          
], 'tops-image', 'tops-title', 'tops-prev', 'tops-next');

// Carousel 2: Skirts
createCarousel([
  { src: 'images/blacklaceskirt.jpg', title: 'Black Lace Skirt' },
  { src: 'images/blackwrapneckdress.jpg', title: 'Black Wrap Neck Dress' },
  {src: 'images/bluefloralskirt.jpg', title: 'Blue Floral Skirt'},
  {src: 'images/olivemaxidress.jpg', title: 'Olive Maxi Dress'},
  {src: 'images/denimmaxiskirt.jpg', title: 'Denim Maxi Skirt'},
  {src: 'images/pinkmaxidress.jpg', title: 'Pink Maxi Dress'},
  {src: 'images/rainbowminidress.jpg', title: 'Rainbow Mini Dress'},
  {src: 'images/purplemeshskirt.jpg', title: 'Purple Mesh Skirt'},
  {src: 'images/yellowleoparddress.jpg', title: 'Yellow Leopard Dress'},
  {src: 'images/pinkmaxiskirt.jpg', title: 'Pink Maxi Skirt'}  
], 'skirts and dresses-image', 'skirts and dresses-title', 'skirts and dresses-prev', 'skirts and dresses-next');

// Carousel 3: Pants
createCarousel([
  { src: 'images/pants1.jpg', title: 'Black Pants' },
  { src: 'images/pants2.jpg', title: 'Beige Pants' }
], 'pants-image', 'pants-title', 'pants-prev', 'pants-next');
