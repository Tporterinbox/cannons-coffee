const form = document.getElementById('coffeeForm');
const messageDiv = document.getElementById('thankYouMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const comments = document.getElementById('comments').value;
  const flavor = document.getElementById('flavor').value;
  const interest = document.querySelector('input[name="interest"]:checked').value;

  // Create a data object
  const formData = {
    name,
    email,
    phone,
    comments,
    flavor,
    interest
  };

  // Log to console
  console.log("Form submitted:", formData);

  // Display thank-you message
  messageDiv.innerHTML = `Thanks, ${name}! We've received your message about "${interest}". We'll contact you at ${email} or ${phone}. We're glad you like ${flavor} coffee!`;
});
