function createCarousel(images, imgId, titleId, priceId, sizeId, prevClass, nextClass, buttonId) {
  let index = 0;
  const imgEl = document.getElementById(imgId);
  const titleEl = document.getElementById(titleId);
  const priceEl = document.getElementById(priceId);
  const sizeEl = document.getElementById(sizeId);
  const prevBtn = document.querySelector(`.${prevClass}`);
  const nextBtn = document.querySelector(`.${nextClass}`);
  const addToCartBtn = document.getElementById(buttonId);

  function show() {
    const item = images[index];
    imgEl.src = item.src;
    titleEl.textContent = item.title;
    priceEl.textContent = `Price: ${item.price}`;
    sizeEl.textContent = `Size: ${item.size}`;
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    show();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    show();
  });

  addToCartBtn.addEventListener('click', () => {
    const item = images[index];
    const cart = JSON.parse(localStorage.getItem('ecoCart')) || [];
    cart.push(item);
    localStorage.setItem('ecoCart', JSON.stringify(cart));
    alert(`${item.title} has been added to your cart.`);
  });

  show();
}


createCarousel([
  { src: 'images/straplesstop.jpg', title: 'Strapless Top',price:'P40',size: 'S'},
  { src: 'images/blackfloralhaltertop.jpg', title: 'Black Floral Halter Top',price:'P40',size:'S'},
  {src: 'images/orangedresstop.jpg', title: 'Orange Dress Top',price:'P45',size:'M' },
  {src: 'images/leopardprinttop.jpg',title: 'Leopard Print Top',price:'P35',size:'S'},
  {src: 'images/lacetop.jpg', title: 'Lace Top',price:'P30',size:'M'},
  {src: 'images/meshtop.jpg',title: 'Mesh Top',price:'P35',size:'S'},
  {src: 'images/vneckleopardtop.jpg',title: 'V-Neck Leopard Top',price:'P40',size:'S'},
  {src: 'images/dazzlingredtop.jpg',title: 'Dazzling Red Top',price:'P45',size:'M'},
  {src: 'images/tightlongsleeve.jpg',title: 'Tight Long Sleeve Top',price:'P25',size:'S'},
  {src: 'images/stripedlongsleeve.jpg',title: 'Striped Long Sleeve Top',price:'P30',size:'M'}          
], 'tops-image', 'tops-title','tops-price','tops-size', 'tops-prev', 'tops-next','add-tops');


createCarousel([
  { src: 'images/blacklaceskirt.jpg', title: 'Black Lace Skirt',price:'P30',size:'M' },
  { src: 'images/blackwrapneckdress.jpg', title: 'Black Wrap Neck Dress',price:'P50',size:'S' },
  {src: 'images/bluefloralskirt.jpg', title: 'Blue Floral Skirt',price:'P35',size:'S'},
  {src: 'images/olivemaxidress.jpg', title: 'Olive Maxi Dress',price:'P45',size:'M'},
  {src: 'images/denimmaxiskirt.jpg', title: 'Denim Maxi Skirt',price:'P55',size:'L'},
  {src: 'images/pinkmaxidress.jpg', title: 'Pink Maxi Dress',price:'P45',size:'M'},
  {src: 'images/rainbowminidress.jpg', title: 'Rainbow Mini Dress',price:'P35',size:'S'},
  {src: 'images/purplemeshskirt.jpg', title: 'Purple Mesh Skirt',price:'P35',size:'M'},
  {src: 'images/yellowleoparddress.jpg', title: 'Yellow Leopard Dress',price:'P45',size:'M'},
  {src: 'images/pinkmaxiskirt.jpg', title: 'Pink Maxi Skirt',price:'P40',size:'M'}  
], 'skirts-and-dresses-image', 'skirts-and-dresses-title','skirts-and-dresses-price','skirts-and-dresses-size', 'skirts-and-dresses-prev', 'skirts-and-dresses-next','add-skirts-and-dresses');

createCarousel([
    { src: 'images/blackleatherjacket.jpg', title: 'Black Leather Jacket', price: 'P60', size: 'M' },
    { src: 'images/browncroppedcoat.jpg', title: 'Brown Cropped Coat', price: 'P55', size: 'S' },
    { src: 'images/burgundyfurcoat.jpg', title: 'Burgundy Fur Coat', price: 'P60', size: 'M' },
    { src: 'images/croppedcardigan.jpg', title: 'Cropped Cardigan', price: 'P30', size: 'XS' },
    { src: 'images/denimjacket.jpg', title: 'Denim Jacket', price: 'P45', size: 'S' },
    { src: 'images/brownleatherjacket.jpg', title: 'Brown Leather Jacket', price: 'P55', size: 'M' },
    { src: 'images/browncroppedcoat.jpg', title: 'Brown Cropped Coat', price: 'P55', size: 'S' },
    { src: 'images/navybluewindbreaker.jpg', title: 'Navy Blue Wind Breaker', price: 'P35', size: 'S' },
    { src: 'images/longfauxfurcoat.jpg', title: 'Long Faux Fur Coat', price: 'P55', size: 'L' },
    { src: 'images/redplushjacket.jpg', title: 'Red Plush Jacket', price: 'P45', size: 'M' },
    { src: 'images/vneckcardigan.jpg', title: 'V-Neck Cardigan', price: 'P55', size: 'S' },
  
  ],'outerwear-image','outerwear-title','outerwear-price','outerwear-size','outerwear-prev','outerwear-next', 'add-outerwear');

createCarousel([
  { src: 'images/blackleggings.jpg', title: 'Black Leggings', price: 'P20', size: 'S' },
  { src: 'images/blackvelourpants.png', title: 'Black Velour Pants', price: 'P35', size: 'M' },
   { src: 'images/bluedenimjorts.jpg', title: 'Blue Denim Jorts', price: 'P45', size: 'L' },
   { src: 'images/browncargopants.png', title: 'Brown Cargo Pants', price: 'P45', size: 'M' },
   { src: 'images/blueskinnyjeans.jpg', title: 'Brown Skinny Jeans', price: 'P35', size: 'M' },
   { src: 'images/blackskinnyjeans.jpg', title: 'Black Skinny Jeans', price: 'P35', size: 'M' },
   { src: 'images/greyleggings.png', title: 'Grey Leggings', price: 'P25', size: 'S' },
   { src: 'images/highwaistedflaredjeans.png', title: 'High Waisted Flared Jeans', price: 'P35', size: 'S' },
   { src: 'images/whiteflaredjoggers.jpg', title: 'White Flared Joggers', price: 'P25', size: 'S' },
   { src: 'images/greyshorts.png', title: 'Grey Shorts', price: 'P20', size: 'S' }
  
], 'trousers-leggings-image', 'trousers-leggings-title', 'trousers-leggings-price', 'trousers-leggings-size', 'trousers-leggings-prev', 'trousers-leggings-next', 'add-trousers-leggings');


// Earrings Carousel
createCarousel([
  { src: 'images/brownhoopearrings.jpg', title: 'Brown Hoop Earrings', price: 'P20', size: 'One Size' },
  { src: 'images/engravedbrownearrings.jpg', title: 'Engraved Brown Earrings', price: 'P15', size: 'One Size' },
  { src: 'images/goldabstractearrings.jpg', title: 'Gold Abstract Earrings', price: 'P35', size: 'One Size' },
   { src: 'images/goldencircleearrings.jpg', title: 'Golden Circle Earrings', price: 'P35', size: 'One Size' },
   { src: 'images/goldhoopearrings.jpg', title: 'Gold Hoop Earrings', price: 'P35', size: 'One Size' },
   { src: 'images/rubybrownearrings.jpg', title: 'Ruby Brown Earrings', price: 'P40', size: 'One Size' },
   { src: 'images/silverabstractearrings.jpg', title: 'Silver Abstract Earrings', price: 'P35', size: 'One Size' },
   { src: 'images/silverhoopearrings.jpg', title: 'Silver Hoop Earrings', price: 'P30', size: 'One Size' },
   { src: 'images/silvertearearrings.jpg', title: 'Silver Tear Earrings', price: 'P40', size: 'One Size' },
   { src: 'images/purpleflowerearrings.jpg', title: 'Purple Flower Earrings', price: 'P4', size: 'One Size' }
  
], 'earrings-image', 'earrings-title', 'earrings-price', 'earrings-size', 'earrings-prev', 'earrings-next', 'add-earrings');

// Bracelets Carousel
createCarousel([
  { src: 'images/bracelet1.jpg', title: 'Silver Chain Bracelet', price: 'P30', size: 'One Size' },
  { src: 'images/bracelet2.jpg', title: 'Beaded Friendship Bracelet', price: 'P25', size: 'One Size' },
  { src: 'images/bracelet3.jpg', title: 'Gold Charm Bracelet', price: 'P40', size: 'One Size' }
], 'bracelets-image', 'bracelets-title', 'bracelets-price', 'bracelets-size', 'bracelets-prev', 'bracelets-next', 'add-bracelets');

// Necklaces Carousel
createCarousel([
  { src: 'images/necklace1.jpg', title: 'Diamond Pendant Necklace', price: 'P100', size: 'One Size' },
  { src: 'images/necklace2.jpg', title: 'Heart Shaped Necklace', price: 'P80', size: 'One Size' },
  { src: 'images/necklace3.jpg', title: 'Pearl Strand Necklace', price: 'P90', size: 'One Size' }
], 'necklaces-image', 'necklaces-title', 'necklaces-price', 'necklaces-size', 'necklaces-prev', 'necklaces-next', 'add-necklaces');

// Sandals and Flats Carousel
createCarousel([
  { src: 'images/sandal1.jpg', title: 'Leather Sandals', price: 'P60', size: '6' },
  { src: 'images/flat1.jpg', title: 'Ballet Flats', price: 'P55', size: '5' },
  { src: 'images/sandal2.jpg', title: 'Beaded Sandals', price: 'P65', size: '7' }
], 'sandals-flats-image', 'sandals-flats-title', 'sandals-flats-price', 'sandals-flats-size', 'sandals-flats-prev', 'sandals-flats-next', 'add-sandals-flats');

// Heels Carousel
createCarousel([
  { src: 'images/heels1.jpg', title: 'Red High Heels', price: 'P80', size: '6' },
  { src: 'images/heels2.jpg', title: 'Silver Stiletto', price: 'P90', size: '7' },
  { src: 'images/heels3.jpg', title: 'Block Heels', price: 'P70', size: '5' }
], 'heels-image', 'heels-title', 'heels-price', 'heels-size', 'heels-prev', 'heels-next', 'add-heels');

// Boots and Sneakers Carousel
createCarousel([
  { src: 'images/boots1.jpg', title: 'Black Ankle Boots', price: 'P100', size: '7' },
  { src: 'images/sneakers1.jpg', title: 'White Sneakers', price: 'P85', size: '6' },
  { src: 'images/boots2.jpg', title: 'Suede Knee Boots', price: 'P120', size: '8' }
], 'boots-sneakers-image', 'boots-sneakers-title', 'boots-sneakers-price', 'boots-sneakers-size', 'boots-sneakers-prev', 'boots-sneakers-next', 'add-boots-sneakers');

// Tops and T-Shirts Carousel
createCarousel([
  { src: 'images/men-top1.jpg', title: 'Basic White T-Shirt', price: 'P40', size: 'M' },
  { src: 'images/men-top2.jpg', title: 'Graphic T-Shirt', price: 'P45', size: 'L' },
  { src: 'images/men-top3.jpg', title: 'Casual Polo Shirt', price: 'P50', size: 'M' }
], 'tops-tshirts-image', 'tops-tshirts-title', 'tops-tshirts-price', 'tops-tshirts-size', 'tops-tshirts-prev', 'tops-tshirts-next', 'add-tops-tshirts');

// Outerwear Carousel
createCarousel([
  { src: 'images/men-jacket1.jpg', title: 'Denim Jacket', price: 'P90', size: 'L' },
  { src: 'images/men-coat1.jpg', title: 'Wool Overcoat', price: 'P120', size: 'M' }
], 'outerwear-men-image', 'outerwear-men-title', 'outerwear-men-price', 'outerwear-men-size', 'outerwear-men-prev', 'outerwear-men-next', 'add-outerwear-men');

// Trousers Carousel
createCarousel([
  { src: 'images/men-trousers1.jpg', title: 'Slim Fit Jeans', price: 'P70', size: '32' },
  { src: 'images/men-trousers2.jpg', title: 'Chino Pants', price: 'P65', size: '34' }
], 'trousers-men-image', 'trousers-men-title', 'trousers-men-price', 'trousers-men-size', 'trousers-men-prev', 'trousers-men-next', 'add-trousers-men');

