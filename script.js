document.addEventListener('DOMContentLoaded', function() {
    // Remove not-loaded class immediately
    document.body.classList.remove('not-loaded');
    
    // Ensure text is visible and animated
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        // Add initial animation
        letter.style.animationDelay = `${index * 0.15}s`;
        
        // Add floating animation after initial animation
        setTimeout(() => {
            letter.classList.add('animated');
        }, (index * 0.15 + 1.5) * 1000);
    });
});
  