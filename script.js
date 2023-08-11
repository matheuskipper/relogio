function realTimeClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clock = document.getElementById('clock');
    clock.textContent = `${hours}:${minutes}:${seconds}`
}

setInterval(realTimeClock, 1000);