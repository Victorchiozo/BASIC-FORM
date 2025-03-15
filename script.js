function storeUserData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;
  
  // Store data in localStorage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('password', btoa(password)); // Encrypt password
  localStorage.setItem('username', username);

  alert('Signup successful');
  window.location.href = 'login.html';
}

// Retrieving data
function loadUserData() {
  const storedName = localStorage.getItem('name');
  const storedEmail = localStorage.getItem('email');
  const storedPhone = localStorage.getItem('phone');
  const storedPassword = localStorage.getItem('password');
  const storedUsername = localStorage.getItem('username');

  // Display data in the input fields
  document.getElementById('name').value = storedName;
  document.getElementById('email').value = storedEmail;
  document.getElementById('phone').value = storedPhone;
  document.getElementById('password').value = atob(storedPassword); // Decrypt password
  document.getElementById('username').value = storedUsername;
  document.getElementById('submit').addEventListener('click', storeUserData);
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get reCAPTCHA response
  let recaptchaResponse = grecaptcha.getResponse();

  if (recaptchaResponse.length === 0) {
      alert('Please complete the reCAPTCHA');
      document.getElementById("error-message").textContent = "Please verify that you are human!";
      return;
  }

  // If reCAPTCHA is validated, continue with the signup process
  storeUserData();
  alert('Sign-up successful!');

});



function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  if (!storedEmail || !storedPassword) {
      alert("No account found. Please sign up first.");
      return;
  }

  if (email === storedEmail && password === atob(storedPassword)) { // Decrypt password
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect to dashboard
  } else {
      alert("Invalid email or password.");
  }
}