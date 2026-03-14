import { services } from "../constants/constant";
import "./ServicePage.css";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection.jsx";
import { SEO, BreadcrumbSchema } from "../components/SEO";
import { BRAND } from "../constants/brand";
import { logEvent } from "../lib/firebase";

const ServicesPage = () => {
    const breadcrumbs = [
        { name: "Home", url: BRAND.siteUrl + "/" },
        { name: "Services", url: BRAND.siteUrl + "/services" }
    ];

    return (
        <div className="service-container">
            <SEO
                title={`Medical Services - ${BRAND.name} ${BRAND.location}`}
                description={`Explore comprehensive medical services at ${BRAND.name}: 24/7 Emergency Care, ICU, Dialysis, Surgery, Mother & Newborn Care, Physiotherapy, Diagnostics, and more.`}
                keywords={`hospital services ${BRAND.location}, emergency care, ICU, dialysis, surgery, physiotherapy, diagnostics`}
                canonicalUrl={`${BRAND.siteUrl}/services`}
            />
            <BreadcrumbSchema items={breadcrumbs} />
            <AboutSection
                title={"Services"}
                text={
                    "Our hospital offers comprehensive diagnostic services using advanced medical technology. Patients can access both in-person and virtual care for added convenience and continuity. We specialize in preventive screenings to support early detection and long-term wellness. Our multidisciplinary teams ensure accurate diagnosis and personalized treatment plans. We deliver specialized treatments across a wide range of medical departments. Patient safety, comfort, and quality care are at the core of everything we do."
                }
            />
            <div className="serv-grid">
                {services.map((service) => (
                    <Link
                        to={`/services/${service.slug}`}
                        key={service.slug}
                        onClick={() => logEvent('service_click', { service_name: service.title, service_slug: service.slug })}
                    >
                        <div className="card-red">
                            <div key={service.title} className="serv-card">
                                <div className="serv-text">
                                    <h4>{service.title}</h4>
                                    <p>{service.copy}</p>
                                </div>
                                <img src={service.image} alt={service.title} className="serv-image"/>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ServicesPage;