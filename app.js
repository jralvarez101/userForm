// Form Blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
 // first get value of name field
    const name = document.getElementById('name');
    const re = /^[A-Za-z]{2,10}$/;

    // use test method
    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip(){
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([0-9A-Za-z_\-\.]+)@([0-9A-Za-z_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
    
}

function validatePhone(){
    const phone = document.getElementById('phone');
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
    
}