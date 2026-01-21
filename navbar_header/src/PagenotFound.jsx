import { Link } from "react-router"
import HomeComponent from "./Home"

export default function PageNotFoundComponent() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 >Page Not Found</h1>
            <h1>404 Error</h1>
            <div>
                <Link to="/">Go to Home Page</Link>
            </div>
            <img style={{
                width: '60%',
                height: 'auto'
            }} src="https://comodosslstore.com/resources/wp-content/uploads/2025/05/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888.jpg" alt="404" />  
        </div>
        
    )
}