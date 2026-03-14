import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <SEO
                title="Page Not Found"
                description="The page you are looking for could not be found. Return to our homepage to explore our medical services, departments, and doctors."
                noIndex={true}
            />
            
            <div className="not-found-content">
                <h1 className="not-found-code">404</h1>
                <h2 className="not-found-title">Page Not Found</h2>
                <p className="not-found-message">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                
                <div className="not-found-actions">
                    <Link to="/" className="btn btn-primary">
                        Go to Homepage
                        <span className="btn-icon" aria-hidden="true">→</span>
                    </Link>
                    <Link to="/appointment" className="btn btn-ghost">
                        Book Appointment
                    </Link>
                </div>
                
                <div className="not-found-links">
                    <p>Or try one of these pages:</p>
                    <ul>
                        <li><Link to="/services">Our Services</Link></li>
                        <li><Link to="/departments">Departments</Link></li>
                        <li><Link to="/doctors">Our Doctors</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
