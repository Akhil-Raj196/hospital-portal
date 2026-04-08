
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/main";
  };
  return (
    <div className="w-full bg-white shadow flex items-center justify-between px-8 py-3 mb-4">
      <div className="text-xl font-bold text-blue-700">🏥 Ridhaan Hospital Management System</div>
      <button
        className="text-gray-600 hover:text-red-600 font-semibold transition"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
