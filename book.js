document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.book-card');
    
    cards.forEach((card, index) => {
        // Delay each card's appearance
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index);
        
        // Setup initial hidden state style
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 1s ease, transform 1s ease';
    });
});