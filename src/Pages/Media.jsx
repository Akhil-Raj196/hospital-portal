import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

const Media = () => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <MainHeader />
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Media</h1>
        <p className="text-gray-700 mb-2">Latest news, press releases, and media coverage about Ridhaan Hospital.</p>
      </div>
    </div>
    <MainFooter />
  </div>
);

export default Media;
