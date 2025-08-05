  var typed = new Typed('#element', {
            strings: [
                '<i>Web</i> Developer<span class="gray-text"> .../></span>',
                'Laravel Developer<span class="gray-text"> .../></span>'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 700,
            loop: true,
        });

        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form elements
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const messageContainer = document.getElementById('formMessage');

            // Simple validation
            if (name && email && subject && message) {
                // Show success message
                messageContainer.className = 'form-message success';
                messageContainer.innerHTML = '<i class="fas fa-check-circle"></i> Your message has been sent successfully! I\'ll get back to you soon.';
                messageContainer.style.display = 'block';

                // Reset form
                document.getElementById('contactForm').reset();

                // Hide message after 5 seconds
                setTimeout(() => {
                    messageContainer.style.display = 'none';
                }, 5000);
            } else {
                // Show error message
                messageContainer.className = 'form-message error';
                messageContainer.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please fill in all required fields.';
                messageContainer.style.display = 'block';
            }
        });