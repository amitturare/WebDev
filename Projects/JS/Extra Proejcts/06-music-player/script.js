// Helper Function
function getElements(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
}

// Songs
const songs = [
    {
        name: "see-you-again",
        displayName: "See You Again",
        artist: "Wiz Khalifa",
        link: "https://www.youtube.com/watch?v=RgKAFK5djSk",
    },
    {
        name: "uptown-funk",
        displayName: "Uptown Funk",
        artist: "Mark Ronson",
        link: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
    },
    {
        name: "blank-space",
        displayName: "Blank Space",
        artist: "Taylor Swift",
        link: "https://www.youtube.com/watch?v=e-ORhEE9VVg",
    },
    {
        name: "sugar",
        displayName: "Sugar",
        artist: "Maroon 5",
        link: "https://www.youtube.com/watch?v=09R8_2nJtjg",
    },
    {
        name: "sky-full-of-stars",
        displayName: "Sky Full Of Stars",
        artist: "ColdPlay",
        link: "https://www.youtube.com/watch?v=VPRjCeoBqrI",
    },
];

// ======== Selections ========
const music = getElements("audio");

const prevBtn = getElements("#prev");
const playBtn = getElements("#play");
const nextBtn = getElements("#next");

const image = getElements("img");
const link = getElements("#link");
const title = getElements("#title");
const artist = getElements("#artist");

const progressContainer = getElements("#progress-container");
const progress = getElements("#progress");
const currentTimeElement = getElements("#current-time");
const durationElement = getElements("#duration");

const volumeIcon = getElements("#volume-icon");
const volumeRange = getElements(".volume-range");
const volumeBar = getElements(".volume-bar");

// ==== Play/Pause Function ====
function playSong() {
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
    music.play();
}

function togglePlay() {
    if (music.paused) {
        playSong();
    } else {
        playBtn.classList.replace("fa-pause", "fa-play");
        playBtn.setAttribute("title", "Play");
        music.pause();
    }
}

// ==== prevSong & nextSong ====
// Update DOM and play the song
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
    link.href = song.link;
    playSong();
}

let index = 0;

function prevSong() {
    index--;
    if (index < 0) {
        index = songs.length - 1;
    }
    loadSong(songs[index]);
}

function nextSong() {
    index++;
    if (index > songs.length - 1) {
        index = 0;
    }
    loadSong(songs[index]);
}

// ==== Update Progress Bar and Time ====
function updateProgressBar(e) {
    // const { duration, currentTime } = e.srcElement;

    // Update progress bar width
    const progressPercent = (music.currentTime / music.duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Update duration and currentTime
    durationElement.textContent = convertToMins(music.duration);
    currentTimeElement.textContent = convertToMins(music.currentTime);
}
// Helper function for converting secs to mins
function convertToMins(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // Delay switching duration Element to avoid NaN
    if (seconds) {
        // if seconds is available then only return the statement
        return `${minutes}:${seconds}`;
    }
}

// ==== setProgressBar ====
function setProgressBar(e) {
    // NOTES
    // clientWidth is the total width
    // offsetX is point where the user clicked

    const totalWidth = this.clientWidth;
    const clickedPoint = e.offsetX;

    const clickedSecs = (clickedPoint / totalWidth) * music.duration;
    music.currentTime = clickedSecs;
}

// ==== Volume Control ====
let lastVolume = 1;

function changeVolume(e) {
    // NOTES
    // clientWidth is the total width
    // offsetX is point where the user clicked

    let volume = e.offsetX / this.clientWidth;
    // Rounding volume up or down
    if (volume > 0.9) {
        volume = 1;
    } else if (volume < 0.1) {
        volume = 0;
    }

    volumeBar.style.width = `${volume * 100}%`;
    music.volume = volume;

    // Change the volume icon
    volumeIcon.className = "";
    if (volume > 0.7) {
        volumeIcon.classList.add("fas", "fa-volume-up");
    } else if (volume < 0.7 && volume > 0) {
        volumeIcon.classList.add("fas", "fa-volume-up");
    } else if (volume === 0) {
        volumeIcon.classList.add("fas", "fa-volume-mute");
    }

    // Whatever volume is clicked at the end should be stored into lastVolume
    lastVolume = volume;
}

function toggleVolume() {
    volumeIcon.className = "";

    if (music.volume) {
        lastVolume = music.volume;
        music.volume = 0;
        volumeBar.style.width = 0;

        volumeIcon.classList.add("fas", "fa-volume-mute");
        volumeIcon.setAttribute("title", "Unmute");
    } else {
        music.volume = lastVolume;
        volumeBar.style.width = `${lastVolume * 100}%`;

        volumeIcon.classList.add("fas", "fa-volume-up");
        volumeIcon.setAttribute("title", "Mute");
    }
}

// ======== Event Listeners ========
playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);

// Play next song when ended
music.addEventListener("ended", nextSong);

// Volume
volumeRange.addEventListener("click", changeVolume);
volumeIcon.addEventListener("click", toggleVolume);
