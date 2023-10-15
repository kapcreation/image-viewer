const fileInput = document.getElementById('fileInput');
const imageContainer = document.getElementById('imageContainer');
const currentImage = document.getElementById('currentImage');
let currentImageIndex = 0;
let images = [];
const indicator = document.querySelector("#indicator")

fileInput.addEventListener('change', () => {
  images = [];
  currentImageIndex = 0;

  for (let i = 0; i < fileInput.files.length; i++) {
    const file = fileInput.files[i];
    if (file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      images.push(imageUrl);
    }
  }

  if (images.length > 0) {
    showImage(currentImageIndex);
  }
});

function showImage(index) {
  if (images.length > 0) {
    currentImage.src = images[index];

    indicator.textContent = `${currentImageIndex + 1}/${images.length}`
  }
}

document.addEventListener('keydown', (e) => {
    if (e.key === ';' && currentImageIndex < images.length - 1) {
        currentImageIndex++;
        showImage(currentImageIndex);
    } else if (e.key === 'l' && currentImageIndex > 0) {
        currentImageIndex--;
        showImage(currentImageIndex);
    }
});