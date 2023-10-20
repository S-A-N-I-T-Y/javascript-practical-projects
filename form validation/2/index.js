const form = document.querySelector("form")
const emailInput = document.querySelector("#email")
const emailField = document.querySelector(".email")
const passwordInput = document.querySelector("#passwordInput")
const passwordField = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#cpassword")
const confirmPasswordField = document.querySelector(".confirm-password")

// Email vALidation
function confirmEmail() {
    const pattern = /^[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(pattern)) {
        return emailField.classList.add("invalid");
       
    }
    emailField.classList.remove("invalid");
}

// password validation
function checkPassword() {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordInput.value.match(passwordPattern)) {
        return passwordField.classList.add("invalid");
    }
    passwordField.classList.remove("invalid");
}   




//confirm password validation

function confirmPassword() {
    if (passwordInput.value !== confirmPasswordInput.value || confirmPasswordInput.value == "") {
        return confirmPasswordField.classList.add("invalid")
    }
    confirmPasswordField.classList.remove("invalid")


}
emailInput.addEventListener("keyup", confirmEmail)
passwordInput.addEventListener("keyup", checkPassword)
confirmPasswordInput.addEventListener("keyup", confirmPassword)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    confirmEmail();
    checkPassword();
    confirmPassword();

  
   
})


