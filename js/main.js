document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    const hamburgerLineOne = document.querySelector('.hamburger-line-one');
    const hamburgerLineTwo = document.querySelector('.hamburger-line-two');
    const hamburgerLineThree = document.querySelector('.hamburger-line-three');
    const menuItems = document.querySelectorAll('.nav-item');

    hamburger.addEventListener('click', function () {
        console.log("Hamburger clicked!");
        navMenu.classList.toggle('active');
        navbar.classList.toggle('active');
        hamburgerLineOne.classList.toggle('active');
        hamburgerLineTwo.classList.toggle('active');
        hamburgerLineThree.classList.toggle('active');
    });

    // Add event listeners to menu items
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            // Close the menu when a menu item is clicked
            navMenu.classList.remove('active');
            navbar.classList.remove('active');
            hamburgerLineOne.classList.remove('active');
            hamburgerLineTwo.classList.remove('active');
            hamburgerLineThree.classList.remove('active');
        });
    });
});