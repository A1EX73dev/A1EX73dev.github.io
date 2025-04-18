document.addEventListener('DOMContentLoaded', function() {
    // Animaciones al hacer scroll
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const projectCards = document.querySelectorAll('.project-card');
    
    function animateOnScroll() {
        projectCards.forEach(card => {
            if (isInViewport(card) && !card.classList.contains('animate')) {
                card.classList.add('animate');
            }
        });
    }
    
    // Ejecutar la animación inicial
    animateOnScroll();
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Funcionalidad del menú móvil
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Filtrado de proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            const filter = this.textContent;
            
            // Mostrar u ocultar proyectos según el filtro
            projectCards.forEach(card => {
                const category = card.querySelector('.project-category').textContent;
                
                if (filter === 'Todos' || filter === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Funcionalidad de paginación
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Aquí podrías implementar la lógica real de paginación
            // Por ahora es solo visual
        });
    });
});