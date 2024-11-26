let currentSlide = 0;

// Captions array for the slideshow
const captions = [
    "Bradley, you are my sunshine 🌞",
    "Every moment with you is magic ✨",
    "I love you more than words can say ❤️",
    "You light up my world 💡",
    "Life feels brighter with you in it 🌈",
    "You’re my favorite person 🥰",
    "Together, everything feels possible 💕",
    "Every day is better with you 🌟",
    "I love you more every moment 💖",
    "You complete my world 🌎",
    "Thank you for being you ❤️",
    "Forever grateful for us 💞",
    "You’re the love of my life 💘",
    "To infinity and beyond 🌌",
    "You’re my forever person 💍",
    "I’m so lucky to have you 🍀",
    "You’re my safe place 🏡",
    "You make my heart smile 😊",
    "Our love is like the stars ✨",
    "You’re my everything 🌻",
    "You’re my person 💕",
    "You make life beautiful 🌸",
    "Every moment is magical with you 🪄",
    "You’re my dream come true 🌟",
    "Thank you for loving me 💖",
    "I’ll love you forever and always ❤️"
];

// Function to validate captions match the number of slides
function validateCaptions() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length !== captions.length) {
        console.error(`Mismatch: ${slides.length} slides but ${captions.length} captions!`);
    }
}

// Function to display the current slide and caption
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const captionText = document.getElementById("caption-text");

    slides.forEach(slide => (slide.style.display = "none")); // Hide all slides
    slides[index].style.display = "block"; // Show the current slide

    // Update the caption
    captionText.textContent = captions[index];
}

// Automatic slideshow transitions
function startAutoSlide() {
    setInterval(() => {
        const slides = document.querySelectorAll(".slide");
        currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds
}

// Initialize slideshow
document.addEventListener("DOMContentLoaded", () => {
    validateCaptions(); // Validate captions match slides
    showSlide(currentSlide); // Show the first slide
    startAutoSlide(); // Start automatic transitions
});

// Auto-play music with a fallback for autoplay restrictions
const music = document.getElementById("background-music");
music.play().catch(() => {
    document.body.addEventListener(
        "click",
        () => {
            music.play();
        },
        { once: true }
    );
});