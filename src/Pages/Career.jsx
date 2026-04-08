import PublicPageLayout from "../components/PublicPageLayout";

const Career = () => (
  <PublicPageLayout contentClassName="flex items-center">
    <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-5 shadow-sm sm:p-8">
        <h1 className="mb-4 text-2xl font-bold text-blue-700 sm:text-3xl">Career</h1>
        <p className="text-gray-700 mb-2">Join our team! Explore current job openings and career opportunities at Ridhaan Hospital.</p>
    </div>
  </PublicPageLayout>
);

export default Career;
