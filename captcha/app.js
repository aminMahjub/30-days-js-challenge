const captchaOutput = document.querySelector('.captcha-code');
const captchaInput = document.querySelector('#capthaCodeReciver');
const generateBtn = document.querySelector('.captcha-generator');
let captchaCode = '';

function generateCapthca() {
    const characters = 'ASDFGHJKLZXCVBNMQWERTYUIOPqwertyuiopasdfghjklzxcvbnm1234567890'.split('');
    captchaCode = '';

    while(true) {
        const randomNumber = Math.floor(Math.random() * characters.length);

        if (captchaCode.length < 5) {
            captchaCode += characters[randomNumber];
        } else {
            break;
        }
    }

    captchaOutput.textContent = captchaCode; 
}

function checkCaptchaCode() {
    if (captchaInput.value === captchaCode) {
        captchaInput.classList.remove('error-message');
        captchaInput.classList.add('success-message');
    } else {
        captchaInput.classList.remove('success-message');
        captchaInput.classList.add('error-message');
    }

    if (captchaInput.value === '') {
        captchaInput.classList.remove('error-message');
        captchaInput.classList.remove('success-message');
    }
}


generateBtn.addEventListener('click', generateCapthca);
window.addEventListener('load', generateCapthca);
captchaInput.addEventListener('input', checkCaptchaCode);