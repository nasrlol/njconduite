document.addEventListener('DOMContentLoaded', function() {
    // Dropdown toggle
    document.querySelector('.dropdown .banner-button').addEventListener('click', function () {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Call button slide
    const callButtonSlide = document.querySelector('.banner-button-call-slide');
    const callButtonContainer = document.querySelector('.call-button-container');
    const callButton = document.querySelector('.banner-button-call');

    // Toggle the call slide when clicking the container (which includes the call button)
    callButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from bubbling up
        callButtonSlide.classList.toggle('expanded');
    });

    // Close the slide if clicked outside the call button or the slide itself
    document.addEventListener('click', function(event) {
        if (!callButtonContainer.contains(event.target) &&
            !callButtonSlide.contains(event.target) &&
            callButtonSlide.classList.contains('expanded')) {
            callButtonSlide.classList.remove('expanded');
        }
    });
});

window.addEventListener('load', function() {
    const splash = document.getElementById('mainSplash');
    
    splash.addEventListener('click', function() {
        splash.classList.add('splashscreen-hidden');
    });
});
