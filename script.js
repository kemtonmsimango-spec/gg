document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // --- 3D Parallax Tilt Effect for Hero Device Mockups ---
    const container = document.querySelector('.hero-visual-container');
    const laptop = document.querySelector('.mockup-laptop');
    const mobile = document.querySelector('.mockup-mobile');

    if (container && laptop && mobile) {
        // Track mouse movement
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            // Calculate mouse position relative to center of container
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Calculate rotation degrees (dampened)
            const rotateX = (y / rect.height) * -15; // Max 15deg tilt
            const rotateY = (x / rect.width) * 15;

            // Apply transformations
            laptop.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            // Mobile moves slightly more to create depth/parallax
            mobile.style.transform = `translateZ(80px) rotateX(${rotateX * 1.5}deg) rotateY(${(rotateY * 1.5) - 15}deg)`;
        });

        // Reset smooth transition when mouse leaves
        container.addEventListener('mouseleave', () => {
            laptop.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            mobile.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            
            laptop.style.transform = 'rotateX(0deg) rotateY(0deg)';
            mobile.style.transform = 'translateZ(80px) rotateX(0deg) rotateY(-15deg)';
            
            // Remove transition after reset to allow smooth tracking again
            setTimeout(() => {
                laptop.style.transition = 'transform 0.1s ease-out';
                mobile.style.transition = 'transform 0.1s ease-out';
            }, 600);
        });

        // Initialize transition speeds
        laptop.style.transition = 'transform 0.1s ease-out';
        mobile.style.transition = 'transform 0.1s ease-out';
    }
});