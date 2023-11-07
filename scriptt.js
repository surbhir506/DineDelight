let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

// Function to store username and password
function storeCredentials(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}

// Function to validate stored credentials
function validateStoredCredentials(username, password) {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    return username === storedUsername && password === storedPassword;
}

// Add a click event listener to the login button to handle authentication
document.querySelector(".clkbtn").addEventListener("click", () => {
    const usernameInput = document.querySelector("#usernameInput");
    const passwordInput = document.querySelector("#passwordInput");
    const successMessage = document.querySelector("#successMessage");

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (validateStoredCredentials(username, password)) {
        successMessage.textContent = "Login successful. Redirecting...";
        // Redirect to the desired website after successful login
        setTimeout(() => {
            window.location.href = "index.html"; // Replace with the URL you want to redirect to
        }, 2000); // Redirect after 2 seconds (adjust as needed)
    } else {
        successMessage.textContent = "Incorrect username or password. Please try again.";
    }
});
