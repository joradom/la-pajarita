document.addEventListener('DOMContentLoaded', () => {
    // Console greeting
    console.log('%c La Pajarita ', 'background: #222; color: #fdfbf7; font-size: 20px; padding: 5px; border-radius: 4px;');
    console.log('El arte de la simplicidad.');

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);

            // Simple toggle for now, can be improved with animation classes
            navLinks.style.display = isExpanded ? 'none' : 'flex';
            if (!isExpanded) {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#FDFBF7';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
            } else {
                navLinks.style = ''; // Reset inline styles
            }
        });
    }

    // Scroll Active Link Highlighting (Optional polish)
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
});
