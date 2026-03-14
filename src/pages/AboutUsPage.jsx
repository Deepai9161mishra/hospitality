import "./AboutUs.css";
import { Images } from "../constants/images";
import { useNavigate } from 'react-router-dom';
import AboutSection from "../components/AboutSection.jsx";
import { SEO, BreadcrumbSchema } from "../components/SEO";
import { BRAND } from "../constants/brand";

const CoreValueCard = ({image, title, description}) => {
    return (
        <div className="core-card">
            <div className="core-icon">
                <div className="core-icon-bg"><img src={image} alt={title}/></div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const FeatureSection = ({
                            title,
                            description,
                            buttonText,
                            image,
                            reverse = false,
                            clickFunction
                        }) => {
    return (
        <section className={`feature-section ${reverse ? "reverse" : ""}`}>
            <div className="feature-text">
                <h2>{title}</h2>
                <p>{description}</p>

                {buttonText && (
                    <button onClick={clickFunction} className="outline-btn">{buttonText}</button>
                )}
            </div>

            <div className="feature-image">
                <img src={image} alt={title}/>
            </div>
        </section>
    );
};

const DoctorProfile = ({
                           name,
                           description,
                           image,
                           reverse = false,
                           clickFunction
                       }) => {
    return (
        <section className={`doctor-section ${reverse ? "reverse" : ""}`}>
            <div className="doctor-image">
                <img src={image} alt={name}/>
            </div>

            <div className="doctor-content">
                <h2>{name}</h2>
                <p>{description}</p>

                <button className="primary-btn" onClick={clickFunction}>
                    Book an Appointment
                    <img src={Images.phone} alt="Phone icon" className="btn-icon"/>
                </button>
            </div>
        </section>
    );
};


const AboutUsPage = () => {
    const navigate = useNavigate();

    const breadcrumbs = [
        { name: "Home", url: BRAND.siteUrl + "/" },
        { name: "About Us", url: BRAND.siteUrl + "/about" }
    ];

    return (
        <div className="about-container">
            <SEO
                title={`About Us - ${BRAND.name} ${BRAND.location}`}
                description={`Learn about ${BRAND.name}, a multispeciality hospital in ${BRAND.location}. Our core values: Ability, Availability, Affordability & Ethics.`}
                keywords={`about ${BRAND.name}, hospital ${BRAND.location}, multispeciality hospital, healthcare`}
                canonicalUrl={BRAND.siteUrl + "/about"}
            />
            <BreadcrumbSchema items={breadcrumbs} />
            <AboutSection
                title="About Us"
                text={`${BRAND.name} is a multispeciality hospital situated in ${BRAND.location}. Established with the mission to deliver world-class healthcare at affordable prices, it is managed by highly experienced and reputable doctors committed to patient care and modern medical practices.`}
            />

            {/* Core Values */}
            <section className="core-section">
                <h2>Core Values</h2>
                <p className="core-subtitle">
                    The hospital operates on four foundational core values:
                </p>

                <div className="core-grid">
                    <CoreValueCard
                        image={Images.AbilityBlack}
                        title="Ability"
                        description="All our doctors possess the expertise necessary to accurately diagnose and manage diseases within their respective specialties. Strict protocols and standard operating procedures (SOPs) are followed for the management of every medical condition, ensuring the minimization of errors and the highest standards of care."
                    />

                    <CoreValueCard
                        image={Images.AvailabilityBlack}
                        title="Availability"
                        description={`The ${BRAND.name} team is available around the clock, 24/7, to assist patients in every possible way. We take pride in our commitment to patient care, ensuring that even when patients are at home, we assume full responsibility for their health and well-being. This level of dedication distinguishes us from other hospitals in the region.`}
                    />

                    <CoreValueCard
                        image={Images.AffordabilityBlack}
                        title="Affordability"
                        description="Affordability is a cornerstone of our practice. We are committed to providing healthcare services at very reasonable prices, always considering the financial circumstances of our patients to make quality care accessible to all."
                    />

                    <CoreValueCard
                        image={Images.EthicsBlack}
                        title="Ethics"
                        description={`Ethics form the most important foundation of ${BRAND.name}. Our team maintains an unwavering commitment to ethical standards at every level of care. Patients receive transparent and ethical treatment, and we never compromise on our principles.`}
                    />
                </div>
            </section>

            {/* Diabetes Care */}
            <FeatureSection
                title="Comprehensive Diabetes Care Under One Roof"
                description={`${BRAND.name} provides complete diabetes care, encompassing both complications screening and management, all within a single facility. This integrated approach ensures that patients have access to a full spectrum of diabetes-related healthcare services without the need to visit multiple locations. By serving as a one-stop solution, we offer convenience and continuity of care for individuals dealing with chronic illnesses, particularly diabetes. Patients benefit from streamlined services and coordinated management, enhancing the overall quality and efficiency of their treatment journey.`}
                buttonText="Book Appointment"
                image={Images.diabetesCare}
                clickFunction={() => navigate('/appointment')}
            />

            {/* Equipment */}
            <FeatureSection
                title="State-of-the-Art Equipment"
                description="The facility is equipped with entirely new equipment sourced from highly reputable brands, including Philips, Schiller Switzerland, Draeger, and Allengers. This commitment to using advanced and trusted technology distinguishes the facility from most other healthcare centres in the area, where the use of such high-quality brands is less common."
                buttonText="Contact Us"
                image={Images.equipment}
                clickFunction={() => navigate('/appointment')}
                reverse
            />

            {/* Home Healthcare */}
            <FeatureSection
                title="Home-Based Healthcare Services"
                description={`${BRAND.name} provides comprehensive home-based healthcare services for patients who, due to various reasons, are unable to visit the hospital in person. Under this service, expert doctors conduct home visits to assess medical needs, provide consultations, issue prescriptions, and ensure prescribed medicines are delivered directly to the patient's residence. This ensures continuous, quality medical care in the comfort of one's home.`}
                buttonText="View all Services"
                image={Images.healthCareService}
                clickFunction={() => navigate('/services')}
            />


            {/* Our Specialists */}
            <h2 className="section-title">Our Specialists</h2>

            <DoctorProfile
                name="Dr. Meera Krishnan"
                image={Images.Placeholder}
                description="Dr. Meera Krishnan is an Endocrinologist and Diabetologist. She has a meritorious background with numerous accolades on his name. He did MBBS from the prestigious “Dayanand Medical College & Hospital, Ludhiana” and passed all the professionals in first attempt. He did MD Medicine from “Indira Gandhi Medical College, Shimla” and passed MD as a topper of the batch. He did DNB Superspeciality Endocrinology from the world renowned hospital “Medanta-The Medicity, Delhi-NCR”. He did his training under Padma Bhushan awardee Dr Ambrish Mithal. He passed DNB Endocrinology in first attempt and emerged as topper of the batch."
                clickFunction={() => navigate('/appointment')}
            />

            <DoctorProfile
                name="Dr. Anjali Patil"
                image={Images.Placeholder}
                description="Dr. Anjali Patil is an expert Obstetrician and Gynecologist with a Fellowship in Reproductive Medicine, specializing in the advanced management of PCOD, endometriosis, and abnormal uterine bleeding. She integrates cutting-edge fertility treatments and minimally invasive laparoscopic surgery with a compassionate, evidence-based approach to resolve complex reproductive and hormonal challenges. Dedicated to comprehensive women’s wellness, she provides specialized care ranging from high-risk pregnancy support to personalized infertility solutions, ensuring optimal health outcomes for patients at every life stage."
                reverse
                clickFunction={() => navigate('/appointment')}
            />


        </div>
    );
};

export default AboutUsPage;
