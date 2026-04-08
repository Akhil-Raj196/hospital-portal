import PublicPageLayout from "../components/PublicPageLayout";


const departmentData = [
  {
    name: "Cardiology",
    image: require("../images/cardiology.jpeg"),
    desc: "Advanced heart care, diagnostics, and interventions by expert cardiologists."
  },
  {
    name: "Neurology",
    image: require("../images/neurology.jpeg"),
    desc: "Comprehensive treatment for brain, spine, and nervous system disorders."
  },
  {
    name: "Orthopedics",
    image: require("../images/orthopedic.jpeg"),
    desc: "Specialized care for bones, joints, and musculoskeletal injuries."
  },
  {
    name: "Pediatrics",
    image: require("../images/pediatric.jpeg"),
    desc: "Compassionate healthcare for infants, children, and adolescents."
  },
  {
    name: "Emergency",
    image: require("../images/emergency.jpeg"),
    desc: "24/7 emergency and trauma care with rapid response teams."
  },
  {
    name: "Dermatology",
    image: require("../images/about1.jpeg"),
    desc: "Diagnosis and treatment of skin, hair, and nail conditions."
  },
  {
    name: "Radiology",
    image: require("../images/ridhan2.jpeg"),
    desc: "State-of-the-art imaging and diagnostic services."
  },
  {
    name: "Oncology",
    image: require("../images/ridhan3.jpeg"),
    desc: "Comprehensive cancer care and advanced therapies."
  },
];

const Departments = () => (
  <PublicPageLayout>
    <div className="mx-auto max-w-6xl">
      <h1 className="mb-8 text-2xl font-bold text-blue-700 sm:text-3xl">Departments</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {departmentData.map((dept) => (
            <div key={dept.name} className="flex flex-col items-center rounded-xl bg-white p-4 shadow-sm">
              <img
                src={dept.image}
                alt={dept.name}
                className="mb-4 h-40 w-full rounded border object-cover"
              />
              <h2 className="text-lg font-semibold text-blue-800 mb-2">{dept.name}</h2>
              <p className="text-gray-600 text-center">{dept.desc}</p>
            </div>
          ))}
      </div>
    </div>
  </PublicPageLayout>
);

export default Departments;
