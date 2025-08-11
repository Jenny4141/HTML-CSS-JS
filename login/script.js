const logoBtn = document.querySelector('.logo-btn');
const login = document.querySelector('.login');
const registerForm = document.querySelector('.register-form');
const register = document.getElementById('register');
const registerLogin = document.getElementById('register-login');

logoBtn.addEventListener('click', () => {
    login.classList.toggle('active')
    registerForm.classList.remove('active');
})

register.addEventListener('click', () => {
    login.classList.remove('active');
    registerForm.classList.add('active');
})

registerLogin.addEventListener('click', () => {
    registerForm.classList.remove('active');
    login.classList.add('active');
})
