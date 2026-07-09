// ===============================
// Получаем элементы
// ===============================

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const message = document.getElementById("message");

// ===============================
// Таймер
// ===============================

function updateCountdown() {

    const now = new Date();

    // Следующий Новый год
    const target = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

    const difference = target - now;

    if (difference <= 0) {

        message.innerHTML = "🎉 С НОВЫМ ГОДОМ! 🎉";

        return;
    }

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const m = Math.floor((difference / (1000 * 60)) % 60);
    const s = Math.floor((difference / 1000) % 60);

    days.textContent = d;
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);

// ===============================
// Санта
// ===============================

const santa = document.getElementById("santa");

function startSanta() {

    santa.style.animation = "none";

    santa.offsetHeight;

    santa.style.top = (50 + Math.random() * 150) + "px";

    santa.style.animation = "fly 12s linear";

}

startSanta();

setInterval(startSanta, 20000);

// ===============================
// Анимация цифр
// ===============================

const numbers = document.querySelectorAll(".number");

setInterval(() => {

    numbers.forEach(number => {

        number.style.transform = "scale(1.08)";

        setTimeout(() => {

            number.style.transform = "scale(1)";

        }, 150);

    });

},1000);
