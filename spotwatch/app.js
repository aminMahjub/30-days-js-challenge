const second = document.querySelector('.second');
const millisecond = document.querySelector('.millisecond');
const appBtns = document.querySelectorAll('.button-wrapper button');

let [ start, stop, reset ] = appBtns;
let timerInterval;
let milliSecondTime = 0,
secondTimer = 0;

function startTimer() {
    start.disabled = true;    
    if (milliSecondTime < 60) {
        milliSecondTime++;
    } else {
        milliSecondTime = 0;
        secondTimer++;
    }

    updateUi();
}

function updateUi() {
    second.textContent = secondTimer;
    millisecond.textContent = milliSecondTime;
}

start.addEventListener('click', () => {
    timerInterval = window.setInterval(startTimer, 1);
});

stop.addEventListener('click', () => {
    start.disabled = false;
    window.clearInterval(timerInterval);
});

reset.addEventListener('click', () => {
    start.disabled = false;
    milliSecondTime = 0,
     secondTimer = 0;
     window.clearInterval(timerInterval);
    updateUi();
})