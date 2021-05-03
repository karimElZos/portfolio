// My Script
// hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-container');
const header = document.querySelector('.myNav');
const nav_menu_items = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
// Nav menu close on mobile view
nav_menu_items.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});



// header nav marker line on bottom
if (window.innerWidth > 768) {
    const marker = document.querySelector('#marker');
    const item = document.querySelectorAll('.nav-links li a');

    function indicator(e) {
        marker.style.left = e.offsetLeft + "px";
        marker.style.width = e.offsetWidth + "px";
    }
    item.forEach(link => {
        link.addEventListener('click', (e) => {
            indicator(e.target)
        });
    });
}