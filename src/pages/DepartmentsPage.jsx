import {departments, services} from "../constants/constant";
import {Images} from "../constants/images";
import "./DepartmentPage.css";
import {Link} from "react-router-dom";
import AboutSection from "../components/AboutSection.jsx";
import {SEO, BreadcrumbSchema} from "../components/SEO";
import { BRAND } from "../constants/brand";

const DepartmentsPage = () => {
    const breadcrumbs = [
        { name: "Home", url: BRAND.siteUrl + "/" },
        { name: "Departments", url: BRAND.siteUrl + "/departments" }
    ];

    return (
        <div className="dept-container">
            <SEO
                title={`Medical Departments - ${BRAND.name} ${BRAND.location}`}
                description={`Expert care across 14+ medical departments at ${BRAND.name}: Cardiology, Neurology, Orthopedics, Gynecology, Urology, Pediatrics, Endocrinology, Pulmonology, and more.`}
                keywords={`hospital departments ${BRAND.location}, cardiology, neurology, orthopedics, gynecology, urology, pediatrics, endocrinology, pulmonology`}
                canonicalUrl={`${BRAND.siteUrl}/departments`}
            />
            <BreadcrumbSchema items={breadcrumbs} />
            <AboutSection
                title={"Our Medical Departments"}
                text={
                    "Expert, compassionate care across a wide range of medical specialties - from prevention and diagnosis to advanced treatment and recovery. Our departments work together to deliver coordinated, patient-centered care tailored to every age and stage of life. With cutting-edge technology, skilled specialists, and evidence-based practices, we focus on safer outcomes and faster healing. Whether it’s routine checkups, chronic condition management, or complex procedures, you’re supported every step of the way."
                }
            />
            <div className="dept-grid">
                {departments.map((dept) => (
                    <Link
                        to={`/departments/${dept.slug}`}
                        key={dept.slug}
                    >
                        <div key={dept.name} className="deptartment-card">
                            <img src={dept.image} alt={dept.name} className="department-image"/>
                            <div className="department-label">{dept.name}</div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default DepartmentsPage;