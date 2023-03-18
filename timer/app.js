const dateInput =  document.querySelector('input[type="date"]');
const dateTimers = document.querySelector('output');

dateInput.addEventListener('input', () => {
    const scale = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const date = new Date();
    const today = date.toISOString().substring(0, 10); 
    const inputDateArr = dateInput.value.split('-');
    const todayArr = today.split('-');
    let diff = 0; 

    if (+todayArr[0] !== +inputDateArr[0]) {
        diff = (+todayArr[0] - +inputDateArr[0]) * 365;
    }

    if (+todayArr[1] !== +inputDateArr[1]) {
        const nowMonth = scale[+todayArr[1] - 1];

        let betweenMonth = scale.slice(+todayArr[1], +inputDateArr[1] - 1);
        betweenMonth = betweenMonth.reduce((acc, cur) => acc + cur, 0);
        diff += betweenMonth +  +inputDateArr[2] + (nowMonth - +todayArr[2]);
    } else {
        diff += +inputDateArr[2] - +todayArr[2];
    }

    dateTimers.textContent = diff + ' days remaining'; 
})

