// Reference the loginForm, usernameInput, passwordInput, and errorMessages elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const errorMessages = document.getElementById("errorMessages");

// Array of valid passwords
const validPasswords = [
  82223, 36330, 48071, 94126, 85732, 38802, 76935, 53172, 58101, 41227,
  // Add the remaining passwords here...
];

// Event listener for form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  const username = usernameInput.value.trim();
  const password = parseInt(passwordInput.value.trim()); // Convert the input to an integer

  if (username === "") {
    displayErrorMessage("Please enter a username.");
  } else if (!isValidPassword(password)) {
    displayErrorMessage("Invalid password. Use the correct password given to you.");
  } else {
    // Store the username (optional)
    // Redirect to the chat.html page
    window.location.href = "chat.html";
  }
});

// Function to display error messages
function displayErrorMessage(message) {
  errorMessages.innerHTML = message;
  errorMessages.style.display = "block";
}

// Function to check if the password is valid
function isValidPassword(password) {
  return validPasswords.includes(password);
}

// Additional functions and code can be added here...
