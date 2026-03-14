import {doctors} from "../constants/doctors";
import {Images} from "../constants/images";
import "./DoctorsPage.css";
import {useNavigate} from 'react-router-dom'
import AboutSection from "../components/AboutSection.jsx";
import { SEO, BreadcrumbSchema } from "../components/SEO";
import { BRAND } from "../constants/brand";

const DoctorsPage = () => {
    const navigate = useNavigate();

    const breadcrumbs = [
        { name: "Home", url: BRAND.siteUrl + "/" },
        { name: "Doctors", url: BRAND.siteUrl + "/doctors" }
    ];

    return (
        <div className="doctor-page-wrapper">
            <SEO
                title={`Our Doctors - ${BRAND.name} ${BRAND.location}`}
                description={`Meet our team of expert doctors at ${BRAND.name}. Specialists in Cardiology, Neurology, Orthopedics, Gynecology, Pediatrics, and more.`}
                keywords={`doctors ${BRAND.location}, specialists, cardiologist, neurologist, orthopedic surgeon, gynecologist, ${BRAND.name} doctors`}
                canonicalUrl={`${BRAND.siteUrl}/doctors`}
            />
            <BreadcrumbSchema items={breadcrumbs} />
            <AboutSection
                title={"Our Doctors"}
                text={
                    "Our medical team comprises highly distinguished specialists and dedicated professionals committed to delivering world-class healthcare. With extensive experience across diverse medical disciplines, our doctors combine clinical excellence with state-of-the-art technology to provide precise diagnoses and effective treatments."
                }
            />
            <div className="doctors-grid">
                {doctors.map((doc) => (
                    <div key={doc.name} className="doctors-card" onClick={() => navigate(`/doctors/${doc.param}`)}>
                        <div className="doctors-image-wrapper">
                            <img src={doc.image} alt={doc.name} className="doctors-image"/>
                        </div>
                        <div className="doctors-card-bottom">
                            <div className="doctors-info">
                                <div className="doctors-name">{doc.name}</div>
                                <div className="doctors-title">{doc.info}</div>
                            </div>
                            <button
                                className="arrow-btn"
                                aria-label={`View ${doc.name} profile`}
                            >
                                <img src={Images.ArrowIconDiagonal} alt="" aria-hidden="true" className="arrow"/>
                            </button>
                        </div>
                        <div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default DoctorsPage;
