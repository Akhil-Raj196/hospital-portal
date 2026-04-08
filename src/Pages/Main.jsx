import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import ImageSlider from "../components/ImageSlider";

const Main = () => {
  const navigate = useNavigate();
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");



  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (username === "demo" && password === "demo123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setError("Invalid credentials. Use demo/demo123");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <MainHeader />
      <div className="flex-1 flex flex-col items-center justify-center">
        <ImageSlider />
        <div className="m-0.5 w-full overflow-x-auto whitespace-nowrap bg-red-50 border-b border-red-200">
          <div className="inline-block animate-scroll text-lg text-red-600 px-2 py-1">
            Address: 80 Feet Rd, Central Plaza Colony, Ratnapuri, Ratlam, Madhya Pradesh 457001 | Phone: 07412 264 520
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            display: inline-block;
            min-width: 100%;
            animation: scroll 18s linear infinite;
          }
        `}</style>
        <div className="mt-8 max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-4 text-blue-700">Welcome to Ridhaan Hospital Management</h1>
          <p className="text-lg text-gray-700 mb-4">
            Manage patients, staff, appointments, billing, and more with a beautiful, powerful, and easy-to-use interface.
          </p>
        </div>
        {showAdminLogin && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <form
              onSubmit={handleAdminLogin}
              className="bg-white p-8 rounded shadow w-80 relative"
            >
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
                onClick={() => { setShowAdminLogin(false); setError(""); }}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Admin Login</h2>
              {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
              <input
                className="w-full border p-2 mb-4 rounded"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <input
                className="w-full border p-2 mb-4 rounded"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
              >
                Login
              </button>
              <div className="mt-4 text-xs text-gray-500 text-center">
                Demo: demo / demo123
              </div>
            </form>
          </div>
        )}
      </div>
      <MainFooter />
    </div>
  );
};

export default Main;
