import PublicPageLayout from "../components/PublicPageLayout";

const ContactUs = () => (
  <PublicPageLayout contentClassName="flex items-center">
    <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-5 shadow-sm sm:p-8">
        <h1 className="mb-4 text-2xl font-bold text-blue-700 sm:text-3xl">Contact Us</h1>
        <p className="text-gray-700 mb-2">For appointments, queries, or feedback, please contact us at <a href="mailto:info@ridhaanhospital.com" className="text-blue-600 underline">info@ridhaanhospital.com</a> or call +91-1234567890.</p>
    </div>
  </PublicPageLayout>
);

export default ContactUs;
