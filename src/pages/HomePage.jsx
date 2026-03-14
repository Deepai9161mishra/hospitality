import {useState, useMemo} from 'react';
import {Link} from 'react-router-dom';
import {Images} from '../constants/images';
import {services, departments} from '../constants/constant';
import '../style.css';
import {useNavigate} from 'react-router-dom';
import {doctors} from "../constants/doctors";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import CoreValues from "../components/CoreValues.jsx";
import GallerySection from "../components/GallerySection.jsx";
import RecentUpdateSection from "../components/RecentUpdateSection.jsx";
import { SEO, HospitalSchema } from "../components/SEO";
import { BRAND } from "../constants/brand";
import { logEvent } from "../lib/firebase";


const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const [isFocused, setIsFocused] = useState(false);

    const filteredDoctors = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return [];
        return doctors.filter(
            (d) => d.name.toLowerCase().includes(q) || d.info.toLowerCase().includes(q)
        );
    }, [searchQuery]);

    const doctorsToShow =
        searchQuery.trim() === "" ? doctors : filteredDoctors;

    return (
        <div className="page">
            <SEO
                title={`${BRAND.name} - Multispeciality Hospital in ${BRAND.location} | 24/7 Emergency Care`}
                description={`${BRAND.name} is a leading multispeciality hospital in ${BRAND.location} offering 24/7 emergency care, advanced ICU, dialysis, surgery, and expert doctors. Book your appointment today.`}
                keywords={`${BRAND.name}, hospital ${BRAND.location}, multispeciality hospital, emergency care, ICU, dialysis, surgery, doctors ${BRAND.location}, health checkup`}
                canonicalUrl={BRAND.siteUrl + "/"}
            />
            <HospitalSchema />
            <main className="hero hero-modern">
                <div className="hero-copy">
                    <div className="badge">
                        <img src={Images.healthImage} alt="health" className="badge-icon"/>
                        <span>Committed to Health</span>
                    </div>
                    <h1>
                        We Provide World Class <br/>
                        <span className="highlight">Treatment</span> For <br/>
                        Everyone!
                    </h1>
                    <p className="lede">
                        Expert doctors, emergency response, and complete medical services under one roof.
                    </p>
                    <button className="btn btn-primary hero-cta" onClick={() => { logEvent('CTA_button_click', { location: 'hero', cta_text: 'Book Appointment' }); navigate('/appointment'); }}>
                        Book Appointment
                        <span className="btn-icon" aria-hidden="true">↗</span>
                    </button>
                </div>
                <div className="hero-visual">
                    <img src={Images.HospitalTeam} alt="Medical team with patient" className="hero-image large"/>
                </div>
            </main>

            <section className="search-section">
                <div className="search-copy">
                    <h2>
                        Your Health. <span className="highlight">Your Choice.</span> Your Doctor.
                    </h2>
                    <p>
                        Use our smart search to find doctors, explore departments, or check specialty care options.
                    </p>
                </div>
                <div className="search-box">
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                        type="text"
                        placeholder="Search for doctors and specialities"
                        className="search-input"
                    />
                    <button className="btn btn-primary search-button">Search</button>

                    {isFocused && doctorsToShow.length > 0 && (
                        <div className="search-dropdown">
                            {doctorsToShow.map((doctor) => (
                                <Link to={`/doctors/${doctor.param}`} key={doctor.param}>
                                    <div className="search-result">
                                        <div className="result-name">{doctor.name}</div>
                                        <div className="result-meta">{doctor.info}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* <div className="section-head"
                 style={{alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <h2>Our Core Values</h2>
                <p className="section-kicker">
                    The hospital operates on four foundational core values:
                </p>
            </div>
            <CoreValues/> */}

            <section className="about-section">
                <div className="about-image-wrap">
                    <iframe
                        className="about-image"
                        src="https://www.youtube.com/embed/_Z8vVz_xs-c?autoplay=1&mute=1&loop=1&playlist=_Z8vVz_xs-c&controls=0&rel=0&modestbranding=1&playsinline=1"
                        title="Hospital"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                    {/*<img src={Images.hospital} alt="Hospital" className="about-image"/>*/}
                </div>
                <div className={"about-content-wrapper"}>
                <div className="about-content">
                    <h2>About {BRAND.name}</h2>
                    <p>
                        {BRAND.name} is a multispeciality hospital situated in {BRAND.location}. Established with the
                        mission to deliver world-class healthcare at affordable prices, it is managed by highly
                        experienced and reputable doctors. Our professionals are committed to providing compassionate
                        care with modern facilities and a patient-first approach.
                    </p>
                    <div className="about-divider"/>
                    <div className="about-vision">
                        <h4>Our Vision</h4>
                        <p>To provide world-class healthcare with excellence and innovation.</p>
                    </div>
                    <div className="about-mission">
                        <h4>Our Mission</h4>
                        <p>To deliver safe, affordable, and compassionate medical services to every patient.</p>
                    </div>
                    <Link to="/about" className="btn btn-ghost">
                        Learn More
                    </Link>
                </div>
                </div>
            </section>

            <section className="departments">
                <div className="departments-head">
                    <div>
                        <h2>Our Medical Departments</h2>
                        <p className="section-kicker">Expert care across multi-specialty departments</p>
                    </div>
                    <Link to="/departments" className="btn btn-ghost">
                        View All Departments
                    </Link>
                </div>

                <div className="departments-grid">
                    {departments.slice(0, 6).map((dept) => (
                        <Link
                            to={`/departments/${dept.slug}`}
                            key={dept.slug}
                        >
                            <div className="dept-card">
                                <img src={dept.image} alt={dept.name} className="dept-image"/>
                                <div className="dept-label">{dept.name}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="services">
                <div className="section-head">
                    <div>
                        <h2>Medical Care Services</h2>
                        <p className="section-kicker">
                            Offering trusted consultations, virtual care, screenings, and specialized treatments.
                        </p>
                    </div>
                    <Link to="/services" className="btn btn-ghost">
                        View All Services
                    </Link>
                </div>

                <div className="services-grid">
                    {services.slice(0, 4).map((service) => (
                        <Link
                            to={`/services/${service.slug}`}
                            key={service.slug}
                        >
                            <div className="red-card">
                                <div className="service-card">
                                    <div className="service-text">
                                        <h4>{service.title}</h4>
                                        <p>{service.copy}</p>
                                    </div>
                                    <img src={service.image} alt={service.title} className="service-image"/>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="specialists">
                <div className="section-head">
                    <div>
                        <h2>Meet Our Specialists</h2>
                        <p className="section-kicker">
                            Highly qualified specialists dedicated to compassionate, world-class care.
                        </p>
                    </div>
                    <Link to="/doctors" className="btn btn-ghost">
                        View All Doctors
                    </Link>
                </div>

                <div className="specialists-grid">
                    {doctors.map((doc) => (
                        <Link key={doc.param} to={`/doctors/${doc.param}`}>
                            <div className="specialist-card">
                                <img src={doc.image} alt={doc.name} className="specialist-image"/>
                                <div className="specialist-info">
                                    <div className="specialist-name">{doc.name}</div>
                                    <div className="specialist-title">{doc.info}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <div className="section-head"
                 style={{alignItems: "start", flexDirection: "column"}}>
                <h2>Recent Updates</h2>
                <p className="section-kicker">
                    Stay informed with the latest news, announcements, and health updates from our hospital.
                </p>
            </div>
            <RecentUpdateSection/>

            {/* <div className="section-head"
                 style={{alignItems: "start", flexDirection: "column", paddingTop: "60px"}}>
                <h2>Explore our Hospital</h2>
                <p className="section-kicker">
                    A glimpse into our advanced facilities, modern infrastructure, and patient-friendly environment.
                </p>
            </div>
            <GallerySection/> */}

            <div className="section-head" style={{alignItems: "center", justifyContent: "center", marginTop: "40px"}}>
                <h2>What Our Patients Say About Us!</h2>
                <p className="section-kicker">
                    Read what our patients have to say about our doctors, staff, facilities, and the care that makes
                    a meaningful difference in their lives.
                </p>
            </div>
            <TestimonialsSection/>
        </div>
    );
};

export default HomePage;
