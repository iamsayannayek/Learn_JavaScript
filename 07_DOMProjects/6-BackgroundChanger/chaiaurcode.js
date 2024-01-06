const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const bodyChange = document.querySelector('body');

let intervalId;

start.addEventListener('click', (e) => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            bodyChange.style.backgroundColor = randomColor();
        }, 1000);
    }
});

stop.addEventListener('click', (e) => {
    clearInterval(intervalId);
    intervalId = null;
});
