const imageList = [
   {
    src: 'images/blackfloralhaltertop.jpg',
    title: 'Black Floral Halter Top'
  },
  {
    src: 'images/bluehaltertop.jpg',
    title: 'Blue Halter Top'
  },
  {
    src: 'images/orangedresstop.jpg',
    title: 'Orange Dress Top'
  }
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

