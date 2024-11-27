let currentSlide = 0;

// Photos and captions arrays
const photos = [
    "Photos/5.jpeg", "Photos/6.jpeg", "Photos/7.jpeg", "Photos/8.jpeg",
    "Photos/9.jpeg", "Photos/10.jpeg", "Photos/11.jpeg", "Photos/12.jpeg",
    "Photos/13.jpeg", "Photos/14.jpeg", "Photos/15.jpeg", "Photos/16.jpeg",
    "Photos/18.JPG", "Photos/19.JPG", "Photos/20.JPG",
    "Photos/21.JPG", "Photos/22.JPG", "Photos/23.JPG", "Photos/24.JPG",
    "Photos/25.JPG", "Photos/26.JPG"
];

const captions = [
    "Bradley, you make me so happy.",
    "I'm so grateful to call you mine.",
    "You're not just my boyfriend, you're my best friend.",
    "I like you a lottle. It's like a little, except a lot.",
    "You're my sunshine on a cloudy day.",
    "Our love is beautiful.",
    "You're my coffee to my cigarettes.",
    "You’re my today and all of my tomorrows.",
    "You have the key to my heart.",
    "Every love song makes me think of you.",
    "You're the only person I want to share my snacks with.",
    "There's no such thing as perfect but you're perfect for me.",
    "You're the missing piece to my puzzle.",
    "I can't help falling in love with you.",
    "You're the best thing that ever happened to me.",
    "I'm Ben Folds style the luckiest.",
    "Forever grateful for you.",
    "You make me feel alive again.",
    "You're my dream come true.",
    "Rawr xD",
    "I just wanted to say I love you."
];

/**
 * Initialize the slideshow
 */
function initializeSlideshow() {
    const slideshowContainer = document.querySelector(".slideshow-container");

    // Add slides dynamically
    photos.forEach((photo, index) => {
        const slideElement = document.createElement("div");
        slideElement.className = "slide fade";
        slideElement.innerHTML = `<img src="${photo}" alt="Slide ${index + 1}">`;
        slideshowContainer.appendChild(slideElement);
    });

    validateSlides();
    showSlide(0);
    startAutoSlide();
}

/**
 * Validate the slideshow
 */
function validateSlides() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length !== captions.length) {
        console.error(`Mismatch: ${slides.length} slides but ${captions.length} captions!`);
    }
}

/**
 * Show the current slide
 */
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const captionText = document.getElementById("caption-text");

    slides.forEach((slide) => (slide.style.display = "none"));
    slides[index].style.display = "block";
    captionText.textContent = captions[index];

    updateLoveMeter(index);
}

/**
 * Automatically transition between slides
 */
function startAutoSlide() {
    setInterval(() => {
        const slides = document.querySelectorAll(".slide");
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}

/**
 * Update the love meter
 */
function updateLoveMeter(index) {
    const loveMeterFill = document.querySelector(".love-meter-fill");
    const loveMeterText = document.querySelector(".love-meter-text");

    const percentage = ((index + 1) / photos.length) * 100;
    loveMeterFill.style.width = `${percentage}%`;

    if (percentage === 100) {
        loveMeterText.textContent = "I love you, Bradley Michael Duer 💖";
    } else {
        loveMeterText.textContent = "My love for you";
    }
}

/**
 * Add twinkling stars to the background
 */
function createStars() {
    const numStars = 100; // Adjust the number of stars
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random twinkling duration
        document.body.appendChild(star);
    }
}

/**
 * Initialize the music player
 */
function initializeMusic() {
    const music = document.getElementById("background-music");

    // Attempt to play music automatically
    music.play().catch(() => {
        console.log("Autoplay blocked. Waiting for user interaction.");
        // Add a listener to start music on user interaction
        document.body.addEventListener(
            "click",
            () => {
                music.play().catch((err) => console.error("Music failed to play:", err));
            },
            { once: true } // Trigger only once
        );
    });
}

/**
 * Initialize animations
 */
function initializeAnimations() {
    createStars();
}

// Initialize everything on page load
document.addEventListener("DOMContentLoaded", () => {
    initializeSlideshow();
    initializeMusic(); // Add music initialization
    initializeAnimations(); // Start animations
});

function createFallingHearts() {
    const maxHearts = 10; // Limit the number of hearts on the screen
    const existingHearts = document.querySelectorAll(".falling-heart").length;

    if (existingHearts >= maxHearts) return; // Stop if too many hearts already

    const numHearts = 3; // Number of hearts to generate at a time
    const loveMeter = document.getElementById("love-meter");
    const loveMeterRect = loveMeter.getBoundingClientRect();

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement("img");
        heart.className = "falling-heart";
        heart.src = "Photos/heart2.png"; // Your custom heart image

        // Start from the top of the love meter
        heart.style.left = `${loveMeterRect.left + Math.random() * loveMeterRect.width}px`; // Random horizontal position within the love meter
        heart.style.top = `${loveMeterRect.top}px`; // Top of the love meter
     


        document.body.appendChild(heart);

        // Remove the heart after the animation completes
        setTimeout(() => heart.remove(), 8000); // Match the animation duration
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(createFallingHearts, 3000); // Generate hearts every 3 seconds
});