import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

const ArtClinic = () => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <MainHeader />
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Art Clinic</h1>
        <p className="text-gray-700 mb-2">Our Art Clinic offers advanced reproductive treatments and personalized care for every family.</p>
      </div>
    </div>
    <MainFooter />
  </div>
);

export default ArtClinic;
