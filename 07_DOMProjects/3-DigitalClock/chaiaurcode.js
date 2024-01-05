const clock = document.getElementById('clock');
const dateToday = document.getElementById('dateToday');

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    dateToday.innerHTML = date.toDateString();
}, 1000);