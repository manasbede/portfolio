// Function to toggle theme (already present in your script)
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

// Smooth scrolling with sections centered vertically (already present in your script)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1); // Extract the section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 180; // Adjust this value based on your design
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth', // Enable smooth scrolling
            });
        }
    });
});


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

// Initialize the typewriter effect when the page loads
window.onload = typewriterEffect;

