const imageList = [
  'images/women-blackfloralhaltertop.jpg',
  'images/women-top2.jpg',
  'images/women-top3.jpg'
];

let currentIndex = 0;
const imgElement = document.getElementById('carousel-image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showImage(index) {
  imgElement.src = imageList[index];
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  showImage(currentIndex);
});

