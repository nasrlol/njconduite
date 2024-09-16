
// Dropdown toggle functionality
document.querySelector('.dropdown').addEventListener('click', function () {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';

});

document.querySelector('.banner-button-call').addEventListener('click', function () {
    const buttonSlide = document.querySelector('.banner-button-call-slide');
    
    // Check if the element is visible (opacity is 1)
    if (buttonSlide.style.opacity === '1') {
        buttonSlide.style.opacity = '0';  // Hide the button by setting opacity to 0
        buttonSlide.style.display = 'none';  // Optionally hide the element using display property
    } else {
        buttonSlide.style.opacity = '1';  // Show the button by setting opacity to 1
        buttonSlide.style.display = 'block';  // Optionally display the element using display property
    }

    if (buttonSlide.style.width === '0') {
        buttonSlide.style.width = '150'
    } else {
        
        buttonSlide.style.width = '0'
    }


});
