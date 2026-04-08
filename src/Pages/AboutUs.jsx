import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";


const AboutUs = () => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <MainHeader />
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">About Us</h1>
        <img
          src={require("../images/ridhan1.jpeg")}
          alt="Ridhaan Hospital Building"
          className="w-full h-64 object-cover rounded-lg mb-6 shadow"
        />
        <p className="text-gray-700 mb-4">
          Ridhaan Hospital is a state-of-the-art multi-specialty healthcare facility dedicated to providing world-class medical services with compassion, integrity, and excellence. Established in 2005, our hospital has grown to become a trusted name in healthcare, serving thousands of patients every year.
        </p>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          To deliver high-quality, patient-centered healthcare by combining advanced technology, skilled professionals, and a commitment to continuous improvement.
        </p>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Facilities</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>500+ beds with modern amenities</li>
          <li>24/7 Emergency & Trauma Care</li>
          <li>Advanced Diagnostic & Imaging Center</li>
          <li>Specialized ICUs (Cardiac, Neonatal, Surgical, Medical)</li>
          <li>Fully equipped Operation Theatres</li>
          <li>Pharmacy, Laboratory, and Blood Bank</li>
          <li>Dedicated Outpatient and Inpatient Departments</li>
        </ul>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Team</h2>
        <p className="text-gray-700 mb-4">
          Our team comprises over 200 experienced doctors, 400+ nurses, and a dedicated support staff. We believe in a multidisciplinary approach to healthcare, ensuring every patient receives personalized and holistic treatment.
        </p>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Why Choose Ridhaan Hospital?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Patient-first philosophy</li>
          <li>Cutting-edge medical technology</li>
          <li>Highly qualified and compassionate staff</li>
          <li>Comprehensive range of specialties and services</li>
          <li>Focus on safety, hygiene, and comfort</li>
        </ul>
        <p className="text-gray-700">
          At Ridhaan Hospital, we are committed to making a positive difference in the lives of our patients and the community. Your health and well-being are our top priorities.
        </p>
      </div>
    </div>
    <MainFooter />
  </div>
);

export default AboutUs;
