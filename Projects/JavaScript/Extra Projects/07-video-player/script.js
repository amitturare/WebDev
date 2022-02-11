// Helper Function
const getElements = (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check the element ${selection}`);
    }
};

// ======== Selections ========
const player = getElements(".player");

const video = getElements("video");

const progressRange = getElements(".progress-range"); // Total
const progressBar = getElements(".progress-bar"); // Actual progress

const playBtn = getElements("#play-btn");
const fullscreenBtn = getElements(".fullscreen");

const volumeIcon = getElements("#volume-icon");
const volumeRange = getElements(".volume-range"); // Total
const volumeBar = getElements(".volume-bar"); // User controlled

const currentTime = getElements(".time-elapsed");
const duration = getElements(".time-duration");

const speed = getElements(".player-speed");

// ======== Play & Pause ======== //
function showPlayIcon() {
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
}

function togglePlay() {
    if (video.paused) {
        playBtn.classList.replace("fa-play", "fa-pause");
        playBtn.setAttribute("title", "Pause");
        video.play();
    } else {
        showPlayIcon();
        video.pause();
    }
}

// When video ends, show play button icon
video.addEventListener("ended", showPlayIcon);

// ======== Progress Bar ======== //
// Update progress bar as video plays
function updateProgress() {
    progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;

    // Update the currentTime and duration stamps
    currentTime.textContent = `${convertIntoMins(video.currentTime)} / `;
    duration.textContent = `${convertIntoMins(video.duration)}`;
}

// Click to seek within the video
function setProgress(e) {
    // NOTES
    // clientWidth is the total width
    // offsetX is point where the user clicked

    const totalWidth = this.clientWidth;
    const clickedPoint = e.offsetX;

    const newTime = (clickedPoint / totalWidth) * video.duration;
    video.currentTime = newTime;
}

// Helper function to convert secs into mins
function convertIntoMins(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

// ======== Volume Controls ======== //

let lastVolume = 1;

// Volume Bar
function changeVolume(e) {
    // NOTES
    // clientWidth is the total width
    // offsetX is point where the user clicked

    let volume = e.offsetX / this.clientWidth;
    // Rounding volume up or down
    if (volume < 0.1) {
        volume = 0;
    }
    if (volume > 0.9) {
        volume = 1;
    }

    volumeBar.style.width = `${volume * 100}%`;
    video.volume = volume;

    // Change the volume icon
    volumeIcon.className = "";
    if (volume > 0.7) {
        volumeIcon.classList.add("fas", "fa-volume-up");
    } else if (volume < 0.7 && volume > 0) {
        volumeIcon.classList.add("fas", "fa-volume-down");
    } else if (volume === 0) {
        volumeIcon.classList.add("fas", "fa-volume-mute");
    }

    // Whatever volume is clicked at the end should be stored into lastVolume
    lastVolume = volume;
}

// Toggle Volume
function toggleVolume() {
    volumeIcon.className = "";

    if (video.volume) {
        lastVolume = video.volume;
        video.volume = 0;
        volumeBar.style.width = 0;

        volumeIcon.classList.add("fas", "fa-volume-mute");
        volumeIcon.setAttribute("title", "Unmute");
    } else {
        video.volume = lastVolume;
        volumeBar.style.width = `${lastVolume * 100}%`;

        volumeIcon.classList.add("fas", "fa-volume-up");
        volumeIcon.setAttribute("title", "Mute");
    }
}

// ======== Change Playback Speed ======== //
function changeSpeed() {
    video.playbackRate = speed.value;
}

// ======== Fullscreen ======== //
/* View in fullscreen */
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    video.classList.add("video-fullscreen");
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    video.classList.remove("video-fullscreen");
}

let fullscreen = false;

// Toggle FullScreen
function toggleFullscreen() {
    !fullscreen ? openFullscreen(player) : closeFullscreen();
    fullscreen = !fullscreen;
}

// ======== EVENT LISTENERS ======== //
playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

video.addEventListener("timeupdate", updateProgress);
video.addEventListener("canplay", updateProgress);

progressRange.addEventListener("click", setProgress);

volumeRange.addEventListener("click", changeVolume);
volumeIcon.addEventListener("click", toggleVolume);

speed.addEventListener("change", changeSpeed);

fullscreenBtn.addEventListener("click", toggleFullscreen);
