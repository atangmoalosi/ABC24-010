const imageList = [
   {
     src: 'images/strapless top.jpg' ,
     title: 'Strapless Top'
  },
  {
    src: 'images/blackfloralhaltertop.jpg',
    title: 'Black Floral Halter Top'
  },
  {
    src: 'images/orangedresstop.jpg',
    title: 'Orange Dress Top'
  },
   {
    src: 'images/leopardprinttop.jpg',
    title: 'Leopard Print Top'
   },
   {
    src: 'images/lacetop.jpg',
    title: 'Lace Top'
   },
   {
    src: 'images/meshtop.jpg',
    title: 'Mesh Top'
   },
   {
    src: 'images/vneckleopardtop.jpg',
    title: 'V-Neck Leopard Top'
   },
   {
    src: 'images/dazzlingredtop.jpg',
    title: 'Dazzling Red Top'
   }
   
   
];

let currentIndex = 0;
const titleElement = document.getElementById('carousel-title');
const imgElement = document.getElementById('carousel-image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showImage(index) {
  imgElement.src = imageList[index].src;
  titleElement.textContent = imageList[index].title;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  showImage(currentIndex);
});
showImage(currentIndex);

