
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  const message = document.getElementById('message');

  passwordError.textContent = '';
  confirmPasswordError.textContent = '';
  message.textContent = '';

  if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long';
    return;
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'Passwords do not match';
    return;
  }

  message.textContent = 'Signup successful!';
  message.style.color = 'green';
});
