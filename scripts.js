// Sticky Header with Animated Name and Contact
window.onscroll = function () {
    var name = document.getElementById('name');
    var contact = document.getElementById('contact');
    if (window.scrollY > 50) {
        name.style.transform = 'scale(0.9)'; // Scale down slightly on scroll
        contact.style.opacity = '0.9'; // Adjust contact info visibility
    } else {
        name.style.transform = 'scale(1)'; // Reset when at the top
        contact.style.opacity = '1'; // Full opacity
    }
};

// Hamburger Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('menu-items');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Search Bar Functionality
document.getElementById('search-btn').addEventListener('click', function () {
    var query = document.getElementById('search-input').value;
    alert('Search functionality not implemented: ' + query);
});
