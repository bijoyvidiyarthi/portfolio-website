
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
    // Remove e.preventDefault() - we need to allow form submission
    const form = e.target;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const messageContainer = document.getElementById('formMessage');

    // Simple validation
    if (!name || !email || !subject || !message) {
        // Prevent submission if validation fails
        e.preventDefault();

        // Show error message
        messageContainer.className = 'form-message error';
        messageContainer.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please fill in all required fields.';
        messageContainer.style.display = 'block';
    } else {
        // Show success message immediately
        messageContainer.className = 'form-message success';
        messageContainer.innerHTML = '<i class="fas fa-check-circle"></i> Sending your message...';
        messageContainer.style.display = 'block';

        // Optional: Add a small delay to let users see the message
        setTimeout(() => {
            // Form will submit normally to Netlify
            // We don't need to do anything here
        }, 1500);

        // Let the form submit to Netlify normally
        // Don't reset the form - Netlify needs the data
    }
});