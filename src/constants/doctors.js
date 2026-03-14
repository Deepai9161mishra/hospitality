import { BRAND } from './brand';

// Doctor images from public/assets
const menImage = '/assets/men.jpg';
const womenImage = '/assets/women.jpg';

export const doctors = [
  {
    slug: 'cardiology',
    name: 'Dr. Rajesh Verma',
    qualifications: 'MBBS, MD Medicine, DM Cardiology',
    image: menImage,
    specialisation: '',
    info: 'Cardiology',
    param: 'dr-rajesh-verma',
    description: `Dr. Rajesh Verma is a Senior Consultant Cardiologist with over 18 years of experience. He specializes in interventional cardiology and heart failure management. Based at ${BRAND.name}, Mumbai, he is committed to providing comprehensive cardiac care.`,
    sections: [
      {
        title: 'Education and Training',
        items: [
          'DM Cardiology from a premier medical institute',
          'MD Medicine from Mumbai University',
          'MBBS from Grant Medical College, Mumbai',
        ],
      },
      {
        title: 'Areas of Expertise',
        items: [
          'Interventional Cardiology & Angioplasty',
          'Heart Failure Management',
          'Electrophysiology and Arrhythmia',
          'Preventive Cardiology',
        ],
      },
    ],
  },
  {
    slug: 'orthopedics-surgery',
    name: 'Dr. Priya Deshmukh',
    qualifications: 'MBBS, MS Orthopedics, Fellowship in Joint Replacement',
    image: womenImage,
    specialisation: '',
    info: 'Orthopedics & Joint Replacement',
    param: 'dr-priya-deshmukh',
    description: `Dr. Priya Deshmukh is an experienced Orthopedic and Joint Replacement Surgeon with 14 years of clinical practice. She is dedicated to restoring mobility and improving quality of life for patients at ${BRAND.name}, Mumbai.`,
    sections: [
      {
        title: 'Education',
        items: [
          'MS Orthopedics from Mumbai University',
          'MBBS from Topiwala National Medical College',
          'Fellowship in Joint Replacement Surgery',
        ],
      },
      {
        title: 'Clinical Expertise',
        items: [
          'Total Knee and Hip Replacement',
          'Arthroscopy and Sports Medicine',
          'Trauma and Fracture Care',
          'Spine and Back Pain Management',
        ],
      },
    ],
  },
  {
    slug: 'neurology',
    name: 'Dr. Amit Kulkarni',
    qualifications: 'MBBS, MD Medicine, DM Neurology',
    image: menImage,
    specialisation: '',
    info: 'Neurology',
    param: 'dr-amit-kulkarni',
    description: `Dr. Amit Kulkarni is a Consultant Neurologist with over 12 years of experience. He focuses on stroke care, epilepsy, and movement disorders. He practices at ${BRAND.name}, Mumbai.`,
    sections: [
      {
        title: 'Education',
        items: [
          'DM Neurology from a reputed institute',
          'MD Medicine from Maharashtra University',
          'MBBS from B.J. Medical College, Pune',
        ],
      },
      {
        title: 'Specialty Interests',
        items: [
          'Stroke Management and Thrombolysis',
          'Epilepsy and Seizure Disorders',
          'Parkinson\'s Disease',
          'Migraine and Headache Disorders',
        ],
      },
    ],
  },
  {
    slug: 'pediatrics-and-neonatology',
    name: 'Dr. Sneha Iyer',
    qualifications: 'MBBS, MD Pediatrics, Fellowship in Neonatology',
    image: womenImage,
    specialisation: '',
    info: 'Pediatrics & Neonatology',
    param: 'dr-sneha-iyer',
    description: `Dr. Sneha Iyer is a Pediatrician and Neonatologist with 11 years of experience. She provides comprehensive care for children from birth through adolescence at ${BRAND.name}, Mumbai.`,
    sections: [
      {
        title: 'Education',
        items: [
          'MD Pediatrics from Mumbai University',
          'Fellowship in Neonatology',
          'MBBS from Seth G.S. Medical College, Mumbai',
        ],
      },
      {
        title: 'Areas of Expertise',
        items: [
          'Newborn and NICU Care',
          'Childhood Infections and Vaccination',
          'Growth and Development',
          'Pediatric Emergency Care',
        ],
      },
    ],
  },
  {
    slug: 'internal-medicine',
    name: 'Dr. Vikram Joshi',
    qualifications: 'MBBS, MD Internal Medicine',
    image: menImage,
    specialisation: '',
    info: 'Internal Medicine',
    param: 'dr-vikram-joshi',
    description: `Dr. Vikram Joshi is a Senior Physician with over 20 years of experience in internal medicine. He manages chronic diseases, infections, and multi-system disorders at ${BRAND.name}, Mumbai.`,
    sections: [
      {
        title: 'Education',
        items: [
          'MD Internal Medicine from Mumbai University',
          'MBBS from Grant Medical College, Mumbai',
        ],
      },
      {
        title: 'Clinical Focus',
        items: [
          'Diabetes and Hypertension',
          'Infectious Diseases',
          'Geriatric Care',
          'Preventive Health Check-ups',
        ],
      },
    ],
  },
  {
    slug: 'gynecology',
    name: 'Dr. Anjali Patil',
    qualifications: 'MBBS, MS Obstetrics & Gynecology, Fellowship in Reproductive Medicine',
    image: womenImage,
    specialisation: '',
    info: 'Obstetrics, Gynecology & Infertility',
    param: 'dr-anjali-patil',
    description: `Dr. Anjali Patil is an Obstetrician and Gynecologist with 13 years of experience. She offers comprehensive women's health care, including high-risk pregnancy and fertility treatment at ${BRAND.name}, Mumbai.`,
    sections: [
      {
        title: 'Education',
        items: [
          'MS Obstetrics & Gynecology from Mumbai University',
          'Fellowship in Reproductive Medicine',
          'MBBS from L.T.M. Medical College, Mumbai',
        ],
      },
      {
        title: 'Expertise',
        items: [
          'Normal and High-Risk Pregnancies',
          'Laparoscopic Gynecology',
          'Infertility and IVF Support',
          'PCOS and Menstrual Disorders',
        ],
      },
    ],
  },
  {
    slug: 'pulmonology',
    name: 'Dr. Sanjay Rao',
    qualifications: 'MBBS, MD Chest & TB, FSM (Sleep Medicine)',
    image: menImage,
    specialisation: '',
    info: 'Pulmonology',
    param: 'dr-sanjay-rao',
    description: `Dr. Sanjay Rao is a Pulmonologist with 15 years of experience. He specializes in asthma, COPD, tuberculosis, and sleep disorders. He consults at ${BRAND.name}, Mumbai.`,
    sections: [
      {
        title: 'Education',
        items: [
          'MD Chest & TB from Mumbai University',
          'Fellowship in Sleep Medicine',
          'MBBS from Topiwala National Medical College',
        ],
      },
      {
        title: 'Areas of Expertise',
        items: [
          'Asthma and COPD',
          'Tuberculosis and Chest Infections',
          'Sleep Apnea and Sleep Disorders',
          'Critical Respiratory Care',
        ],
      },
    ],
  },
  {
    slug: 'laparoscopic-surgery',
    name: 'Dr. Mohan Nair',
    qualifications: 'MBBS, MS General Surgery, FMAS, FIAGES',
    image: menImage,
    specialisation: '',
    info: 'Laparoscopic & Minimal Invasive Surgery',
    param: 'dr-mohan-nair',
    description: `Dr. Mohan Nair is a General and Laparoscopic Surgeon with over 16 years of experience. He performs advanced minimal access surgeries at ${BRAND.name}, Mumbai.`,
    sections: [
      {
        title: 'Education',
        items: [
          'MS General Surgery from Mumbai University',
          'Fellowship in Minimal Access Surgery (FMAS, FIAGES)',
          'MBBS from Grant Medical College, Mumbai',
        ],
      },
      {
        title: 'Surgical Expertise',
        items: [
          'Laparoscopic Cholecystectomy and Hernia Repair',
          'Bariatric Surgery',
          'GI and Colorectal Surgery',
          'Emergency and Trauma Surgery',
        ],
      },
    ],
  },
  {
    slug: 'anaesthesia-critical-care',
    name: 'Dr. Kavita Menon',
    qualifications: 'MBBS, MD Anesthesiology, IDCCM',
    image: womenImage,
    specialisation: '',
    info: 'Anaesthesia & Critical Care',
    param: 'dr-kavita-menon',
    description: `Dr. Kavita Menon is an Anesthesiologist and Intensivist with 12 years of experience. She ensures patient safety during surgery and manages critical care at ${BRAND.name}, Mumbai.`,
    sections: [
      {
        title: 'Education',
        items: [
          'MD Anesthesiology from Mumbai University',
          'IDCCM (Critical Care)',
          'MBBS from Seth G.S. Medical College',
        ],
      },
      {
        title: 'Expertise',
        items: [
          'General and Regional Anesthesia',
          'ICU and Critical Care',
          'Pain Management',
          'Pre-operative Assessment',
        ],
      },
    ],
  },
  {
    slug: 'endocrinology',
    name: 'Dr. Meera Krishnan',
    qualifications: 'MBBS, MD Medicine, DM Endocrinology',
    image: womenImage,
    specialisation: '',
    info: 'Endocrinology & Diabetes',
    param: 'dr-meera-krishnan',
    description: `Dr. Meera Krishnan is an Endocrinologist and Diabetologist with 14 years of experience. She provides comprehensive care for diabetes, thyroid, and hormonal disorders at ${BRAND.name}, Mumbai.`,
    sections: [
      {
        title: 'Education',
        items: [
          'DM Endocrinology from a premier institute',
          'MD Medicine from Mumbai University',
          'MBBS from Grant Medical College, Mumbai',
        ],
      },
      {
        title: 'Clinical Expertise',
        items: [
          'Diabetes Mellitus (Type 1, Type 2, Gestational)',
          'Thyroid Disorders',
          'PCOS and Metabolic Syndrome',
          'Osteoporosis and Bone Health',
        ],
      },
    ],
  },
];
