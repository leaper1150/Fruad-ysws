const scamMessages = [
    "Application accepted. We didn't even read it.",
    "Your fake hours have been logged successfully. Great job doing nothing!",
    "Are you really trying to apply? Just lie and say you already did.",
    "Error 404: Ethics not found.",
    "Your MacBook is in the mail. (It's not).",
    "We verified your vibe. It's immaculate. You're in.",
    "The ex-con says 'snitches get stitches'. Have you tried lying?",
    "Sorry, we are currently out of fake grants. Try scamming us tomorrow."
];

function scamAlert(programName) {
    const randomMessage = scamMessages[Math.floor(Math.random() * scamMessages.length)];
    alert(`[${programName}] ${randomMessage}`);
}

// The dodging button for "Talk to a Fraud"
const dodgeBtn = document.getElementById('dodge-btn');
if (dodgeBtn) {
    dodgeBtn.addEventListener('mouseover', function() {
        // Randomly move the button around when you try to click it
        const x = Math.random() * 100 - 50; // -50px to 50px
        const y = Math.random() * 100 - 50;
        this.style.transform = `translate(${x}px, ${y}px)`;
    });

    dodgeBtn.addEventListener('click', function() {
        alert("Wow, you actually caught it. The mentor is still ghosting you though.");
        this.style.transform = 'translate(0px, 0px)';
    });
}
