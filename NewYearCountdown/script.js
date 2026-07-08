const newYear = new Date("January 1, 2027 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const message = document.getElementById("message");

function updateCountdown() {
    const now = new Date().getTime();
    const difference = newYear - now;

    if (difference <= 0) {
        message.innerHTML = "🎉 С Новым годом! 🎉";
        return;
    }

    days.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.innerHTML = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);
}

setInterval(updateCountdown, 1000);
updateCountdown();