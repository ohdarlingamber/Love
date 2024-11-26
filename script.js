let currentSlide = 0;

// Photos and captions arrays
const photos = [
    "Photos/5.jpeg",
    "Photos/6.jpeg", "Photos/7.jpeg", "Photos/8.jpeg", "Photos/9.jpeg", "Photos/10.jpeg",
    "Photos/11.jpeg", "Photos/12.jpeg", "Photos/13.jpeg", "Photos/14.jpeg", "Photos/15.jpeg",
    "Photos/16.jpeg", "Photos/17.jpeg", "Photos/18.JPG", "Photos/19.JPG", "Photos/20.JPG",
    "Photos/21.JPG", "Photos/22.JPG", "Photos/23.JPG", "Photos/24.jpg", "Photos/25.jpg",
    "Photos/26.jpg"
];

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
    "I adore every little thing that you do.",
    "I can't help falling in love with you.",
    "You're the best thing that ever happened to me.",
    "You're everything I've been looking for and more.",
    "I'm all yours if you're all mine.",
    "You are the light that makes my darkness disappear.",
    "I don't know what I did to deserve you.",
    "You're my dream come true.",
    "I just wanted to say I love you."
];

/**
 * Initialize the slideshow with ordered photos and captions
 */
function initializeSlideshow() {
    const slideshowContainer = document.querySelector(".slideshow-container");

    // Add slides to the container in order
    photos.forEach((photo, index) => {
        const slideElement = document.createElement("div");
        slideElement.className = "slide fade";
        slideElement.innerHTML = `<img src="${photo}" alt="Slide">`;
        slideshowContainer.appendChild(slideElement);
    });

    validateSlides(); // Ensure photos and captions are aligned
    showSlide(0); // Show the first slide
    startAutoSlide(); // Start automatic transitions
}

/**
 * Validate that the number of slides matches the number of captions
 */
function validateSlides() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length !== captions.length) {
        console.error(`Mismatch: ${slides.length} slides but ${captions.length} captions!`);
    }
}

/**
 * Display a specific slide and its corresponding caption
 * @param {Number} index - The index of the slide to display
 */
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const captionText = document.getElementById("caption-text");

    slides.forEach(slide => (slide.style.display = "none")); // Hide all slides
    slides[index].style.display = "block"; // Show the current slide
    captionText.textContent = captions[index]; // Update the caption

     // Sync the love meter
 updateLoveMeter(index);
}




/**
 * Automatically transition between slides
 */
function startAutoSlide() {
    setInterval(() => {
        const slides = document.querySelectorAll(".slide");
        currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds
}

/**
 * Initialize autoplay loop music
 */
function initializeMusic() {
    const music = document.getElementById("background-music");

    music.play().catch(() => {
        document.body.addEventListener(
            "click",
            () => music.play().catch(err => console.error("Failed to play music:", err)),
            { once: true }
        );
    });
}

// Initialize everything on page load
document.addEventListener("DOMContentLoaded", () => {
    initializeSlideshow();
    initializeMusic();
});


/**
 * Update the love meter progress in sync with the slideshow
 * @param {Number} index - The index of the current slide
 */
function updateLoveMeter(index) {
    const loveMeterFill = document.querySelector(".love-meter-fill");
    const totalSlides = photos.length;
    const percentage = ((index + 1) / totalSlides) * 100;

    // Update the width of the love meter fill
    loveMeterFill.style.width = `${percentage}%`;
}

// Floating heart animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('hearts');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 20 + 70}vh`; 
    heart.style.animationDuration = `${Math.random() * 3 + 7}s`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 500);
