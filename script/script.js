// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Add event listener to menu button
    menuToggle.addEventListener("click", function () {
        // Toggle the 'visible' class to show/hide the nav-links
        if (navLinks.classList.contains("visible")) {
            navLinks.classList.remove("visible");
        } else {
            navLinks.classList.add("visible");
        }
    });

    // Optional: Close the menu when clicking a link
    navLinks.addEventListener("click", function () {
        if (navLinks.classList.contains("visible")) {
            navLinks.classList.remove("visible");
        }
    });

    // Theme Toggle
    const themeButton = document.getElementById("theme-button");
    themeButton.addEventListener("click", function () {
        const body = document.body;
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            themeButton.innerHTML = '<i class="fas fa-sun"></i>'; // Switch to light mode icon
        } else {
            themeButton.innerHTML = '<i class="fas fa-moon"></i>'; // Switch to dark mode icon
        }
    });

    // Smooth Scrolling for Navigation Links
    const navButtons = document.querySelectorAll("nav a");
    navButtons.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navBar = document.querySelector("nav");
                const navBarHeight = navBar ? navBar.offsetHeight : 0;

                const targetPosition = targetElement.offsetTop - navBarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });

    // Typewriter Effect
    function typewriterEffect() {
        const texts = [" Graduate Research Student ", " Software Developer "];
        const typewriterElement = document.getElementById("typewriter-text");
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[textIndex];
            const displayedText = isDeleting
                ? currentText.substring(0, charIndex--)
                : currentText.substring(0, charIndex++);

            typewriterElement.textContent = displayedText;

            const typingSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, typingSpeed);
            }
        }

        type();
    }

    // Initialize Typewriter Effect
    typewriterEffect();
});


// Ensure about-left is visible on mobile
function showAboutLeftOnMobile() {
    const aboutLeft = document.querySelector('.about-left');
    const aboutRight = document.querySelector('.about-right');

    if (window.innerWidth <= 768) {
        // Show about-left and hide about-right
        if (aboutLeft) aboutLeft.style.display = 'block';
        if (aboutRight) aboutRight.style.display = 'none';
    } else {
        // Reset visibility for desktop view
        if (aboutLeft) aboutLeft.style.display = '';
        if (aboutRight) aboutRight.style.display = '';
    }
}

// Add event listener to handle resizing
window.addEventListener('resize', showAboutLeftOnMobile);
window.addEventListener('load', showAboutLeftOnMobile);
