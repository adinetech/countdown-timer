let countdown;
const eventDisplay = document.getElementById('event-display');
const hoursDisplay = document.getElementById('hours-display');
const minutesDisplay = document.getElementById('minutes-display');
const secondsDisplay = document.getElementById('seconds-display');
const startButton = document.getElementById('start');

startButton.addEventListener('click', () => {
    if (countdown) {
        clearInterval(countdown);
    }

    const eventName = document.getElementById('event-name').value;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    if (hours === 0 && minutes === 0 && seconds === 0) {
        alert('Please enter a valid time!');
        return;
    }

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const endTime = Date.now() + totalSeconds * 1000;

    eventDisplay.textContent = eventName || 'Countdown';

    countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            alert('Countdown finished!');
            return;
        }

        const hoursLeft = Math.floor(secondsLeft / 3600);
        const minutesLeft = Math.floor((secondsLeft % 3600) / 60);
        const secondsRemaining = secondsLeft % 60;

        hoursDisplay.textContent = String(hoursLeft).padStart(2, '0');
        minutesDisplay.textContent = String(minutesLeft).padStart(2, '0');
        secondsDisplay.textContent = String(secondsRemaining).padStart(2, '0');
    }, 1000);
});