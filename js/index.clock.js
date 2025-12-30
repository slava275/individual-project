const clockTimeEl = document.getElementById("expertClock");

function updateClock(){
    const now = new Date();
    if (clockTimeEl) {
        clockTimeEl.textContent = now.toLocaleTimeString('uk-UA');
    }
}

setInterval(updateClock, 1000);
updateClock();