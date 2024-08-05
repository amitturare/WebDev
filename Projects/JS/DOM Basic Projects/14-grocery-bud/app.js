// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form'); // form
const alert = document.querySelector('.alert'); // alert p
const grocery = document.querySelector('#grocery'); // input
const submitBtn = document.querySelector('.submit-btn'); // submit button
const container = document.querySelector('.grocery-container'); // contains the grocery-list
const list = document.querySelector('.grocery-list'); // contains all the items
const clearBtn = document.querySelector('.clear-btn'); // clear button

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
// submit-form
form.addEventListener('submit', addItem);

// clearBtn
clearBtn.addEventListener('click', clearItems);

// Load items
window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********
// Setup a function for alerts
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // To remove alert after some interval
    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 2000);
}

// Set back to default
function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.innerHTML = 'submit';
}

// Setup a callBack function for form EVENT
function addItem(e) {
    // PreventDefault
    e.preventDefault();
    // Store the input value to some const
    const value = grocery.value;

    const id = new Date().getTime().toString(); // In milliseconds

    // CONDITIONS
    // if value is not empty and editFlag is false - add element
    if (value && editFlag === false) {
        // Create element
        const element = document.createElement('article');
        // Add ID
        let attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        // Add class to it
        element.classList.add('grocery-item');
        // Change its HTML structure
        element.innerHTML = `<p class="title">${value}</p>
                    <div class="btn-container">
                    <button class="edit-btn" type="button"><i class="fas fa-edit"></i></button>
                    <button class="delete-btn" type="button"><i class="fas fa-trash"></i></button>
                    </div>`;

        // Select both the buttons and configure them
        const deleteBtn = element.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteItem);
        const editBtn = element.querySelector('.edit-btn');
        editBtn.addEventListener('click', editItem);

        // Append child to the list
        list.appendChild(element);
        // Add show-container class to grocery-container DIV
        container.classList.add('show-container');
        // Display alert
        displayAlert('Item successfully added', 'success');
        // Add to local storage
        addToLocalStorage(id, value);
        // Set back to default
        setBackToDefault();
    }
    // if value is not empty and editFlag is true - edit element
    else if (value && editFlag === true) {
        editElement.innerHTML = value;
        // Display Alert
        displayAlert('value changed', 'success');
        // Edit Local Storage
        editLocalStorage(editID, value);
        // Set back to default
        setBackToDefault();
    }
    // if value is empty
    else {
        displayAlert('please enter some value', 'danger');
    }
}

// Setup a callBack function for clearBtn EVENT
function clearItems() {
    // Get all the items which are added earlier
    const items = document.querySelectorAll('.grocery-item');
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    // Also remove the clearBtn after clearing all the items
    container.classList.remove('show-container');
    // Display Alert
    displayAlert('Items cleared', 'danger');
    // Set back to default
    setBackToDefault();
    // Local Storage
    localStorage.removeItem('list');
}

// Setup a callBack function for deleteBtn EVENT
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // Remove the element
    list.removeChild(element);
    // Remove the whole container if all items are deleted using deleteBtn only
    if (list.children.length === 0) {
        container.classList.remove('show-container');
    }
    // Display Alert
    displayAlert('Item successfully deleted', 'danger');
    // Set back to default
    setBackToDefault();
    // Remove from Local Storage
    const id = element.dataset.id;
    removeFromLocalStorage(id);
}

// Setup a callBack function for editBtn EVENT
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // Set editElement
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // Set form input value to the editElement
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    // Edit submit button text to edit
    submitBtn.textContent = 'edit';
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    console.log('Added to local storage');

    const grocery = { id: id, value: value };
    // console.log(grocery);

    // Check if there are items in the LocalStorage or not
    let items = localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list'))
        : [];
    // console.log(items);
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    console.log('Removed from local storage');
    // Since we are removing, we don't have to check if items exist in list or not
    let items = getLocalStorage();
    // Filter out the items which are deleted
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });
    // console.log(items);
    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
    console.log('Edited in local storage');

    // Get the items
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list'))
        : [];
}

// ****** SETUP ITEMS **********
function setupItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        });
        container.classList.add('show-container')
    }
}
function createListItem(id, value) {
    // Create element
    const element = document.createElement('article');
    // Add ID
    let attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    // Add class to it
    element.classList.add('grocery-item');
    // Change its HTML structure
    element.innerHTML = `<p class="title">${value}</p>
                    <div class="btn-container">
                    <button class="edit-btn" type="button"><i class="fas fa-edit"></i></button>
                    <button class="delete-btn" type="button"><i class="fas fa-trash"></i></button>
                    </div>`;

    // Select both the buttons and configure them
    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItem);
    const editBtn = element.querySelector('.edit-btn');
    editBtn.addEventListener('click', editItem);

    // Append child to the list
    list.appendChild(element);
}
