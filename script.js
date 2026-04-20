const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function(e){

    e.preventDefault(); // prevents page reload

    let isValid = true;

    // NAME VALIDATION
    if(nameInput.value.trim() === ""){
        showError(nameInput, "Name is required");
        isValid = false;
    } else if(nameInput.value.length < 3){
        showError(nameInput, "Name must be at least 3 characters");
        isValid = false;
    } else{
        showSuccess(nameInput);
    }

    // EMAIL VALIDATION
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(emailInput.value.trim() === ""){
        showError(emailInput, "Email is required");
        isValid = false;
    } else if(!emailPattern.test(emailInput.value)){
        showError(emailInput, "Enter a valid email");
        isValid = false;
    } else{
        showSuccess(emailInput);
    }

    // PASSWORD VALIDATION
    if(passwordInput.value.trim() === ""){
        showError(passwordInput, "Password is required");
        isValid = false;
    } else if(passwordInput.value.length < 6){
        showError(passwordInput, "Password must be at least 6 characters");
        isValid = false;
    } else{
        showSuccess(passwordInput);
    }

    // If everything is valid
    if(isValid){
        alert("Registration Successful!");
        form.reset();
    }

});


function showError(input, message){
    const group = input.parentElement;
    const error = group.querySelector(".error");

    error.innerText = message;
    input.classList.add("error-border");
    input.classList.remove("success");
}

function showSuccess(input){
    const group = input.parentElement;
    const error = group.querySelector(".error");

    error.innerText = "";
    input.classList.add("success");
    input.classList.remove("error-border");
}
