
// Dropdown toggle functionality
document.querySelector('.dropdown').addEventListener('click', function () {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';

});

document.querySelector('.banner-button-call').addEventListener('click', function () {

    const buttonSlide = document.querySelector('.banner-button-call-slide');
    buttonSlide.style.display = buttonSlide.style.opacity === 1 ? 0 : 1; 

});
