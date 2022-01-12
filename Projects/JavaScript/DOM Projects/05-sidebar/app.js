// Select the close button and toggle button
const closeBtn = document.querySelector('.close-btn')
const toggleBtn = document.querySelector('.sidebar-toggle');

// Select the sidebar
const sidebar = document.querySelector('.sidebar');

// Configure the toggle
toggleBtn.addEventListener('click', function() {
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar')
    } else {
        sidebar.classList.add('show-sidebar');
    }
})

// Configure the closeBtn
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
})