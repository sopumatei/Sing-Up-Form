const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phone-number');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const createAccBtn = document.getElementById('create-acc-btn');
const errorDisplay = document.getElementsByClassName('error-msg');

const redColor = 'tomato';
const greenColor = '#73a45c';
const blueColor = '#0cd5e6';

let hasFirstName = false;

function checkFirstName() {
    if(firstNameInput.value) {
        firstNameInput.style.borderColor = blueColor;
        errorDisplay[0].textContent = ' ';
        hasFirstName = true;
        firstNameInput.parentElement.className += ' filled'; 
    }
    else {
        hasFirstName = false;
        firstNameInput.parentElement.className = 'form-item'; 
    }
}

firstNameInput.addEventListener('blur', () => {
    if(!firstNameInput.value) {
        firstNameInput.style.borderColor = redColor;
        firstNameInput.parentElement.className = 'form-item'; 
        errorDisplay[0].textContent = '*This field is required';
    }
})

let hasLastName = false;

function checkLastName() {
    if(lastNameInput.value) {
        lastNameInput.style.borderColor = blueColor;
        errorDisplay[1].textContent = ' ';
        hasLastName = true;
        lastNameInput.parentElement.className += ' filled'; 
    }
    else {
        hasLastName = false;
        lastNameInput.parentElement.className = 'form-item'; 
    }
}

lastNameInput.addEventListener('blur', () => {
    if(!lastNameInput.value) {
        lastNameInput.style.borderColor = redColor;
        lastNameInput.parentElement.className = 'form-item'; 
        errorDisplay[1].textContent = '*This field is required';
    }
})

let hasEmail = false;

function checkEmail() {
    if(emailInput.value) {
        if(emailInput.value.includes('@') && emailInput.value.includes('.')) {
            hasEmail = true;
            emailInput.style.borderColor = blueColor;
            emailInput.parentElement.className += ' filled';
            errorDisplay[2].textContent = ' ';
        }
        else {
            hasEmail = false;
            emailInput.style.borderColor = redColor;
            emailInput.parentElement.className = 'form-item';
            errorDisplay[2].textContent = '*Invalid email';
        }
    }
}

emailInput.addEventListener('blur', () => {
    if(!emailInput.value) {
        emailInput.style.borderColor = redColor;
        emailInput.parentElement.className = 'form-item';
        errorDisplay[2].textContent = '*This field is required';
    }
})

let hasPhoneNumber = false;

function checkPhoneNumber() {
    if(phoneNumberInput.value) {
        errorDisplay[3].textContent = ' ';
        hasPhoneNumber = true
        phoneNumberInput.parentElement.className += ' filled'; 
        phoneNumberInput.style.borderColor = blueColor;
    }
    else {
        hasPhoneNumber = false;
        phoneNumberInput.parentElement.className = 'form-item'; 
    }
}

phoneNumberInput.addEventListener('blur', () => {
    if(!phoneNumberInput.value) {
        phoneNumberInput.parentElement.className = 'form-item'; 
        phoneNumberInput.style.borderColor = redColor;
        errorDisplay[3].textContent = '*This field is required';
    }
})

let hasPassword = false;

function checkPassword() {
    if(passwordInput.value) {
        if(passwordInput.value.length >= 8) {
            passwordInput.style.borderColor = blueColor;
            passwordInput.parentElement.className += ' filled';
            errorDisplay[4].textContent = ' ';
        }
        else {
            passwordInput.style.borderColor = redColor;
            passwordInput.parentElement.className = 'form-item';
            errorDisplay[4].textContent = '*The password must have at least 8 characters';
        }
    }
}

passwordInput.addEventListener('blur', () => {
    if(!passwordInput.value) {
        passwordInput.parentElement.className = 'form-item'; 
        passwordInput.style.borderColor = redColor;
        errorDisplay[4].textContent = '*This field is required';
    }
})

function confirmPassword() {
    if(confirmPasswordInput.value) {
        if(passwordInput.value === confirmPasswordInput.value){
            hasPassword = true;
            confirmPasswordInput.style.borderColor = blueColor;
            confirmPasswordInput.parentElement.className += ' filled';
            errorDisplay[5].textContent = ' ';
        }
        else {
            hasPassword = false;
            confirmPasswordInput.style.borderColor = redColor;
            confirmPasswordInput.parentElement.className = 'form-item';
            errorDisplay[5].textContent = "*The password doesn't match";
        }
    } 
}

confirmPasswordInput.addEventListener('blur', () => {
    if(!confirmPasswordInput.value) {
        confirmPasswordInput.parentElement.className = 'form-item'; 
        confirmPasswordInput.style.borderColor = redColor;
        errorDisplay[5].textContent = '*This field is required';
    }
})

function checkValidation() {
    if(hasPassword && hasPhoneNumber && hasEmail && hasFirstName && hasLastName) {
        createAccBtn.setAttribute('type', 'submit');
    }
    else {
        createAccBtn.setAttribute('type', 'button');
    }
}

setInterval(checkFirstName, 200);
setInterval(checkLastName, 200);
setInterval(checkEmail, 200);
setInterval(checkPhoneNumber, 200);
setInterval(checkPassword, 200);
setInterval(confirmPassword, 200);
setInterval(checkValidation, 200);

const errorMsg = '*This field is required';
createAccBtn.addEventListener('click', () => {
    if(!hasFirstName) {
        firstNameInput.style.borderColor = redColor;
        errorDisplay[0].textContent = errorMsg;
    }

    if(!hasLastName) {
        lastNameInput.style.borderColor = redColor;
        errorDisplay[1].textContent = errorMsg;
    }

    if(!hasEmail) {
        emailInput.style.borderColor = redColor;
        errorDisplay[2].textContent = errorMsg;
    }

    if(!hasPhoneNumber) {
        phoneNumberInput.style.borderColor = redColor;
        errorDisplay[3].textContent = errorMsg;
    }

    if(!hasPassword) {
        if(!passwordInput.value) {
            errorDisplay[4].textContent = errorMsg;
            passwordInput.parentElement.className = 'form-item';
            passwordInput.style.borderColor = redColor;
        }

        if(!confirmPasswordInput.value) {
            errorDisplay[5].textContent = errorMsg;
            confirmPasswordInput.style.borderColor = redColor;
        }
    }
})