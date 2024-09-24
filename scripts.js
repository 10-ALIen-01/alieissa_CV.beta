// Sticky Header with Animated Name and Contact
window.onscroll = function () {
    var name = document.getElementById('name');
    var contact = document.getElementById('contact');
    
    if (window.scrollY > 50) {
        name.style.transform = 'translateX(-150px) scale(0.9)'; // Move name to left and scale
        contact.style.opacity = '0.9'; // Adjust contact info visibility
        contact.style.transform = 'translateX(-150px)'; // Move contact info to left as well
    } else {
        name.style.transform = 'translateX(0) scale(1)'; // Reset when at the top
        contact.style.opacity = '1'; // Full opacity
        contact.style.transform = 'translateX(0)'; // Reset contact info
    }
};


// Hamburger Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('menu-items');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Smooth Scroll for Menu Items
document.querySelectorAll('#menu-items a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


// Search Bar Functionality with keyword highlighting
document.getElementById('search-btn').addEventListener('click', function () {
    var query = document.getElementById('search-input').value.toLowerCase();
    var content = document.querySelector('main');
    var paragraphs = content.getElementsByTagName('p');
    
    // Clear previous highlights
    for (var p of paragraphs) {
        p.innerHTML = p.innerHTML.replace(/<mark>(.*?)<\/mark>/g, "$1");
    }

    if (query) {
        for (var p of paragraphs) {
            var regex = new RegExp(query, "gi");
            p.innerHTML = p.innerHTML.replace(regex, (match) => `<mark>${match}</mark>`);
        }
    }
});
