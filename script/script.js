// Function to toggle the theme
function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById("theme-button");
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        themeButton.innerHTML = '<i class="fas fa-sun"></i>'; // Switch to light mode icon
    } else {
        themeButton.innerHTML = '<i class="fas fa-moon"></i>'; // Switch to dark mode icon
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Extract the target section ID
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Get the height of the navbar
            const navBar = document.querySelector('nav');
            const navBarHeight = navBar ? navBar.offsetHeight : 0;

            // Calculate the offset position to scroll to
            const targetPosition = targetElement.offsetTop - navBarHeight;

            // Smooth scroll to the calculated position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        } else {
            console.error(`Target element with ID "${targetId}" not found.`);
        }
    });
});

// Typewriter effect for header text
function typewriterEffect() {
    const texts = [" Graduate Research Student ", " Software Developer "];
    const typewriterElement = document.getElementById("typewriter-text");
    let textIndex = 0; // Track the current text
    let charIndex = 0; // Track the current character in the text
    let isDeleting = false; // Flag to indicate typing or deleting

    function type() {
        // Determine the current text being typed
        const currentText = texts[textIndex];
        const displayedText = isDeleting
            ? currentText.substring(0, charIndex--)
            : currentText.substring(0, charIndex++);

        typewriterElement.textContent = displayedText;

        // Set typing or deleting speed
        const typingSpeed = isDeleting ? 50 : 100;

        // Check if typing or deleting is complete
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause for 2 seconds before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
            setTimeout(type, 500); // Pause for a brief moment before typing next text
        } else {
            setTimeout(type, typingSpeed); // Continue typing or deleting
        }
    }

    type(); // Start the typewriter effect
}

// Hamburger menu toggle function
function toggleMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('visible'); // Toggle the visibility of the menu
    });

    // Close the menu when a navigation link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('visible'); // Close the menu
        });
    });
}


// Function to enforce mobile-specific visibility
function adjustHeaderForMobile() {
    const header = document.querySelector('header');
    const aboutLeft = document.querySelector('.about-left');
    const aboutRight = document.querySelector('.about-right');
    const nav = document.querySelector('nav');

    if (window.innerWidth <= 768) {
        // Mobile view: Show nav and about-left only
        header.style.display = 'block';
        nav.style.display = 'flex';
        aboutLeft.style.display = 'block';
        aboutRight.style.display = 'none'; // Hide about-right
    } else {
        // Desktop view: Show all sections
        header.style.display = 'flex';
        nav.style.display = 'flex';
        aboutLeft.style.display = 'flex';
        aboutRight.style.display = 'flex';
    }
}

// Add event listeners to handle window resize and initial load
window.addEventListener('resize', adjustHeaderForMobile);
window.addEventListener('DOMContentLoaded', adjustHeaderForMobile);



// Initialize functions when the page loads
window.onload = function () {
    adjustHeaderForMobile();
    typewriterEffect(); // Start the typewriter effect
    toggleMenu(); // Initialize the hamburger menu toggle
};
