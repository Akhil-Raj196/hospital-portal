import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

const ContactUs = () => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <MainHeader />
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Contact Us</h1>
        <p className="text-gray-700 mb-2">For appointments, queries, or feedback, please contact us at <a href="mailto:info@ridhaanhospital.com" className="text-blue-600 underline">info@ridhaanhospital.com</a> or call +91-1234567890.</p>
      </div>
    </div>
    <MainFooter />
  </div>
);

export default ContactUs;
