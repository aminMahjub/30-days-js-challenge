const stations = document.querySelectorAll('.station');
const buttons = document.querySelectorAll('.button-wrapper button');
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
        stations[score + 1].classList.remove('stayed-station');

        next.style.cursor = 'pointer';
        next.disabled = false;
    } else {
        score++;
        stations[score].classList.add('stayed-station');

        privously.style.cursor = 'pointer';
        privously.disabled = false;
    }

    if (score === 4 || score === 0) {
        event.target.style.cursor = 'not-allowed';
        event.target.disabled = true;
    }
}