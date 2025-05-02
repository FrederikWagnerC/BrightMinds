import { Analytics } from "../analytics/googleAnalytics";
import { CookieConsent } from "../cookieConsent/cookieConsent.component"; // Default import

export const MainWrapper = ({ children }) => {
    return (
        <>
            <Analytics />
            <CookieConsent />
            {children}
        </>
    );
};