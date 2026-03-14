import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../constants/doctors";
import "./DoctorDetailsPage.css";
import { SEO, DoctorSchema, BreadcrumbSchema } from "./SEO";
import { BRAND } from "../constants/brand";
import { logEvent } from "../lib/firebase";
import { useEffect } from "react";

const DoctorDetailsPage = () => {
    const {slug} = useParams();
    const navigate = useNavigate();

    const doc = doctors.find(
        (d) => d.param === slug
    );

    useEffect(() => {
        if (doc) logEvent('doctor_profile_view', { doctor_name: doc.name, doctor_specialty: doc.info });
    }, [doc?.param]);

    if (!doc) return (
        <>
            <SEO
                title="Doctor Not Found"
                description="The requested doctor profile was not found."
                noIndex={true}
            />
            <p>Doctor not found</p>
        </>
    );

    const breadcrumbs = [
        { name: "Home", url: BRAND.siteUrl + "/" },
        { name: "Doctors", url: BRAND.siteUrl + "/doctors" },
        { name: doc.name, url: `${BRAND.siteUrl}/doctors/${slug}` }
    ];

    return (
        <div className="doctor-details-main">
            <SEO
                title={`${doc.name} - ${doc.info} | ${BRAND.name} ${BRAND.location}`}
                description={doc.description || `${doc.name} is a ${doc.info} specialist at ${BRAND.name}, ${BRAND.location}. ${doc.qualifications}`}
                keywords={`${doc.name}, ${doc.info}, doctor ${BRAND.location}, specialist, ${BRAND.name}, ${doc.qualifications}`}
                canonicalUrl={`${BRAND.siteUrl}/doctors/${slug}`}
            />
            <DoctorSchema doctor={doc} />
            <BreadcrumbSchema items={breadcrumbs} />
            <div className="doctor-header">
                <div className="doctor-info">
                    <img src={doc.image} alt={doc.name} className="doctor-img"/>

                    <div className="doctor-details">
                        <h3 className="doctor-name">{doc.name}</h3>
                        <p className="doctor-qual">{doc.qualifications}</p>
                        <p className="doctor-hospital">{doc.info}</p>
                    </div>
                </div>

                <button
                    className="btn btn-primary hero-cta"
                    onClick={() => {
                        navigate("/appointment")
                    }}
                >
                    Book Appointment
                    <span className="btn-icon" aria-hidden="true">↗</span>
                </button>
            </div>

            {doc.description && (
                <p className="doctor-desc">{doc.description}</p>
            )}

            {doc.sections &&
                doc.sections.map((section, i) => (
                    <div key={i} className="doctor-sec">
                        <h4>{section.title}</h4>

                        <ul className="custom-list">
                            {section.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}

            <div className="doctor-contact-block">
                <h4>Contact & Location</h4>
                <p><strong>Address:</strong> {BRAND.address}</p>
                <p><strong>Phone:</strong> <a href={`tel:+91${BRAND.phone}`}>{BRAND.phoneDisplay}</a></p>
            </div>
        </div>

    );
};

export default DoctorDetailsPage;
