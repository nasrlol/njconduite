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

    // Toggle the call slide on click of the container or call button
    callButtonContainer.addEventListener('click', function() {
        callButtonSlide.classList.toggle('expanded');
    });

    // Close the slide if clicked outside of the call button or slide
    document.addEventListener('click', function(event) {
        if (!callButtonContainer.contains(event.target) &&
            !callButtonSlide.contains(event.target) &&
            !callButton.contains(event.target) &&
            callButtonSlide.classList.contains('expanded')) {
            callButtonSlide.classList.remove('expanded');
        }
    });

    // Handle click on the call button itself
    callButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop event from bubbling up
        callButtonSlide.classList.toggle('expanded');
    });
});