const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const createAccBtn = document.getElementById('create-acc-btn');

function checkPassword() {
    if(passwordInput.value) {
        if(passwordInput.value === confirmPasswordInput.value){
            passwordInput.style.borderColor = 'green';
            confirmPasswordInput.style.borderColor = 'green';
            createAccBtn.setAttribute('type', 'submit');
        }
        else {
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
            createAccBtn.setAttribute('type', 'button');
        }
    } 
    else {
        passwordInput.style.borderColor = 'black';
        confirmPasswordInput.style.borderColor = 'black';
    }  
}

setInterval(checkPassword, 200);