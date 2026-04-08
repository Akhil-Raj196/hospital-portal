export const emergencyContacts = [
  { city: "Ratlam", phone: "+91 **********" },
  // { city: "Vadodara", phone: "+91 9033212345" },
  // { city: "Anand", phone: "+91 8980085200" },
];

export const specialityLinks = [
  { label: "Cardiac Sciences", path: "/specialities/cardiac-sciences" },
  { label: "Critical Care & Emergency", path: "/specialities/critical-care-emergency" },
  { label: "Clinical Diagnosis & Health Checkups", path: "/specialities/clinical-diagnosis-health-checkups" },
  { label: "Clinics", path: "/specialities/clinics" },
  { label: "Comprehensive Cancer Care", path: "/specialities/comprehensive-cancer-care" },
  { label: "Dental Care", path: "/specialities/dental-care" },
  { label: "Dermatology & Cosmetology", path: "/specialities/dermatology-cosmetology" },
  { label: "ENT", path: "/specialities/ent" },
  { label: "Genetics", path: "/specialities/genetics" },
  { label: "Gastrointestinal Care", path: "/specialities/gastrointestinal-care" },
  { label: "Interventional Radiology", path: "/specialities/interventional-radiology" },
  { label: "IVF", path: "/specialities/ivf" },
  { label: "Lifestyle Disorders", path: "/specialities/lifestyle-disorders" },
  { label: "Liver Care", path: "/specialities/liver-care" },
  { label: "Nephrology & Urology", path: "/specialities/nephrology-urology" },
  { label: "Neuro Sciences", path: "/specialities/neuro-sciences" },
  { label: "Orthopaedics, Trauma & Spine Care", path: "/specialities/orthopaedics-trauma-spine-care" },
  { label: "Obstetrics, IVF, Gynec and Gynec-Onco", path: "/specialities/obstetrics-ivf-gynec-gynec-onco" },
  { label: "Pediatrics", path: "/specialities/pediatrics" },
  { label: "Pulmonology", path: "/specialities/pulmonology" },
  { label: "Physiotherapy & Rehabilitation", path: "/specialities/physiotherapy-rehabilitation" },
  { label: "Psychology", path: "/specialities/psychology" },
  { label: "Reconstructive, Plastic, and Limb Salvage Surgery", path: "/specialities/reconstructive-plastic-limb-salvage-surgery" },
];

export const newsLinks = [
  { label: "News", path: "/news" },
  { label: "Events", path: "/events" },
  { label: "Gallery", path: "/gallery" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Insurance Partners", path: "/insurance-partners" },
  { label: "Certifications", path: "/certifications" },
  { label: "Corporate Tie-Ups", path: "/corporate-tie-ups" },
  { label: "Bio-medical Waste Management", path: "/bio-medical-waste-management" },
  { label: "Career", path: "/career" },
  { label: "Surgical Marvels", path: "/surgical-marvels" },
];

export const doctorLinks = [
  { label: "Our Doctors", path: "/doctors" },
  { label: "Heart Specialists", path: "/doctors/heart-specialists" },
  { label: "Neuro Specialists", path: "/doctors/neuro-specialists" },
  { label: "Book a Consultation", path: "/doctors/book-consultation" },
];

export const navItems = [
  {
    label: "Medical Specialities",
    path: "/medical-specialities",
    children: specialityLinks.slice(0, 6),
  },
  {
    label: "Doctors",
    path: "/doctors",
    children: doctorLinks.slice(1),
  },
  { label: "About Us", path: "/about-us" },
  { label: "International Patients", path: "/international-patients" },
  { label: "Contact us", path: "/contact-us" },
];

const basePages = [
  {
    path: "/medical-specialities",
    title: "Medical Specialities",
    lead: "Discover multidisciplinary care programs built around expert consultants, advanced diagnostics, and coordinated treatment plans.",
    bullets: [
      "Super-speciality teams for cardiac, neuro, oncology, and critical care services.",
      "Integrated diagnostics, procedures, and rehabilitation under one care network.",
      "Patient-first treatment pathways designed for both local and international visitors.",
    ],
  },
  {
    path: "/doctors",
    title: "Doctors",
    lead: "Meet experienced consultants and specialists focused on evidence-based treatment and long-term recovery.",
    bullets: [
      "Senior consultants across cardiology, neurology, orthopaedics, pediatrics, and critical care.",
      "Collaborative case reviews for complex and high-risk conditions.",
      "Appointment coordination and second-opinion support for planned treatments.",
    ],
  },
  {
    path: "/doctors/heart-specialists",
    title: "Heart Specialists",
    lead: "Dedicated cardiac experts for preventive cardiology, diagnostics, interventional procedures, and post-care monitoring.",
    bullets: [
      "Comprehensive heart screening and preventive consultation.",
      "Timely evaluation for chest pain, rhythm disorders, and structural conditions.",
      "Recovery support with dietary and rehabilitation guidance.",
    ],
  },
  {
    path: "/doctors/neuro-specialists",
    title: "Neuro Specialists",
    lead: "Specialist care for brain, spine, and nerve disorders with coordinated diagnosis and treatment planning.",
    bullets: [
      "Neurology and neuro-surgery collaboration for complex cases.",
      "Stroke response, seizure care, and chronic neurological condition management.",
      "Recovery planning with rehabilitation and follow-up assessments.",
    ],
  },
  {
    path: "/doctors/book-consultation",
    title: "Book a Consultation",
    lead: "Share your concern, preferred speciality, and timing to arrange a specialist consultation.",
    bullets: [
      "In-person and remote consultation pathways for first-time patients.",
      "Pre-visit document review for faster appointments.",
      "Support for referral transfers and international patient coordination.",
    ],
  },
  {
    path: "/about-us",
    title: "About Us",
    lead: "A modern hospital platform built around reliable care delivery, transparent communication, and specialist access.",
    bullets: [
      "Focused on high-quality treatment with responsive patient services.",
      "Technology-led workflows for diagnostics, admission, billing, and follow-up.",
      "Compassionate care culture supported by clinical discipline and safety standards.",
    ],
  },
  {
    path: "/international-patients",
    title: "International Patients",
    lead: "End-to-end support for overseas patients, from medical travel planning to treatment scheduling and follow-up care.",
    bullets: [
      "Pre-arrival case review and indicative treatment planning.",
      "Travel assistance, accommodation coordination, and interpreter support.",
      "Structured discharge summaries and virtual follow-up options.",
    ],
  },
  {
    path: "/contact-us",
    title: "Contact Us",
    lead: "Reach our care coordinators for appointments, emergency guidance, second opinions, and general hospital information.",
    bullets: [
      "Fast routing to the right department based on urgency and speciality.",
      "Dedicated support for appointment booking and patient services.",
      "Emergency contact escalation for urgent cases.",
    ],
  },
  {
    path: "/emergency-contact",
    title: "Emergency Contact",
    lead: "Immediate access to emergency numbers and urgent care guidance across our service locations.",
    bullets: [
      "City-specific emergency lines for faster response handling.",
      "Critical care and emergency team coordination support.",
      "Guidance for first-contact information before arrival.",
    ],
  },
  {
    path: "/terms-conditions",
    title: "Terms & Conditions",
    lead: "Website access, patient communication expectations, and service usage terms are described on this page.",
    bullets: [
      "General access and usage expectations for public hospital pages.",
      "Communication, appointments, and service-request handling guidelines.",
      "A dedicated legal route linked directly from the footer.",
    ],
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    lead: "This route is ready for your privacy and data-handling policy with a structured, readable content layout.",
    bullets: [
      "Patient data confidentiality and responsible information handling.",
      "Website form submissions and communication consent expectations.",
      "Direct public route for future compliance-ready content updates.",
    ],
  },
  {
    path: "/payment-policy",
    title: "Payment Policy",
    lead: "Billing terms, refunds, advance payments, and digital transaction guidelines can be maintained here.",
    bullets: [
      "Clear outline for online and offline payment expectations.",
      "Refund and cancellation references for hospital services.",
      "Dedicated policy route available through the footer.",
    ],
  },
];

const specialityPages = specialityLinks.map((item) => ({
  path: item.path,
  title: item.label,
  lead: `${item.label} services designed around specialist consultation, timely diagnostics, and personalized treatment pathways.`,
  bullets: [
    `Specialist-led assessment and planning for ${item.label.toLowerCase()}.`,
    "Access to modern diagnostics, procedures, and supportive therapies.",
    "Coordinated recovery planning with follow-up guidance for patients and families.",
  ],
}));

const newsPages = newsLinks.map((item) => ({
  path: item.path,
  title: item.label,
  lead: `${item.label} updates, highlights, and hospital information presented through a dedicated information page.`,
  bullets: [
    "Latest institutional updates and patient-facing announcements.",
    "Curated content that can be expanded into rich CMS-driven sections later.",
    "Consistent public route available directly from the footer navigation.",
  ],
}));

export const allPages = [...basePages, ...specialityPages, ...newsPages];
