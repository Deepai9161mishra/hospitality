import React from "react";
import "./ServiceDetails.css";
import { Images } from "../constants/images";
import { useParams } from "react-router-dom";
import { servicesData } from "../constants/services";
import { departmentsData } from "../constants/departments";
import { doctors } from "../constants/doctors";
import { departments, services } from "../constants/constant";
import { Link } from "react-router-dom";
import { SEO, DepartmentSchema, BreadcrumbSchema } from "./SEO";
import { BRAND } from "../constants/brand";

const ServiceDetails = () => {
    let data;
    let otherServicesData;
    const { slug } = useParams();
    const isService = location.pathname.startsWith("/services");
    const isDepartment = location.pathname.startsWith("/departments");

    if (isService) {
        data = servicesData[slug];
        otherServicesData = services
            .filter(service => service.slug !== slug)
            .slice(0, 6);
    } else if (isDepartment) {
        data = departmentsData[slug];
        otherServicesData = departments
            .filter(dept => dept.slug !== slug)
            .slice(0, 6);
    }

    const matchedDoctors = doctors.filter((doc) => doc.slug === slug);

    if (!data) {
        return (
            <section className="service-wrapper">
                <SEO
                    title="Not Found"
                    description="The requested page was not found."
                    noIndex={true}
                />
                <div className="serv-container">
                    <h1 className="title">Not Found</h1>
                    <p className="subtitle">The requested {isService ? "service" : "department"} was not found.</p>
                </div>
            </section>
        );
    }

    const pageType = isService ? "services" : "departments";
    const breadcrumbs = [
        { name: "Home", url: BRAND.siteUrl + "/" },
        { name: isService ? "Services" : "Departments", url: `${BRAND.siteUrl}/${pageType}` },
        { name: data.title, url: `${BRAND.siteUrl}/${pageType}/${slug}` }
    ];

    return (
        <section className="service-wrapper">
            <SEO
                title={`${data.title} - ${BRAND.name} ${BRAND.location}`}
                description={data.info || data.subtitle}
                keywords={`${data.title}, ${isService ? "medical service" : "department"} ${BRAND.location}, ${BRAND.name}`}
                canonicalUrl={`${BRAND.siteUrl}/${pageType}/${slug}`}
            />
            <BreadcrumbSchema items={breadcrumbs} />
            {isDepartment && <DepartmentSchema department={data} slug={slug} />}
            <div className="serv-container">
                <h1 className="title">{data.title}</h1>
                <p className="subtitle">
                    {data.subtitle}
                </p>

                <div className="image-sec">
                    <img
                        src={data.imagePath}
                        alt={data.title}
                        className="image-class"
                    />
                </div>

                <div className="service-main">

                    <div className="details-content">

                        <p className="intro">
                            {data.info}
                        </p>
                        {data?.sections?.map((section, index) => (
                            <div key={index}>
                                <h3>{section.heading}</h3>
                                {Array.isArray(section.content) ? (
                                    <ul className="custom-list">
                                        {section.content.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{section.content}</p>
                                )}
                            </div>
                        ))}

                    </div>

                    <aside className="sidebar">
                        {isDepartment && matchedDoctors.length > 0 && (
                            matchedDoctors.map((doctor) => (
                                <div key={doctor.name} className="doctor-card">
                                    <h4>Our Specialist Doctor</h4>

                                    <div className="doctor-profile">
                                        <img src={doctor.image} alt={doctor.name} />

                                        <div>
                                            <h5>{doctor.name}</h5>

                                            {doctor.specialisation && (
                                                <p className="doc-role">{doctor.specialisation}</p>
                                            )}

                                            <p className="doc-qual">{doctor.qualifications}</p>
                                        </div>
                                    </div>

                                    {doctor.bio && <p className="doc-bio">{doctor.bio}</p>}

                                    <Link
                                        to={`/appointment`}
                                    ><button className="btn-appointment">Book Appointment</button></Link>
                                </div>
                            ))
                        )}

                        <div className="services-class">
                            <h4>Other {isService ? "Services" : "Departments"}</h4>
                            <ul className="sidebar-list">
                                {otherServicesData.map(item => (
                                    <Link
                                        to={`/${isService ? "services" : "departments"}/${item.slug}`}
                                        key={item.slug}
                                    >
                                        <li key={item.slug}>{isService ? item.title : item.name}</li>
                                    </Link>
                                ))}
                            </ul>
                            {isService && <Link
                                to={`/appointment`}
                            ><button className="btn-appointment">Book Appointment</button></Link>}
                        </div>

                    </aside>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
