const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');
const messageDiv = document.getElementById('message');
const successMessageDiv = document.getElementById('success-message');

nameInput.addEventListener('input', () => {
    if (nameInput.value.length > 1) {
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
        messageDiv.textContent = '';
        messageDiv.style.display = 'none';
    } else {
        nameInput.classList.remove('valid');
        nameInput.classList.add('invalid');
        messageDiv.textContent = 'Your name must be longer.';
        messageDiv.style.display = 'block';
    }
});

emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value)) {
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
        messageDiv.textContent = '';
        messageDiv.style.display = 'none';
    } else {
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        messageDiv.textContent = 'This is not a valid email address.';
        messageDiv.style.display = 'block';
    }
});

phoneInput.addEventListener('input', () => {
    const phoneRegex = /^\d{10}$/;
    if (phoneRegex.test(phoneInput.value)) {
        phoneInput.classList.remove('invalid');
        phoneInput.classList.add('valid');
        messageDiv.textContent = '';
        messageDiv.style.display = 'none';
    } else {
        phoneInput.classList.remove('valid');
        phoneInput.classList.add('invalid');
        messageDiv.textContent = 'This is not a valid phone number.';
        messageDiv.style.display = 'block';
    }
}); 

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (password.length >= 6 && password.length <= 25 && hasUpperCase && hasSymbol && hasNumber) {
        passwordInput.classList.remove('invalid');
        passwordInput.classList.add('valid');
        messageDiv.textContent = '';
        messageDiv.style.display = 'none';
    } else {
        passwordInput.classList.remove('valid');
        passwordInput.classList.add('invalid');
        messageDiv.textContent = 'Your password must include at least one uppercase letter, one number, and one symbol.';
        messageDiv.style.display = 'block';
    }
});

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    if (
        nameInput.value.length > 1 &&
        passwordInput.value.length >= 6 && passwordInput.value.length <= 25 &&
        /[A-Z]/.test(passwordInput.value) &&
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?0-9]+/.test(passwordInput.value) &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value) &&
        /^\d{10}$/.test(phoneInput.value)
    ) {
        successMessageDiv.textContent = 'Registered successfully!';
        successMessageDiv.style.display = 'block';
        messageDiv.textContent = '';
        messageDiv.style.display = 'none';
    } else {
        successMessageDiv.textContent = '';
        successMessageDiv.style.display = 'none';
        messageDiv.textContent = 'Please fill out the form correctly.';
        messageDiv.style.display = 'block';
    }
});