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
const birthdayInput = document.getElementById("birthday");

document.getElementById("saveBirthday").onclick = () => {
    localStorage.setItem("birthday", birthdayInput.value);
    startBirthdayCountdown();
};
document.getElementById("newYearBtn").onclick = () => {
    document.getElementById("birthdayForm").style.display = "none";
    document.getElementById("title").textContent = "До Нового года осталось";
    startNewYearCountdown();
};

document.getElementById("birthdayBtn").onclick = () => {
    document.getElementById("birthdayForm").style.display = "block";
    document.getElementById("title").textContent = "До дня рождения осталось";

    if(localStorage.getItem("birthday")){
        birthdayInput.value = localStorage.getItem("birthday");
        startBirthdayCountdown();
    }
};
function startBirthdayCountdown(){

    const birthday = localStorage.getItem("birthday");

    if(!birthday) return;

    setInterval(() => {

        const now = new Date();

        let target = new Date(birthday);

        target.setFullYear(now.getFullYear());

        if(target < now){
            target.setFullYear(now.getFullYear()+1);
        }

        const diff = target - now;

        const days = Math.floor(diff / (1000*60*60*24));
        const hours = Math.floor(diff / (1000*60*60)%24);
        const minutes = Math.floor(diff / (1000*60)%60);
        const seconds = Math.floor(diff/1000%60);

        document.getElementById("countdown").innerHTML =
        
        <h1>${days}</h1>
        <p>дней</p>
        <h2>${hours}:${minutes}:${seconds}</h2>
        ;

    },1000);

}
