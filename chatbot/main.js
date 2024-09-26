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


    // Make a POST request to the backend endpoint
    fetch('http://localhost:5000/chatbot/login.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({ key: 'value' })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
