const hour = document.querySelector('.hour-time');
const minute = document.querySelector('.min-time');
const second = document.querySelector('.sec-time');
const year = document.querySelector('.year-date');
const month = document.querySelector('.month-date');
const day = document.querySelector('.day-date');

function updateClock() {
    const date = new Date();
    let dateSeconds = date.getSeconds();
    let dateMinutes = date.getMinutes();
    let dateHour = date.getHours();

    second.textContent = dateSeconds++;

    if (dateSeconds > 60) {
        minute.textContent = ++dateMinutes;
        dateSeconds = 0;
        second.textContent = dateSeconds;

        if (dateMinutes >= 60) {
            hour.textContent = ++dateHour;
            dateMinutes = 0;
            minute.textContent = dateMinutes;

            if (dateHour >= 24) {
                dateHour = 0;
                hour.textContent = dateHour;
                window.location.reload();
            }
        }
    }

    updateUi(date)
}

function updateUi(date) {
    hour.textContent = date.getHours();
    minute.textContent = date.getMinutes();
    year.textContent = date.getFullYear();
    month.textContent = date.getMonth() + 1;
    day.textContent = date.getDate();
}

window.setInterval(updateClock, 1000);