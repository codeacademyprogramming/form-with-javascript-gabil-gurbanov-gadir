
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const button = document.getElementById('register');

const errorTextFirstname = document.querySelector('.firstname-error');
const errorTextLastname = document.querySelector('.lastname-error');
const errorTextEmail = document.querySelector('.email-error');
const errorTextPassword = document.querySelector('.password-error');

const fnLengthError = document.querySelector('.fn-length-error');
const lnLengthError = document.querySelector('.ln-length-error');
const eLengthError = document.querySelector('.e-length-error');
// const errorTextPassword = document.querySelector('.password-error');

button.onclick = function () {    
    if (firstname.value) {
        errorTextFirstname.classList.add('d-none');  
        if (firstname.value.length>=3 && firstname.value.length<=50) {
            fnLengthError.classList.add('d-none'); 
            localStorage.setItem('firstname',firstname.value);     
        } 
        else{
            fnLengthError.classList.remove('d-none');
        }        
    }
    else  {
        errorTextFirstname.classList.remove('d-none');
        fnLengthError.classList.add('d-none'); 
    }
    if (lastname.value) {
        errorTextLastname.classList.add('d-none');
        if (lastname.value.length>=3 && lastname.value.length<=50) {
            lnLengthError.classList.add('d-none'); 
            localStorage.setItem('lastname',lastname.value);     
        } 
        else{
            lnLengthError.classList.remove('d-none');
        }  
    } else {
        errorTextLastname.classList.remove('d-none');
        lnLengthError.classList.add('d-none'); 
    }
    if (email.value) {
        errorTextEmail.classList.add('d-none');
        if (validateEmail(email.value)) {
            eLengthError.classList.add('d-none');
        } 
        else{
            eLengthError.classList.remove('d-none');
        }  
    } else {
        errorTextEmail.classList.remove('d-none');
        eLengthError.classList.add('d-none');
    }
    if (password.value) {
        errorTextPassword.classList.add('d-none');
    } else {
        errorTextPassword.classList.remove('d-none');
    }
    if (firstname.value && lastname.value && email.value && password.value) {
        firstname.value = '';
        lastname.value = '';
        email.value = '';
        password.value = '';

        window.location.href = 'profile.html';        
    }
}

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }