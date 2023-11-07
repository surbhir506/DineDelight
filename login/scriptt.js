// let signup = document.querySelector(".signup");
// let login = document.querySelector(".login");
// let slider = document.querySelector(".slider");
// let formSection = document.querySelector(".form-section");

// signup.addEventListener("click", () => {
// 	slider.classList.add("moveslider");
// 	formSection.classList.add("form-section-move");
// });

// login.addEventListener("click", () => {
// 	slider.classList.remove("moveslider");
// 	formSection.classList.remove("form-section-move");
// });

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

// Assume you have a function to validate user credentials
function validateCredentials(username, password) {
    // Replace this with your actual validation logic
    if (username === "correct_username" && password === "correct_password") {
        // Redirect to the desired website after successful login
        window.location.href = ""; // Replace with the URL you want to redirect to
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}

// Add a click event listener to the login button to handle authentication
document.querySelector(".clkbtn").addEventListener("click", () => {
    const usernameInput = document.querySelector(".email");
    const passwordInput = document.querySelector(".password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    validateCredentials(username, password);
});
