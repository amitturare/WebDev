const addBtns = document.querySelectorAll(".add-btn:not(.solid)");
const saveItemBtns = document.querySelectorAll(".solid"); // Node-List of all the divs add-btn having span Save Item
const addItemContainers = document.querySelectorAll(".add-container"); // Node-List of all the add-container div
const addItems = document.querySelectorAll(".add-item"); // Node-List of all the add-item div
// Item Lists
const listColumns = document.querySelectorAll(".drag-item-list");
const backlogList = document.getElementById("backlog-list");
const progressList = document.getElementById("progress-list");
const completeList = document.getElementById("complete-list");
const onHoldList = document.getElementById("on-hold-list");

// Items
let updatedOnLoad = false;

// Initialize Arrays
let backlogListArray = [];
let progressListArray = [];
let completeListArray = [];
let onHoldListArray = [];
let listArrays = [];

// Drag Functionality
let draggedItem;
let currentColumn;
let dragging = false;

// Set localStorage Arrays
function updateSavedColumns() {
    listArrays = [
        backlogListArray,
        progressListArray,
        completeListArray,
        onHoldListArray,
    ];
    const arrayNames = ["backlog", "progress", "complete", "onHold"];

    // Loop over listArrays
    arrayNames.forEach((arr, i) => {
        localStorage.setItem(`${arr}Items`, JSON.stringify(listArrays[i]));
    });
}

// Get Arrays from localStorage if available, set default values if not
function getSavedColumns() {
    if (localStorage.getItem("backlogItems")) {
        backlogListArray = JSON.parse(localStorage.backlogItems);
        progressListArray = JSON.parse(localStorage.progressItems);
        completeListArray = JSON.parse(localStorage.completeItems);
        onHoldListArray = JSON.parse(localStorage.onHoldItems);
    } else {
        backlogListArray = ["Release the course", "Sit back and relax"];
        progressListArray = ["Work on projects", "Listen to music"];
        completeListArray = ["Being cool", "Getting stuff done"];
        onHoldListArray = ["Being uncool"];
    }
}

// Create DOM Elements for each list item
function createItemEl(columnEl, column, item, index) {
    // console.log("columnEl:", columnEl);
    // console.log("column:", column);
    // console.log("item:", item);
    // console.log("index:", index);
    // console.log("===================");

    // Create drag-item
    const listEl = document.createElement("li");
    listEl.classList.add("drag-item");
    listEl.textContent = item;
    // Make the drag-item draggable
    listEl.draggable = true;
    // Set Attribute ondragstart
    listEl.setAttribute("ondragstart", "drag(event)");
    // Set the element's content editable
    listEl.contentEditable = true;

    listEl.id = index;
    listEl.setAttribute("onfocusout", `updateItem(${index}, ${column})`);

    // Append Item
    columnEl.append(listEl);
}

// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
function updateDOM() {
    // Check localStorage once
    if (!updatedOnLoad) {
        getSavedColumns();
    }

    // Backlog Column
    backlogList.textContent = ""; // Removes everything from the Backlog list

    backlogListArray.forEach((item, i) => {
        createItemEl(backlogList, 0, item, i);
    });
    backlogListArray = filterArray(backlogListArray);

    // Progress Column
    progressList.textContent = ""; // Removes everything from the progress list

    progressListArray.forEach((item, i) => {
        createItemEl(progressList, 1, item, i);
    });
    progressListArray = filterArray(progressListArray);

    // Complete Column
    completeList.textContent = ""; // Removes everything from the complete list

    completeListArray.forEach((item, i) => {
        createItemEl(completeList, 2, item, i);
    });
    completeListArray = filterArray(completeListArray);

    // On Hold Column
    onHoldList.textContent = ""; // Removes everything from the onHold list

    onHoldListArray.forEach((item, i) => {
        createItemEl(onHoldList, 3, item, i);
    });
    onHoldListArray = filterArray(onHoldListArray);

    // Run getSavedColumns only once, Update Local Storage
    updatedOnLoad = true;
    updateSavedColumns();
}

// Helper function to filter arrays to remove empty items
function filterArray(arr) {
    const filteredArray = arr.filter((item) => item !== null);
    return filteredArray;
}

// Update Item or else delete if necessary
function updateItem(id, column) {
    const selectedArray = listArrays[column];
    const selectedColumnEl = listColumns[column].children;

    if (!dragging) {
        if (!selectedColumnEl[id].textContent) {
            delete selectedArray[id];
        } else {
            selectedArray[id] = selectedColumnEl[id].textContent;
        }
        updateDOM();
    }
}

// Button Functions
// Add the text as a drag-item to drag-item-list
function addToColumn(column) {
    let text = addItems[column].textContent;
    const selectedArray = listArrays[column];

    if (!text) {
        return;
    } else {
        selectedArray.push(text);
    }
    updateDOM();

    // To reset the text
    addItems[column].textContent = "";
}
// To show Add Item Input Box
function showInputBox(column) {
    addBtns[column].style.visibility = "hidden";
    saveItemBtns[column].style.display = "flex";
    addItemContainers[column].style.display = "flex";
}
// To hide Input Box
function hideInputBox(column) {
    addBtns[column].style.visibility = "visible";
    saveItemBtns[column].style.display = "none";
    addItemContainers[column].style.display = "none";

    addToColumn(column);
}

// Allow arrays to reflect drag and drop items
function rebuildArrays() {
    // console.log(backlogList.children);
    // console.log(progressList.children);

    // Empty all the arrays, so that you can push the elements later
    backlogListArray = [];
    progressListArray = [];
    completeListArray = [];
    onHoldListArray = [];

    const listArrays = [
        backlogListArray,
        progressListArray,
        completeListArray,
        onHoldListArray,
    ];
    const lists = [backlogList, progressList, completeList, onHoldList];

    // Empty and Push the elements
    listArrays.forEach((arr, i) => {
        // arr = [];
        for (let j = 0; j < lists[i].children.length; j++) {
            arr.push(lists[i].children[j].textContent);
        }
    });

    updateDOM();
}

// When item is dragged
function drag(e) {
    // console.log(e.target);
    draggedItem = e.target;
    dragging = true;
}
// Allow the drop to happen
function allowDrop(e) {
    // Prevent default to allow drop
    e.preventDefault();
}
// When the item enters the column area
function dragEnter(column) {
    currentColumn = column;
}
// When item is dropped in a column
function drop(e) {
    e.preventDefault();

    // Add the drag-item to the drag-item-list
    const parent = listColumns[currentColumn];
    parent.appendChild(draggedItem);
    // Dragging is done
    dragging = false;
    rebuildArrays();
}

updateDOM();
