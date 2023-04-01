const stations = document.querySelectorAll('.stations');
const buttons = document.querySelectorAll('.button-wrapper button');
const timeLine = document.querySelector('.time-line');
let timeLineWidth = 0;  

console.log(timeLine);
let score = 0;

const [privously, next] = buttons;

privously.addEventListener('click', (event) => {
    changeTimeLine(event);
});

next.addEventListener('click', (event) => {
    changeTimeLine(event);
});

function changeTimeLine(event) {
    if (event.target.classList[0] === 'previuosly-btn') {
        score--;
        stations[score].classList.add('stayed-station');
        stations[score + 1].classList.remove('active');
        timeLineWidth > 0 ? timeLineWidth -= 25 : timeLineWidth = 0;  
    } else {
        score++;
        stations[score].classList.add('active');
        timeLineWidth < 100 ? timeLineWidth += 25 : timeLineWidth = 100;  
    }

    timeLine.style.width = `${timeLineWidth}%`;
    
    if (stations[stations.length - 1].classList[1] === 'active') {
        next.classList.add('disabled-btn');
        next.disabled = true;
    } else {
        next.classList.remove('disabled-btn');
        next.disabled = false;
    }

    if (stations[0].classList[1] === 'active' && score === 0) {
        privously.classList.add('disabled-btn');
        privously.disabled = true;
    } else {
        privously.classList.remove('disabled-btn');
        privously.disabled = false;
    }
}