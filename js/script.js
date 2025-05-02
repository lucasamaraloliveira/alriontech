document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuButton = document.querySelector('.close-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a[href^="#"]'); // Get links pointing to sections
    const body = document.body;
    const scrollTopButton = document.querySelector('.scroll-top');

    // --- Mobile Menu Functionality ---
    const toggleMenu = () => {
        mobileMenu.classList.toggle('is-open');
        body.classList.toggle('no-scroll'); // Prevent scrolling on body
    };

    menuToggle.addEventListener('click', toggleMenu);
    closeMenuButton.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Optional: Prevent default hash link behavior if you're using smooth scrolling
            // e.preventDefault();
            toggleMenu(); // Close the menu

            // Optional: Smooth scroll to the section
            // const targetId = link.getAttribute('href');
            // document.querySelector(targetId).scrollIntoView({
            //     behavior: 'smooth'
            // });
        });
    });

    // Close menu if clicked outside (optional, but good UX)
    // mobileMenu.addEventListener('click', (e) => {
    //     if (e.target === mobileMenu) {
    //         toggleMenu();
    //     }
    // });


    // --- Scroll to Top Button ---
    const toggleScrollTopButton = () => {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', toggleScrollTopButton);

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll effect
        });
    });

    // Initial check on page load
    toggleScrollTopButton();

    // --- Optional: Smooth Scrolling for Navigation Links ---
    // (This part is if you don't want the browser's default jump behavior for # links)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
});