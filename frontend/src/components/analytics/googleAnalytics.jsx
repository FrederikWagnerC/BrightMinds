import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { checkCookieConsent } from '../../utils/cookies'; // Import cookie utility function

export const Analytics = () => {
    useEffect(() => {
        if (checkCookieConsent()) {
            ReactGA.initialize('G-8KR41QR0D5'); // Replace with your GA4 Measurement ID
        }
    }, []);

    return null; // No need to render anything
};