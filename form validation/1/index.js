const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cpassfield = form.querySelector(".confirm-password"),
    cpassInput = cpassfield.querySelector(".cpassword")



// Email Validation 
function checkEmail() {
    const pattern = /^[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(pattern)) {
        return emailField.classList.add("invalid"); //adding invalid class if emailinput does not match with email pattern
    }
    emailField.classList.remove("invalid");
}


//pasword validation 
function createpassword() {
    const passPattern = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!*&])[A-Za-z\d@$!%*?]{8,}$/;
    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid");
    }
    passField.classList.add("invalid");
}

//confirm password 
function confirmPassword() {
    if (passInput.value !== cpassInput.value || cpassInput.value === "") {
        return cpassfield.classList.add("invalid")
    }
    cpassfield.classList.remove("invalid")
}

//eye icons function
const eyeicons = document.querySelectorAll(".show-hide");
eyeicons.forEach((eyeicon) => {
    eyeicon.addEventListener('click', () => {
        const pInput = eyeicon.parentElement.querySelector("input");
        console.log(pInput)
        if (pInput.type === "password") {
            eyeicon.classList.replace("bx-hide", "bx-show");
            return pInput.type == "text"
        }
        eyeicon.classList.replace("bx-show", "bx-hide");
        return pInput.type == "password"

    })

})

// calling function on form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();  //prevent 
    checkEmail();
    createpassword();
    confirmPassword();

    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createpassword);
    cpassInput.addEventListener("keyup", confirmPassword);
}
)

