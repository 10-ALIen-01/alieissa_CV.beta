// Sticky Header with Animated Name and Contact
window.onscroll = function () {
    var name = document.getElementById('name');
    var contact = document.getElementById('contact');
    if (window.scrollY > 50) {
        name.style.transform = 'translateX(-50px)';
        contact.style.transform = 'translateX(50px)';
    } else {
        name.style.transform = 'translateX(0)';
        contact.style.transform = 'translateX(0)';
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
