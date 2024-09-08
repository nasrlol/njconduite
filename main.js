function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();
    let deviceType = '';

    if (userAgent.includes('mobile')) {
        deviceType = 'Mobile';
    } else if (userAgent.includes('tablet')) {
        deviceType = 'Tablet';
    } else {
        deviceType = 'Desktop';
    }

    const currentURL = window.location.href;

    if (deviceType === 'Mobile' && !currentURL.includes('mobileindex.html')) {
        window.location.href = 'mobileindex.html?redirected=true';
    } else if (deviceType !== 'Mobile' && !currentURL.includes('index.html')) {
        window.location.href = 'index.html?redirected=true';
    }

    return deviceType; // Added return to use the deviceType later if needed
}

const deviceType = getDeviceType();

// Dropdown toggle functionality
document.querySelector('.dropdown').addEventListener('click', function () {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';

});

