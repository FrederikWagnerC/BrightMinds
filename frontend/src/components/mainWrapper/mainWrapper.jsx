import { Analytics } from "../analytics/googleAnalytics"

export const MainWrapper = ({ children }) => {
    return (
        <>
            <Analytics />
            {children}
        </>
    )
}