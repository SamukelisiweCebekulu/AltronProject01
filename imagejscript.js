const images = [
    'images/art1.jpg',
    'images/art2.jpg',
    'images/art3.jpg',
    'images/art4.jpg',
    'images/art5.jpg',
    'images/art6.jpg',
    'images/art7.jpg',
    'images/art8.jpg',
    'images/art9.jpg',
    'images/art10.jpg',
    'images/art11.jpg'
];

let currentIndex = 0;
const imgElement = document.getElementById('slideshow-image');
const counterElement = document.getElementById('image-counter');
const titleElement = document.getElementById('image-title'); // ✅ FIXED: was missing
const slideshow = document.getElementById('slideshow');

// Set first image
imgElement.src = images[0];
counterElement.textContent = `1 / ${images.length}`;
titleElement.textContent = `Image 1`; // ✅ FIXED: removed titles array

// Click to advance
slideshow.addEventListener('click', function() {
  nextImage();
});

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
}

function updateGallery() {
  // Fade out animation
  imgElement.style.opacity = '0';
  imgElement.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    // Update content
    imgElement.src = images[currentIndex];
    imgElement.alt = `Image ${currentIndex + 1}`;
    counterElement.textContent = `${currentIndex + 1} / ${images.length}`;
    titleElement.textContent = `Image ${currentIndex + 1}`; // ✅ FIXED: removed titles array
    
    // Fade in
    imgElement.style.opacity = '1';
    imgElement.style.transform = 'scale(1)';
  }, 300);
}

// Keyboard support
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    nextImage();
  }
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
  }
});