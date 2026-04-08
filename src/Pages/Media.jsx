import PublicPageLayout from "../components/PublicPageLayout";

const Media = () => (
  <PublicPageLayout contentClassName="flex items-center">
    <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-5 shadow-sm sm:p-8">
        <h1 className="mb-4 text-2xl font-bold text-blue-700 sm:text-3xl">Media</h1>
        <p className="text-gray-700 mb-2">Latest news, press releases, and media coverage about Ridhaan Hospital.</p>
    </div>
  </PublicPageLayout>
);

export default Media;
