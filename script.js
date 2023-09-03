//   const carousel = document.getElementById('carouselExample');
//   const backgroundImages = [
//     'imgs/main/main-ii.webp', // Replace with your image paths
//     'imgs/main/main-ii.webp',
//     'imgs/main/main-ii.webp'
//   ];

//   carousel.addEventListener('slide.bs.carousel', (event) => {
//     const activeSlideIndex = event.to;
//     const activeSlideBackground = backgroundImages[activeSlideIndex];
//     const carouselInner = document.querySelector('.carousel-inner');

//     carouselInner.style.setProperty('--active-background', `url(${activeSlideBackground})`);
//   });


   // Get the target container by its ID
   const targetContainer = document.getElementById('targetContainer');

   // Get all carousel items
   const carouselItems = document.querySelectorAll('.carousel-item');
   
   // Function to update the target container with the current carousel item's image
   function updateTargetContainer() {
     const activeItem = document.querySelector('.carousel-item.active');
     const sourceImage = activeItem.querySelector('.d-block');
     
     // Clear the target container
     targetContainer.innerHTML = '';
     
     // Create a new image element and set its source to the active item's image source
     const newImage = document.createElement('img');
     newImage.src = sourceImage.src;
     
     // Append the new image to the target container
     targetContainer.appendChild(newImage);
   }
   
   // Listen for the carousel slide event to trigger the update
   document.addEventListener('DOMContentLoaded', () => {
     // Initial update
     updateTargetContainer();
     
     // Update on slide change
     const carousel = document.getElementById('carouselExample');
     carousel.addEventListener('slid.bs.carousel', updateTargetContainer);
   });