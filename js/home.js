// Animación al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    // Función para verificar si un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Elementos a animar
    const elementsToAnimate = document.querySelectorAll('.project-card, .skill-item, .about-content, .contact-container');
    
    // Función para animar elementos visibles
    function animateOnScroll() {
        elementsToAnimate.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animate')) {
                element.classList.add('animate');
            }
        });
    }

    // Ejecutar al cargar la página
    animateOnScroll();
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', animateOnScroll);

    // Menu móvil
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});