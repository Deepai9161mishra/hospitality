const logo = '/assets/logo.png';
import './Footer.css'
import {Images} from '../constants/images'
import {NavLink} from "react-router-dom"
import {BRAND} from '../constants/brand'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div>
                        <div className="brand-section">
                            <img src={logo} alt={`${BRAND.name} logo`} className="logo-img"/>
                            <div className="brand-name">{BRAND.shortName.toUpperCase()}</div>
                        </div>
                        <p className="footer-tagline">
                            {BRAND.tagline}. Delivering trusted, compassionate, and advanced healthcare for every patient.
                        </p>
                        <div className="hours">
                            <h4>Opening Hours</h4>
                            <p>{BRAND.openingHours.weekdays}</p>
                            <p>{BRAND.openingHours.sunday}</p>
                        </div>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Our Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/departments">Departments</NavLink>
                        </li>
                        <li>
                            <NavLink to="/doctors">Doctors Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="/appointment">Book an Appointment</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li>
                            <NavLink to="/services/emergency-service">Emergency Care</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/diabetes-care">Complete Diabetes Care Center</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/dialysis-unit">Dialysis unit</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/physiotherapy-service">Physiotherapy & Rehabilitation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/newborn-care">Mother & Newborn Care</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/patient-accomodation">Patient Accommodation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/dietetics-counselling">Nutrition, Dietetics & Counseling
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <div className="contact-item">
                        <img src={Images.phone} alt="Phone icon" className="contact-icon"/>
                        <div className="contact-numbers">
                            <a href={`tel:+91${BRAND.phone}`}>{BRAND.phoneDisplay}</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <img src={Images.mail} alt="mail-icon" className="contact-icon"/>
                        <span>{BRAND.email}</span>
                    </div>
                    <div className="contact-item">
                        <img src={Images.location} alt="location-icon" className="contact-icon"/>
                        <span>{BRAND.address}</span>
                    </div>
                    <div className="social-links">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a 
                                href={BRAND.social.instagram} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`Follow ${BRAND.name} on Instagram`}
                                className="social-icon"
                                title="Instagram"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a 
                                href={BRAND.social.youtube} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`Subscribe to ${BRAND.name} on YouTube`}
                                className="social-icon"
                                title="YouTube"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    © {new Date().getFullYear()} {BRAND.name}. All rights reserved. | Terms and Conditions
                </div>
            </div>
        </footer>
    )
}

export default Footer
