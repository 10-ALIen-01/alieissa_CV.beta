// Sticky Header with Animated Name and Contact
window.onscroll = function () {
    var name = document.getElementById('name');
    var contact = document.getElementById('contact');
    var header = document.querySelector('header');
    var sticky = header.offsetTop;

    if (window.scrollY > 50) {
        name.style.transform = 'translateX(-150px) scale(0.9)'; // Move name to left and scale
        contact.style.opacity = '0.9'; // Adjust contact info visibility
        contact.style.transform = 'translateX(-150px)'; // Move contact info to left as well
    } else {
        name.style.transform = 'translateX(0) scale(1)'; // Reset when at the top
        contact.style.opacity = '1'; // Full opacity
        contact.style.transform = 'translateX(0)'; // Reset contact info
    }

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

// Hamburger Menu Toggle
document.getElementById('hamburger').addEventListener('click', function () {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('visible');
});

// Smooth Scroll for Menu Items
document.querySelectorAll('#nav-menu a').forEach(anchor => {
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
