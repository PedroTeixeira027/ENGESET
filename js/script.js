const carousel = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-container img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    const width = images[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Atualiza o carrossel ao redimensionar a tela
window.addEventListener('resize', updateCarousel);

// Transição automática a cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}, 3000); // 3000 ms = 3 segundos