import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/main", { replace: true });
  };

  return (
    <div className="mb-4 flex w-full flex-col gap-3 rounded-b-xl bg-white px-4 py-3 shadow sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="text-lg font-bold text-blue-700 sm:text-xl">
        Ridhaan Hospital Management System
      </div>
      <button
        className="self-start rounded-md border border-gray-200 px-4 py-2 font-semibold text-gray-600 transition hover:border-red-200 hover:text-red-600 sm:self-auto"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
