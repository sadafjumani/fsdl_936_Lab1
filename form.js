
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const ageError = document.getElementById("ageError");
  const phoneError = document.getElementById("phoneError");
  const genderError = document.getElementById("genderError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const successMsg = document.getElementById("successMsg");

  // Clear errors
  [
    nameError,
    emailError,
    ageError,
    phoneError,
    genderError,
    passwordError,
    confirmPasswordError,
    successMsg,
  ].forEach((el) => (el.textContent = ""));

  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  }

  if (age < 1 || age > 120) {
    ageError.textContent = "Enter a valid age.";
    isValid = false;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    phoneError.textContent = "Enter a valid 10-digit phone number.";
    isValid = false;
  }

  if (!gender) {
    genderError.textContent = "Please select gender.";
    isValid = false;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = "Registration successful!";
    form.reset();
  }
});
