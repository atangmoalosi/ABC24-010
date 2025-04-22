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
  { src: 'images/blackfloralhaltertop.jpg', title: 'Black Floral Halter Top' }
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
  { src: 'images/skirt1.jpg', title: 'Denim Skirt' },
  { src: 'images/skirt2.jpg', title: 'Floral Skirt' }
], 'skirts-image', 'skirts-title', 'skirts-prev', 'skirts-next');

// Carousel 3: Pants
createCarousel([
  { src: 'images/pants1.jpg', title: 'Black Pants' },
  { src: 'images/pants2.jpg', title: 'Beige Pants' }
], 'pants-image', 'pants-title', 'pants-prev', 'pants-next');
