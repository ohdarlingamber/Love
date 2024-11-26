let currentSlide = 0;

// Captions array for the slideshow
const captions = [
    "Bradley, you make me so happy.",
    "I'm so grateful to call you mine.",
    "You're not just my boyfriend, you're my best friend.",
    "You're my sunshine on a cloudy day.",
    "You're the best thing I never knew I needed.",
    "You’re my today and all of my tomorrows.",
    "You are my greatest adventure.",
    "Every love song makes me think of you.",
    "You make me feel alive again.",
    "I'm Ben Folds style the luckiest.",
    "I'd choose you over and over again.",
    "Forever grateful for you.",
    "You're my end and my beginning, even when I lose, I'm winning.",
    "Every little thing you do, i'm so in love with you.",
    "I can't help falling in love with you.",
    "You're the best thing that ever happened to me.",
    "You're everything i've been looking for and more.",
    "I'm all yours if you're all mine.",
    "Our love is beautiful.",
    "You are the light that makes my darkness disappear.",
    "I'll be your hope, i'll be your light, i'll be your love.",
    "You're my wonderwall.",
    "Every moment is magical with you 🪄",
    "I don't know what I did to deserve you.",
    "You're my dream come true.",
    "I just wanted to say I love you."
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