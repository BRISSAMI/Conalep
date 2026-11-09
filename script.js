let slideIndex = 1;
showSlides(slideIndex);

// Función para avanzar o retroceder en las diapositivas
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para ir a una diapositiva específica usando los puntos
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    // Reinicia el índice si se pasa del final o del principio
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    // Oculta todas las diapositivas
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Quita la clase 'active' de todos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Muestra la diapositiva actual y marca el punto correspondiente como activo
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Opcional: Carrusel automático
let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        plusSlides(1);
    }, 5000); // Cambia de imagen cada 5 segundos
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Inicia el carrusel automático cuando la página carga
document.addEventListener("DOMContentLoaded", startAutoSlide);

// Detiene el carrusel automático al interactuar con los botones de navegación o los puntos
document.querySelector('.prev').addEventListener('click', stopAutoSlide);
document.querySelector('.next').addEventListener('click', stopAutoSlide);
document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', stopAutoSlide);
});