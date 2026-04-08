import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import PublicPageLayout from "../components/PublicPageLayout";

const Main = () => {
  const navigate = useNavigate();
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleAdminLogin = (e) => {
    e.preventDefault();
    const normalizedUsername = username.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (normalizedUsername === "demo" && normalizedPassword === "demo123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/", { replace: true });
    } else {
      setError("Invalid credentials. Use demo/demo123");
    }
  };

  return (
    <PublicPageLayout contentClassName="px-0 pb-0 pt-16 sm:pt-20">
      <div className="flex flex-1 flex-col items-center">
        <ImageSlider />
        <div className="m-0.5 w-full overflow-x-hidden whitespace-nowrap border-b border-red-200 bg-red-50">
          <div className="animate-scroll inline-block px-2 py-1 text-sm text-red-600 sm:text-base lg:text-lg">
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
        <div className="mx-auto mt-8 max-w-3xl px-4 text-center sm:px-6">
          <h1 className="mb-4 text-3xl font-bold text-blue-700 sm:text-4xl">Welcome to Ridhaan Hospital Management</h1>
          <p className="mb-4 text-base text-gray-700 sm:text-lg">
            Manage patients, staff, appointments, billing, and more with a beautiful, powerful, and easy-to-use interface.
          </p>
        </div>
        {showAdminLogin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
            <form
              onSubmit={handleAdminLogin}
              className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg sm:p-8"
            >
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
                onClick={() => { setShowAdminLogin(false); setError(""); }}
              >
                &times;
              </button>
              <h2 className="mb-6 text-center text-2xl font-bold text-blue-700">Admin Login</h2>
              {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
              <input
                className="mb-4 w-full rounded border p-3"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <input
                className="mb-4 w-full rounded border p-3"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full rounded bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
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
    </PublicPageLayout>
  );
};

export default Main;
