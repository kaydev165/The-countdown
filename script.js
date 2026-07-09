// ===== Получаем элементы =====

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const message = document.getElementById("message");

// ===== Таймер =====

function updateCountdown() {

    const now = new Date();

    // Следующий Новый год
    const target = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

    const diff = target - now;

    if (diff <= 0) {
        message.textContent = "🎉 С НОВЫМ ГОДОМ! 🎉";
        startFireworks();
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    animateNumber(days, d);
    animateNumber(hours, h);
    animateNumber(minutes, m);
    animateNumber(seconds, s);
}

setInterval(updateCountdown, 1000);
updateCountdown();


// ===== Плавное изменение цифр =====

function animateNumber(element, value) {

    if (element.textContent != value) {

        element.style.transform = "scale(1.2)";
        element.style.color = "#ffe600";

        setTimeout(() => {

            element.textContent = String(value).padStart(2, "0");

            element.style.transform = "scale(1)";
            element.style.color = "white";

        }, 120);

    }

}


// ===== Санта появляется случайно =====

const santa = document.getElementById("santa");

function flySanta() {

    santa.style.animation = "none";

    santa.offsetHeight;

    santa.style.top = (60 + Math.random() * 120) + "px";

    santa.style.animation = "fly 12s linear";

}

flySanta();

setInterval(flySanta, 25000);


// ===== Простой фейерверк =====

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startFireworks() {

    setInterval(() => {

        createFirework();

    }, 600);

}

function createFirework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height / 2);

    for (let i = 0; i < 60; i++) {

        particles.push({

            x,
            y,

            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,

            life: 100,

            color: `hsl(${Math.random()*360},100%,60%)`

        });

    }

}

function draw() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        p.x += p.dx;
        p.y += p.dy;

        p.life--;

        ctx.beginPath();

        ctx.arc(p.x,p.y,3,0,Math.PI*2);

        ctx.fillStyle=p.color;

        ctx.fill();

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(draw);

}

draw();

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

});
