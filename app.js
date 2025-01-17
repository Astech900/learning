// added button
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const progressBar = document.getElementById('progress-bar');

// Play/Pause Button Functionality
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playBtn.textContent = 'Play';
    }
});

// Update Progress Bar as Audio Plays
audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
});

// Seek Functionality
progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Reset Button Text When Audio Ends
audio.addEventListener('ended', () => {
    playBtn.textContent = 'Play';
    progressBar.value = 0;
});
