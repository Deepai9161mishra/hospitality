import {useState, useRef, useEffect} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
const logo = '/assets/logo.png';
import './Header.css'
import {Images} from '../constants/images'
import { BRAND } from '../constants/brand';
import { logEvent } from '../lib/firebase';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const headerRef = useRef(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMenuOpen &&
                headerRef.current &&
                !headerRef.current.contains(event.target)
            ) {
                closeMenu()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])

    return (
        <header className="topbar" ref={headerRef}>
            <NavLink to="/">
                <div className="brand">
                    <img src={logo} alt={`${BRAND.name} logo`} className="logo-img"/>
                    <div className="brand-text">
                        <strong>{BRAND.shortName.toUpperCase()}</strong>
                    </div>
                </div>
            </NavLink>
            <button
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
        <span className={isMenuOpen ? 'hamburger open' : 'hamburger'}>
          <span></span>
          <span></span>
          <span></span>
        </span>
            </button>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                <NavLink to="/" className="nav-link" onClick={closeMenu}>
                    Home
                </NavLink>
                <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                    About Us
                </NavLink>
                <NavLink to="/services" className="nav-link" onClick={closeMenu}>
                    Services
                </NavLink>
                <NavLink to="/departments" className="nav-link" onClick={closeMenu}>
                    Departments
                </NavLink>
                <NavLink to="/doctors" className="nav-link" onClick={closeMenu}>
                    Doctors
                </NavLink>
            </nav>

            <div className={`actions ${isMenuOpen ? 'actions-open' : ''}`}>
                <button
                    className="btn btn-ghost"
                    onClick={() => {
                        closeMenu();
                        window.location.href = `tel:+91${BRAND.phone}`;
                    }}
                >
                    {BRAND.phoneDisplay}
                </button>
                <button className="btn btn-primary" onClick={() => { logEvent('CTA_button_click', { location: 'header', cta_text: 'Book Appointment' }); navigate('/appointment'); }}>
                    <span>Book Appointment</span>
                    <img src={Images.phone} alt="Phone icon" className="btn-icon"/>
                </button>
            </div>
        </header>
    )
}

export default Header
