document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            function showError(element, message) {
                element.textContent = message;
            }

            function clearError(element) {
                element.textContent = '';
            }

            if (nameInput && nameInput.value.trim() === '') {
                showError(nameError, 'Name is required.');
                isValid = false;
            } else if (nameError) {
                clearError(nameError);
            }

            if (emailInput && emailInput.value.trim() === '') {
                showError(emailError, 'Email is required.');
                isValid = false;
            } else if (emailInput && !/\S+@\S+\.\S+/.test(emailInput.value)) {
                showError(emailError, 'Invalid email format.');
                isValid = false;
            } else if (emailError) {
                clearError(emailError);
            }

            if (messageInput && messageInput.value.trim() === '') {
                showError(messageError, 'Message is required.');
                isValid = false;
            } else if (messageError) {
                clearError(messageError);
            }

            if (!isValid) {
                event.preventDefault();
            } else {
                alert('Form submitted successfully! (Placeholder)');
                contactForm.reset();
            }
        });
    }

    // Optional: Basic Image Slider (if we include one on the home page)
    const slider = document.querySelector('.slider');
    if (slider) {
        const slides = slider.querySelectorAll('img');
        let currentIndex = 0;

        function nextSlide() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }

        if (slides.length > 0) {
            slides[0].classList.add('active');
            setInterval(nextSlide, 3000); // Change slide every 3 seconds
        }
    }
});
