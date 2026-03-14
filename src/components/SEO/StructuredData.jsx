import { Helmet } from 'react-helmet-async';
import { BRAND } from '../../constants/brand';

/**
 * Structured Data Component for JSON-LD Schema
 */

// Hospital/Organization Schema
export const HospitalSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": BRAND.name,
    "alternateName": `${BRAND.name} Multispeciality Hospital`,
    "url": BRAND.siteUrl,
    "logo": `${BRAND.siteUrl}/logo.png`,
    "image": `${BRAND.siteUrl}/logo.png`,
    "description": BRAND.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address,
      "addressLocality": BRAND.location,
      "addressRegion": BRAND.region,
      "postalCode": "400020",
      "addressCountry": "IN"
    },
    "telephone": `+91-${BRAND.phone}`,
    "email": BRAND.email,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": `+91-${BRAND.phone}`,
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BRAND.geo.latitude,
      "longitude": BRAND.geo.longitude
    },
    "sameAs": [BRAND.social.instagram, BRAND.social.youtube],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "medicalSpecialty": [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Gynecology",
      "Pediatrics",
      "Urology",
      "Endocrinology",
      "Pulmonology",
      "Internal Medicine",
      "General Surgery",
      "Plastic Surgery",
      "Pathology",
      "Nephrology",
      "Anesthesiology"
    ],
    "availableService": [
      { "@type": "MedicalProcedure", "name": "24/7 Emergency Care" },
      { "@type": "MedicalProcedure", "name": "ICU & Critical Care" },
      { "@type": "MedicalProcedure", "name": "Dialysis Services" },
      { "@type": "MedicalProcedure", "name": "Surgical Services" },
      { "@type": "MedicalProcedure", "name": "Diagnostic Imaging" }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Doctor/Physician Schema
export const DoctorSchema = ({ doctor }) => {
  if (!doctor) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doctor.name,
    "description": doctor.description,
    "medicalSpecialty": doctor.info,
    "jobTitle": doctor.info,
    "worksFor": {
      "@type": "Hospital",
      "name": BRAND.name,
      "url": BRAND.siteUrl
    },
    "url": `${BRAND.siteUrl}/doctors/${doctor.param}`,
    ...(doctor.qualifications && { "hasCredential": doctor.qualifications })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Medical Service Schema
export const ServiceSchema = ({ service, type = 'service' }) => {
  if (!service) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.title,
    "description": service.info || service.subtitle,
    "procedureType": "NoninvasiveProcedure",
    "provider": {
      "@type": "Hospital",
      "name": BRAND.name,
      "url": BRAND.siteUrl
    },
    "url": `${BRAND.siteUrl}/${type}s/${Object.keys(service)[0] || ''}`
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Department Schema
export const DepartmentSchema = ({ department, slug }) => {
  if (!department) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    "name": department.title,
    "description": department.info,
    "url": `${BRAND.siteUrl}/departments/${slug}`,
    "provider": {
      "@type": "Hospital",
      "name": BRAND.name,
      "url": BRAND.siteUrl
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }) => {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// FAQ Schema (useful for services/department pages)
export const FAQSchema = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default {
  HospitalSchema,
  DoctorSchema,
  ServiceSchema,
  DepartmentSchema,
  BreadcrumbSchema,
  FAQSchema
};
