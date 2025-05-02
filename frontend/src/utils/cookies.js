function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

function checkCookieConsent() {
    return getCookie('cookieConsent') === 'accepted';
}

function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 30);
}

function declineCookies() {
    setCookie('cookieConsent', 'declined', 30);
}

export { checkCookieConsent, acceptCookies, declineCookies, getCookie, setCookie };