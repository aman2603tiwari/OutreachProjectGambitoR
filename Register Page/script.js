
const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
  const phoneInput = document.getElementById('phone');
  const phoneValue = phoneInput.value;
  if (phoneValue.length !== 10) {
    event.preventDefault(); 
    alert('Please enter a valid 10-digit phone number.');
  }
});
