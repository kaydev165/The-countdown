// Получаем элементы таймера
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const message = document.getElementById("message");

// Функция обновления таймера
function updateCountdown() {

    const now = new Date();

    // Следующий Новый год
    const nextYear = now.getFullYear() + 1;
    const targetDate = new Date(nextYear, 0, 1, 0, 0, 0);

    const difference = targetDate - now;

    // Если наступил Новый год
    if (difference <= 0) {
        message.textContent = "🎉 С Новым годом! 🎉";
        return;
    }

    // Вычисляем время
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const m = Math.floor((difference / (1000 * 60)) % 60);
    const s = Math.floor((difference / 1000) % 60);

    // Выводим на экран
    days.textContent = d;
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");
}

// Запускаем сразу
updateCountdown();

// Обновляем каждую секунду
setInterval(updateCountdown, 1000);
