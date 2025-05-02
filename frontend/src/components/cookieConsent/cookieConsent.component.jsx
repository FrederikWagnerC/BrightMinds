import React, { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../utils/cookies';
import ReactGA from 'react-ga4'; // Import Google Analytics
import { CookieConsentContainer, Message, Button } from './cookieConsent.styled';

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = getCookie('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        setCookie('cookieConsent', 'accepted', 365);
        ReactGA.initialize('G-8KR41QR0D5'); // Initialize Google Analytics immediately
        setIsVisible(false);
    };

    const handleDecline = () => {
        setCookie('cookieConsent', 'declined', 365);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <CookieConsentContainer>
            <Message>This website uses cookies to enhance the user experience. Do you accept the use of cookies?</Message>
            <Button onClick={handleAccept}>Accept</Button>
            <Button onClick={handleDecline}>Decline</Button>
        </CookieConsentContainer>
    );
};