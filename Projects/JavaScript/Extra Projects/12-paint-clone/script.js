// Helper Function
const getElements = (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
};

// ==== Selection ====
const activeToolEl = getElements("#active-tool");

const brushColorBtn = getElements("#brush-color");
const brushIcon = getElements("#brush");
const brushSize = getElements("#brush-size");
const brushSlider = getElements("#brush-slider");

const bucketColorBtn = getElements("#bucket-color");

const eraser = getElements("#eraser");
const clearCanvasBtn = getElements("#clear-canvas");

const saveStorageBtn = getElements("#save-storage");
const loadStorageBtn = getElements("#load-storage");
const clearStorageBtn = getElements("#clear-storage");

const downloadBtn = getElements("#download");

const { body } = document;

// ==== Global Variables ====
let currentSize = 10;
let bucketColor = "#FFFFFF";
let currentColor = "#00f";
let isEraser = false;
let isMouseDown = false;
let drawnArray = [];

// Create Canvas Element
const canvas = document.createElement("canvas");
canvas.id = "canvas";
const context = canvas.getContext("2d");

// ==== Formatting Brush ====
function displayBrushSize(size) {
    brushSize.textContent = size < 10 ? `0${size}` : size;
}

// Brush Size
brushSlider.addEventListener("change", () => {
    currentSize = brushSlider.value;

    // Update the brush size display
    displayBrushSize(currentSize);
});

// Brush Color
brushColorBtn.addEventListener("change", () => {
    isEraser = false;
    currentColor = `#${brushColorBtn.value}`;
});

// Background Color
bucketColorBtn.addEventListener("change", () => {
    bucketColor = `#${bucketColorBtn.value}`;

    // Create a new canvas with the updated color
    createCanvas();

    // Get the previous lines on the canvas again
    restoreCanvas();
});

// ==== Eraser ====
eraser.addEventListener("click", () => {
    isEraser = true;
    brushIcon.style.color = "white";
    eraser.style.color = "black";
    activeToolEl.textContent = "Eraser";
    currentColor = bucketColor;
    currentSize = 50;
    brushSlider.value = 50;

    displayBrushSize(currentSize);
});

// Change back to Brush
function switchToBrush() {
    isEraser = false;

    activeToolEl.textContent = "Brush";
    brushIcon.style.color = "black";
    eraser.style.color = "white";

    currentColor = `#${brushColorBtn.value}`;
    currentSize = 10;
    brushSlider.value = 10;

    // Update the brush size text
    displayBrushSize(brushSlider.value);
}

// Create Canvas
function createCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 50;
    context.fillStyle = bucketColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    body.appendChild(canvas);

    // By default the brush shouldn't be eraser
    switchToBrush();
}

// ==== Clear Canvas ====
clearCanvasBtn.addEventListener("click", () => {
    createCanvas();
    drawnArray = [];

    // Update the text on active-tool
    activeToolEl.textContent = "Canvas Cleared";
    setTimeout(switchToBrush, 2000);
});

// ==== Draw what is stored in DrawnArray ====
function restoreCanvas() {
    for (let i = 1; i < drawnArray.length; i++) {
        context.beginPath();
        context.moveTo(drawnArray[i - 1].x, drawnArray[i - 1].y);
        context.lineWidth = drawnArray[i].size;
        context.lineCap = "round";

        if (drawnArray[i].eraser) {
            context.strokeStyle = bucketColor;
        } else {
            context.strokeStyle = drawnArray[i].color;
        }

        context.lineTo(drawnArray[i].x, drawnArray[i].y);
        context.stroke();
    }
}

// ==== Store Lines in DrawnArray ====
function store(x, y, size, color, erase) {
    const line = {
        x,
        y,
        size,
        color,
        erase,
    };
    // console.log(line);
    drawnArray.push(line);
}

// ==== Mouse ====
// Get Mouse Position
function getMousePosition(e) {
    const boundaries = canvas.getBoundingClientRect();
    return {
        x: e.clientX - boundaries.left,
        y: e.clientY - boundaries.top,
    };
}

// Mouse Down Event
canvas.addEventListener("mousedown", (event) => {
    isMouseDown = true;

    const currentPosition = getMousePosition(event);
    context.moveTo(currentPosition.x, currentPosition.y);
    context.beginPath();
    context.lineWidth = currentSize;
    context.lineCap = "round";
    context.strokeStyle = currentColor;
});

// Mouse Move
canvas.addEventListener("mousemove", (event) => {
    if (isMouseDown) {
        const currentPosition = getMousePosition(event);
        context.lineTo(currentPosition.x, currentPosition.y);
        context.stroke();

        // Store the values
        store(
            currentPosition.x,
            currentPosition.y,
            currentSize,
            currentColor,
            isEraser
        );
    } else {
        store(undefined);
    }
});

// Mouse Up
canvas.addEventListener("mouseup", () => {
    isMouseDown = false;
    // console.log("mouse is not clicked");
});

// ==== Local Storage ====

// Save to Local Storage
saveStorageBtn.addEventListener("click", () => {
    // Set item
    localStorage.setItem("lines", JSON.stringify(drawnArray));
    console.log("Saved into local storage");

    // Update the active-tool
    activeToolEl.textContent = "Canvas Saved";
    setTimeout(switchToBrush, 2000);
});

// Load from Local Storage
loadStorageBtn.addEventListener("click", () => {
    if (localStorage.getItem("lines")) {
        drawnArray = JSON.parse(localStorage.lines);

        // Restore the canvas
        restoreCanvas();
        console.log("Restored from local storage");

        // Update the active-tool
        activeToolEl.textContent = "Canvas Loaded";
        setTimeout(switchToBrush, 2000);
    } else {
        activeToolEl.textContent = "No Canvas Is Saved";
        setTimeout(switchToBrush, 2000);
    }
});

// Clear Local Storage
clearStorageBtn.addEventListener("click", () => {
    localStorage.removeItem("lines");

    // Active Tool
    activeToolEl.textContent = "Local Storage Cleared";
    setTimeout(switchToBrush, 2000);
});

// ==== Download Image ====
downloadBtn.addEventListener("click", () => {
    downloadBtn.href = canvas.toDataURL("img/png", 1);
    downloadBtn.download = "drawing.jpeg";

    // Update the active-tool
    activeToolEl.textContent = "Image File Saved";
    setTimeout(switchToBrush, 2000);
});

// ==== Event Listener ====
brushIcon.addEventListener("click", switchToBrush);

// On Load
createCanvas();
