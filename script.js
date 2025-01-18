// Interactive Button with onclick (Toggles background color)
const toggleBtn = document.getElementById("toggleBtn");
let isBlue = false;

toggleBtn.onclick = function() {
  document.body.style.backgroundColor = isBlue ? "white" : "lightblue";
  isBlue = !isBlue;
};

// Slider with Real-Time Feedback (oninput)
const textSizeSlider = document.getElementById("textSizeSlider");
const sliderValue = document.getElementById("sliderValue");

textSizeSlider.oninput = function() {
  const size = textSizeSlider.value + "px";
  document.body.style.fontSize = size;
  sliderValue.textContent = size;
};

// Modal with Event Listeners (Display modal on button click)
const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

modalBtn.onclick = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Form Validation
const userForm = document.getElementById("userForm");

userForm.onsubmit = function(event) {
  let isValid = true;

  // Validate Name
  const name = document.getElementById("name").value;
  const nameError = document.getElementById("nameError");
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("passwordError");
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!password.match(passwordPattern)) {
    passwordError.textContent = "Password must be at least 8 characters long, with at least one uppercase letter and one number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if there are errors
  }
};

// Dropdown Menu with onchange event
const dropdown = document.getElementById("dropdown");
const dropdownMessage = document.getElementById("dropdownMessage");

dropdown.onchange = function() {
  const selectedOption = dropdown.value;
  if (selectedOption !== "default") {
    dropdownMessage.textContent = `You selected: ${selectedOption}`;
  } else {
    dropdownMessage.textContent = "";
  }
};
