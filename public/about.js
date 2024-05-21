const images = ['./images/about-pic-1.jpg', './images/about-pic-2.jpg', './images/about-pic-3.jpg', './images/about-pic-4.jpg'];
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const imageElement = document.getElementById('image');
  imageElement.style.opacity = 0;
  setTimeout(() => {
    imageElement.src = images[currentIndex];
    imageElement.style.opacity = 1;
  }, 0); // Change image after 0 seconds (same as transition duration)
}

// Call changeImage function every 1 second
setInterval(changeImage, 2500);
