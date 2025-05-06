function createCarousel(images, imgId, titleId, priceId, sizeId, prevClass, nextClass, buttonId, buyNowButtonId) {
  let index = 0;
  const imgEl = document.getElementById(imgId);
  const titleEl = document.getElementById(titleId);
  const priceEl = document.getElementById(priceId);
  const sizeEl = document.getElementById(sizeId);
  const prevBtn = document.querySelector(`.${prevClass}`);
  const nextBtn = document.querySelector(`.${nextClass}`);
  const addToCartBtn = document.getElementById(buttonId);
  const buyNowBtn = document.getElementById(buyNowButtonId);




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

buyNowBtn.addEventListener('click', () => {
  const item = images[index];
  const cart = JSON.parse(localStorage.getItem('ecoCart')) || [];
  cart.push(item);
  localStorage.setItem('ecoCart', JSON.stringify(cart));
  window.location.href = 'checkout.html'; // Adjust path if needed
});


if (document.getElementById('tops-image')) {
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
], 'tops-image', 'tops-title','tops-price','tops-size', 'tops-prev', 'tops-next','add-tops','buy-tops');
}

if (document.getElementById('skirts-and-dresses-image')) {
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
], 'skirts-and-dresses-image', 'skirts-and-dresses-title','skirts-and-dresses-price','skirts-and-dresses-size', 'skirts-and-dresses-prev', 'skirts-and-dresses-next','add-skirts-and-dresses','buy-skirts-and-dresses');
}

if (document.getElementById('outerwear-image')) {
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
  
  ],'outerwear-image','outerwear-title','outerwear-price','outerwear-size','outerwear-prev','outerwear-next', 'add-outerwear','buy-outerwear');
}

if (document.getElementById('trousers-leggings-image')) {
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
  
], 'trousers-leggings-image', 'trousers-leggings-title', 'trousers-leggings-price', 'trousers-leggings-size', 'trousers-leggings-prev', 'trousers-leggings-next', 'add-trousers-leggings', 'buy-trousers-leggings');
}

// Earrings Carousel
if (document.getElementById('earrings-image')) {
createCarousel([
  { src: 'images/brownhoopearrings.png', title: 'Brown Hoop Earrings', price: 'P20', size: 'One Size' },
  { src: 'images/engravedbrownearrings.png', title: 'Engraved Brown Earrings', price: 'P15', size: 'One Size' },
  { src: 'images/goldabstractearrings.png', title: 'Gold Abstract Earrings', price: 'P35', size: 'One Size' },
   { src: 'images/goldencircleearrings.png', title: 'Golden Circle Earrings', price: 'P35', size: 'One Size' },
   { src: 'images/goldhoopearrings.png', title: 'Gold Hoop Earrings', price: 'P35', size: 'One Size' },
   { src: 'images/rubybrownearrings.png', title: 'Ruby Brown Earrings', price: 'P40', size: 'One Size' },
   { src: 'images/silverabstractearrings.png', title: 'Silver Abstract Earrings', price: 'P35', size: 'One Size' },
   { src: 'images/silverhoopearrings.png', title: 'Silver Hoop Earrings', price: 'P30', size: 'One Size' },
   { src: 'images/silvertearearrings.png', title: 'Silver Tear Earrings', price: 'P40', size: 'One Size' },
   { src: 'images/purpleflowerearrings.png', title: 'Purple Flower Earrings', price: 'P4', size: 'One Size' }
  
], 'earrings-image', 'earrings-title', 'earrings-price', 'earrings-size', 'earrings-prev', 'earrings-next', 'add-earrings','buy-earrings');
}
// Bracelets Carousel
  if (document.getElementById('bracelets-image')) {
createCarousel([
  { src: 'images/brownbraceletset.png', title: 'Brown Bracelet Set', price: 'P20', size: 'One Size' },
  { src: 'images/goldbrowncharmbracelet.png', title: 'Gold Brown Charm Bracelet', price: 'P20', size: 'One Size' },
  { src: 'images/goldencuffbracelet.png', title: 'Golden Cuff Bracelet', price: 'P30', size: 'One Size' },
   { src: 'images/layeredcuffbangle.png', title: 'Layered Cuff Bangle', price: 'P30', size: 'One Size' },
   { src: 'images/pearlbracelet.png', title: 'Pearl Bracelet', price: 'P10', size: 'One Size' },
   { src: 'images/silverabstractbracelet.png', title: 'Silver Abstract Bracelet', price: 'P20', size: 'One Size' },
   { src: 'images/stretchybrownbracelet.png', title: 'Stretchy Brown Bracelet', price: 'P10', size: 'One Size' },
   { src: 'images/greencrystalbracelet.png', title: 'Green Crystal Bracelet', price: 'P15', size: 'One Size' },
   { src: 'images/mirrorbracelet.png', title: 'Mirror Bracelet', price: 'P30', size: 'One Size' },
   { src: 'images/goldstarbracelet.png', title: 'Gold Star Bracelet', price: 'P20', size: 'One Size' }
  
], 'bracelets-image', 'bracelets-title', 'bracelets-price', 'bracelets-size', 'bracelets-prev', 'bracelets-next', 'add-bracelets','buy-bracelets');
  }
// Necklaces Carousel
if (document.getElementById('necklaces-image')) {
createCarousel([
  { src: 'images/browncowrieshellnecklace.png', title: 'Brown Cowrie Shell Necklace', price: 'P30', size: 'One Size' },
  { src: 'images/evileyenecklace.png', title: 'Evil Eye Necklace', price: 'P20', size: 'One Size' },
  { src: 'images/goldspiralnecklace.png', title: 'Gold Spiral Necklace', price: 'P40', size: 'One Size' },
  {src: 'images/hollowsilvernecklace.png', title: 'Hollow Silver Necklace', price: 'P35', size: 'One Size' },
  {src: 'images/orangebeadnecklace.png', title: 'Orange Bead Necklace', price: 'P30', size: 'One Size' },
  {src: 'images/pebblenecklace.png', title: 'Pebble Necklace', price: 'P30', size: 'One Size' },
  { src: 'images/purpleorchidnecklace.png', title: 'Purple Orchid Necklace', price: 'P35', size: 'One Size' },
  {src: 'images/silverspiralnecklace.png', title: 'Silver Spiral Necklace', price: 'P40', size: 'One Size' },
  {src: 'images/stonesnecklace.png', title: 'Stones Necklace', price: 'P30', size: 'One Size' },
  {src: 'images/woodenankhnecklace.png', title: 'Wooden Ankh Necklace', price: 'P20', size: 'One Size' },
  {src: 'images/cowrieshellnecklace.png', title: 'Cowrie Shell Necklace', price: 'P30', size: 'One Size' }
], 'necklaces-image', 'necklaces-title', 'necklaces-price', 'necklaces-size', 'necklaces-prev', 'necklaces-next', 'add-necklaces'.'buy-necklaces');
}
// Sandals and Flats Carousel
if (document.getElementById('sandals-flats-image')) {
createCarousel([
  { src: 'images/blackbowsandals.png', title: 'Black Gold Sandals', price: 'P40', size: '6' },
  { src: 'images/blackpumps.png', title: 'Black Pumps', price: 'P35', size: '5' },
  { src: 'images/burgundysandals.png', title: 'Burgundy Sandals', price: 'P35', size: '4' },
   { src: 'images/limesandals.png', title: 'Lime Sandals', price: 'P35', size: '6' },
   { src: 'images/redpumps.png', title: 'Red Pumps', price: 'P35', size: '3' },
   { src: 'images/whitebowsandals.png', title: 'White Bow Sandals', price: 'P35', size: '4' },
   { src: 'images/brownplatformsandals.png', title: 'Brown Platform Sandals', price: 'P35', size: '4' },
   { src: 'images/blackleathersandals.png', title: 'Black Leather Sandals', price: 'P35', size: '4' },
   { src: 'images/maroonflipflops.png', title: 'Maroon Flip Flops', price: 'P35', size: '4' },
   { src: 'images/greypumps.png', title: 'Grey Pumps', price: 'P35', size: '5' }
  
  
  
], 'sandals-flats-image', 'sandals-flats-title', 'sandals-flats-price', 'sandals-flats-size', 'sandals-flats-prev', 'sandals-flats-next', 'add-sandals-flats', 'buy-sandals-flats');
}
// Heels Carousel
if (document.getElementById('heels-image')) {
createCarousel([
  { src: 'images/blackheels.png', title: 'Black Heels', price: 'P45', size: '6' },
  { src: 'images/brownblockheels.png', title: 'Brown Block Heels', price: 'P50', size: '5' },
  { src: 'images/flowerheels.png', title: 'Flower Heels', price: 'P40', size: '5' },
  { src: 'images/furheels.png', title: 'Fur Heels', price: 'P40', size: '5' },
  { src: 'images/pointykittenheels.png', title: 'Pointy Kitten Heels', price: 'P45', size: '3' },
  { src: 'images/sliponblockheels.png', title: 'Slip On Block Heels', price: 'P40', size: '6' },
  { src: 'images/redheels.png', title: 'Red Heels', price: 'P45', size: '5' },
  { src: 'images/strapheels.png', title: 'Strap Heels', price: 'P40', size: '5' },
  { src: 'images/ultrahighplatformheels.png', title: 'Ultra High Platform Heels', price: 'P40', size: '5' },
  { src: 'images/blockkittenheels.png', title: 'Block Kitten Heels', price: 'P40', size: '4' },
  
  
], 'heels-image', 'heels-title', 'heels-price', 'heels-size', 'heels-prev', 'heels-next', 'add-heels', 'buy-heels');
}
// Boots and Sneakers Carousel
if (document.getElementById('boots-sneakers-image')) {
createCarousel([
  { src: 'images/530sneakers.png', title: '530 Sneakers', price: 'P100', size: '5' },
  { src: 'images/airforcewhites.png', title: 'Air Force Whites', price: 'P100', size: '6' },
  { src: 'images/blackuggs.png', title: 'Black Uggs', price: 'P65', size: '3' },
   { src: 'images/brownplatformboots.png', title: 'Brown Platform Boots', price: 'P55', size: '6' },
  { src: 'images/brownuggs.png', title: 'Brown Uggs', price: 'P50', size: '4' },
  { src: 'images/midcalfboots.png', title: 'Mid Calf Boots', price: 'P65', size: '5' },
{ src: 'images/whitetigers.png', title: 'White Tigers', price: 'P75', size: '4' },
  { src: 'images/brownthighhighs.png', title: 'Brown Thigh Highs', price: 'P50', size: '7' },
  { src: 'images/burgundythighhighboots.png', title: 'Burgundy Thigh High Boots', price: 'P90', size: '6' },
    { src: 'images/pinksneakers.png', title: 'Pink Sneakers', price: 'P60', size: '6' }
  
  
  
  
], 'boots-sneakers-image', 'boots-sneakers-title', 'boots-sneakers-price', 'boots-sneakers-size', 'boots-sneakers-prev', 'boots-sneakers-next', 'add-boots-sneakers', 'buy-boots-sneakers');
}
// Tops and T-Shirts Carousel
if (document.getElementById('tops-tshirts-image')) {
createCarousel([
 { src: 'images/plainblacktshirt.png', title: 'Plain Black T-Shirt', price: 'P20', size: 'L' },
  { src: 'images/shortlongsleeveshirt.png', title: 'Short Long Sleeve', price: 'P30', size: 'M' },
  { src: 'images/croppedsleevelesshirt.png', title: 'Cropped Sleeveless Shirt', price: 'P30', size: 'M' },
   { src: 'images/crewneckshirt.png', title: 'Crew Neck Shirt', price: 'P20', size: 'S' },
  { src: 'images/vintageshirt.png', title: 'Vintage Shirt', price: 'P30', size: 'M' },
  { src: 'images/collartshirt.png', title: 'Collar T Shirt', price: 'P30', size: 'M' },
   { src: 'images/spidermantshirt.png', title: 'Spider Man T-Shirt', price: 'P20', size: 'S' },
  { src: 'images/longsleevetshirt.png', title: 'Long Sleeve T-Shirt', price: 'P30', size: 'M' },
  { src: 'images/beatlessshirt.png', title: 'Beatles Shirt', price: 'P30', size: 'S' },
   { src: 'images/baseballshirt.png', title: 'Baseball Shirt', price: 'P40', size: 'M' }
  
  
], 'tops-tshirts-image', 'tops-tshirts-title', 'tops-tshirts-price', 'tops-tshirts-size', 'tops-tshirts-prev', 'tops-tshirts-next', 'add-tops-tshirts','buy-tops-tshirts');
}
// Outerwear Carousel
if (document.getElementById('outerwear-image')) {
createCarousel([
  { src: 'images/brownknitcardigan.png', title: 'Brown Knit Cardigan', price: 'P30', size: 'L' },
  { src: 'images/navycardigan.png', title: 'Navy Cardigan', price: 'P30', size: 'M' },
  { src: 'images/blacktrenchcoat.png', title: 'Black Trench Coat', price: 'P50', size: 'M' },
   { src: 'images/woolcoat.png', title: 'Wool Coat', price: 'P50', size: 'L' },
  { src: 'images/woolzipup.png', title: 'Wool Zip Up', price: 'P30', size: 'M' },
  { src: 'images/navywindbreaker.png', title: 'Navy Wind Breaker', price: 'P30', size: 'M' },
   { src: 'images/crewneckwindbreaker.png', title: 'Crewneck Windbreaker', price: 'P40', size: 'L' },
  { src: 'images/redhoodie.png', title: 'Red Hoodie', price: 'P20', size: 'S' },
  { src: 'images/blackhoodie.png', title: 'Black Hoodie', price: 'P20', size: 'S' },
   { src: 'images/sweatshirt.png', title: 'Sweatshirt', price: 'P40', size: 'M' },
   { src: 'images/woolvarsityjacket.png', title: 'Wool Varsity Jacket', price: 'P40', size: 'M' },
   { src: 'images/retrozipup.png', title: 'Retro Zip Up', price: 'P40', size: 'S' }
  
  
], 'outerwear-men-image', 'outerwear-men-title', 'outerwear-men-price', 'outerwear-men-size', 'outerwear-men-prev', 'outerwear-men-next', 'add-outerwear-men', 'buy-outerwear-men');
}
// Trousers Carousel
if (document.getElementById('trousers-image')) {
createCarousel([
  { src: 'images/men-trousers1.jpg', title: 'Slim Fit Jeans', price: 'P70', size: '32' },
  { src: 'images/men-trousers2.jpg', title: 'Chino Pants', price: 'P65', size: '34' }
], 'trousers-men-image', 'trousers-men-title', 'trousers-men-price', 'trousers-men-size', 'trousers-men-prev', 'trousers-men-next', 'add-trousers-men', 'buy-trousers-men');
}
