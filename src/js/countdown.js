function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const launchDate = new Date("June 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft >= 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `${days}jours ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownElement.innerHTML = "C'est le grand jour !";
        updateMatchs();
    }
}

// Initialisation du compteur
updateCountdown();

// Mise à jour du compteur toutes les secondes
setInterval(updateCountdown, 1000);