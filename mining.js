document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Smooth scroll
    const links = document.querySelectorAll('nav ul li a, .scroll-to');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href');
            const targetSection = document.querySelector(targetID);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Sticky header on scroll
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});
