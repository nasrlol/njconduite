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

}

getDeviceType();