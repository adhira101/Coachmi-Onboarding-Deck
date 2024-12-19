document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 1;
    const totalSlides = 7;
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');

    // Initialize first slide
    slides[0].classList.add('active');
    updateProgress(1);

    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Show the target slide
        currentSlide = n;
        slides[currentSlide - 1].classList.add('active');
        
        // Update progress
        updateProgress(currentSlide);
        
        // Update button states
        updateNavigationButtons();
    }

    function updateProgress(slideNumber) {
        // The progress is automatically handled by CSS now
        // This function is kept for potential future enhancements
    }

    function updateNavigationButtons() {
        // Disable prev button on first slide
        if (prevBtn) {
            prevBtn.style.opacity = currentSlide === 1 ? '0.5' : '1';
            prevBtn.style.pointerEvents = currentSlide === 1 ? 'none' : 'auto';
        }
        
        // Disable next button on last slide
        if (nextBtn) {
            nextBtn.style.opacity = currentSlide === totalSlides ? '0.5' : '1';
            nextBtn.style.pointerEvents = currentSlide === totalSlides ? 'none' : 'auto';
        }
    }

    // Event Listeners for Navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 1) {
                showSlide(currentSlide - 1);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentSlide < totalSlides) {
                showSlide(currentSlide + 1);
            }
        });
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentSlide > 1) {
            showSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight' && currentSlide < totalSlides) {
            showSlide(currentSlide + 1);
        }
    });

    // Initialize button states
    updateNavigationButtons();
});
