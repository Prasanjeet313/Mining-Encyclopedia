// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Dynamic news section (using dummy data)
    const newsSection = document.querySelector('section#featured-news');
    const newsArticles = [
        {
            title: 'Mining Innovation in 2024',
            content: 'Discover the latest advancements in mining technology this year.',
            link: '#'
        },
        {
            title: 'Safety Measures in Modern Mines',
            content: 'Learn about the new safety protocols being implemented in mines worldwide.',
            link: '#'
        }
    ];

    newsArticles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');
        
        const titleElement = document.createElement('h3');
        titleElement.textContent = article.title;
        articleElement.appendChild(titleElement);

        const contentElement = document.createElement('p');
        contentElement.textContent = article.content;
        articleElement.appendChild(contentElement);

        const linkElement = document.createElement('a');
        linkElement.href = article.link;
        linkElement.textContent = 'Read more';
        articleElement.appendChild(linkElement);

        newsSection.appendChild(articleElement);
    });

    // Form validation (for contact page)
    const contactForm = document.querySelector('form#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const message = document.querySelector('textarea[name="message"]').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
            } else {
                alert('Thank you for your message!');
                contactForm.reset();
            }
        });
    }

    // Helper function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
