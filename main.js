function getDeviceType() {
    
    const USER_AGENT = navigator.userAgent.toLowerCase();

    let DEVICE_TYPE = '';

    if (USER_AGENT.indexOf('mobile') !== -1) {
        DEVICE_TYPE = 'Mobile';
    } else if (USER_AGENT.indexOf('tablet') !== -1) {
        DEVICE_TYPE = 'Tablet';
    } else {
        DEVICE_TYPE = 'Desktop';
    }

    const currentURL = window.location.href;

    if (DEVICE_TYPE === 'Mobile' && !currentURL.includes("mobileindex.html")) {
        window.location.href = "mobileindex.html?redirected=true";
    } else if (DEVICE_TYPE !== 'Mobile' && !currentURL.includes("index.html")) {
        window.location.href = "index.html?redirected=true";
    }
}

getDeviceType();