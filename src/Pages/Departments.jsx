import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";


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
  <div className="flex flex-col min-h-screen bg-gray-50">
    <MainHeader />
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8 text-blue-700">Departments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {departmentData.map((dept) => (
            <div key={dept.name} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img
                src={dept.image}
                alt={dept.name}
                className="w-full h-40 object-cover rounded mb-4 border"
              />
              <h2 className="text-lg font-semibold text-blue-800 mb-2">{dept.name}</h2>
              <p className="text-gray-600 text-center">{dept.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <MainFooter />
  </div>
);

export default Departments;
