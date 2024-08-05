// Helper Function
const getElements = (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
};

// ======== Selection ========
const videoElement = getElements("#video");
const button = getElements("#btn");

// FUNCTION to
// Ask user to select the media steam and then push it to the videoElement to play
async function selectMediaStream() {
    try {
        const mediaSteam = await navigator.mediaDevices.getDisplayMedia(); // To select the media stream
        videoElement.srcObject = mediaSteam;
        videoElement.onloadedmetadata = () => {
            videoElement.play(); // When video is loaded, video will be played :D
        };
    } catch (err) {
        console.log(`Fix the error: ${err}`);
    }
}

// Configure button
button.addEventListener("click", async () => {
    /// Disable the button
    button.disabled = true;

    // Enable pip by default
    await videoElement.requestPictureInPicture();

    // Reset button
    button.disabled = false;
});

// Invoking
selectMediaStream();
