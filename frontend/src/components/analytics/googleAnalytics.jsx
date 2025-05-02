import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const Analytics = () => {

    useEffect(() => {
        ReactGA.initialize('G-8KR41QR0D5')
    }, []);

    return (
        <div>
        <p>Google Analytics</p>
        </div>
    )

}