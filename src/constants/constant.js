// import placeholder from '../assets/placeholder.jpg'
import { Images } from './images'
import { BRAND } from './brand'

export const departments = [
    {name: 'Endocrinology & Diabetes', image: Images.endocrinology, slug: 'endocrinology'},
    {name: 'Obstetrics, Gynaecology & Infertility', image: Images.gynaecology, slug: 'gynecology'},
    {name: 'Plastic and Cosmetic Surgery', image: Images.platicSurgery, slug: 'plastic-and-cosmetic-surgery'},
    {name: 'Urology', image: Images.urology, slug: 'urology'},
    {name: 'Pulmonology', image: Images.pulmonology, slug: 'pulmonology'},
    {name: 'General & Laparoscopic Surgery', image: Images.laparoscopic, slug: 'laparoscopic-surgery'},
    {name: 'Internal Medicine', image: Images.InternalMedicine, slug: 'internal-medicine'},
    {name: 'Orthopedics & Joint Replacement Surgery', image: Images.OrthopedicsSurgery, slug: 'orthopedics-surgery'},
    {name: 'Neurology', image: Images.Neurology, slug: 'neurology'},
    {name: 'Pediatrics & Neonatology', image: Images.PediatricsNeonatology, slug: 'pediatrics-and-neonatology'},
    {name: 'Pathology & Microbiology', image: Images.Pathology, slug: 'pathology-and-microbiology'},
    {name: 'Anaesthesia & Critical Care', image: Images.AnaesthesiaCare, slug: 'anaesthesia-critical-care'},
    {name: 'Cardiology', image: Images.Cardiology, slug: 'cardiology'},
    {name: 'Nephrology & Dialysis Care', image: Images.DialysisUnitLarge, slug: 'nephrology'},
]

export const services = [
    {
        title: 'Cardiology',
        copy: 'Comprehensive heart care including diagnostics, interventional procedures, and cardiac rehabilitation.',
        image: Images.Cardiology,
        slug: 'cardiology',
    },
    {
        title: 'Orthopedics',
        copy: 'Bone, joint, and muscle care with joint replacement, arthroscopy, and trauma surgery.',
        image: Images.OrthopedicsSurgery,
        slug: 'orthopedics',
    },
    {
        title: 'Neurology',
        copy: 'Expert care for brain, spine, and nervous system disorders including stroke and epilepsy.',
        image: Images.Neurology,
        slug: 'neurology',
    },
    {
        title: 'Pediatrics',
        copy: 'From newborn to adolescent care with dedicated NICU and vaccination programs.',
        image: Images.PediatricsNeonatology,
        slug: 'pediatrics',
    },
    {
        title: 'Radiology',
        copy: 'Advanced imaging including X-ray, CT, MRI, and ultrasound for accurate diagnosis.',
        image: Images.ultrasoundDiagnostics,
        slug: 'radiology',
    },
    {
        title: 'Emergency Care',
        copy: '24/7 emergency and trauma care with rapid response and critical care support.',
        image: Images.Emeregency,
        slug: 'emergency-service',
    },
    {
        title: 'Diagnostic Services',
        copy: 'Laboratory and imaging services for accurate diagnosis and monitoring.',
        image: Images.SurgicalRoom,
        slug: 'diagnostic-service',
    },
    {
        title: 'General Medicine',
        copy: 'Primary care, chronic disease management, and preventive health check-ups.',
        image: Images.InternalMedicine,
        slug: 'general-medicine',
    },
]

export const coreValuesData = [
    {
        image: Images.ability,
        title: "Ability",
        description: "All our doctors possess the expertise necessary to accurately diagnose and manage diseases within their respective specialties. Strict protocols and standard operating procedures (SOPs) are followed for the management of every medical condition, ensuring the minimization of errors and the highest standards of care."
    },
    {
        image: Images.availability,
        title: "Availability",
        description: `The ${BRAND.name} team is available around the clock, 24/7, to assist patients in every possible way. We take pride in our commitment to patient care, ensuring that even when patients are at home, we assume full responsibility for their health and well-being. This level of dedication distinguishes us from other hospitals in the region.`,
    },
    {
        image: Images.affordability,
        title: "Affordability",
        description: "Affordability is a cornerstone of our practice. We are committed to providing healthcare services at very reasonable prices, always considering the financial circumstances of our patients to make quality care accessible to all."
    }, {
        image: Images.ethics,
        title: "Ethics",
        description: `Ethics form the most important foundation of ${BRAND.name}. Our team maintains an unwavering commitment to ethical standards at every level of care. Patients receive transparent and ethical treatment, and we never compromise on our principles.`
    }
]