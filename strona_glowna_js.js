document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.querySelector('.slider-container');
  const sliderImages = document.querySelectorAll('.slider-image');
  const captions = document.querySelectorAll('.caption');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const newsletterForm = document.getElementById('newsletterForm');

  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 100 + '%';
    sliderContainer.style.transform = 'translateX(' + offset + ')';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    showSlide(currentIndex);
  }

  function subscribe() {
    const emailInput = document.getElementById('email');

    // Clear the input field
    emailInput.value = '';

    // Optionally, you can add logic here to handle the email subscription
    // For now, we're just clearing the input field
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  newsletterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    subscribe();
  });
});
