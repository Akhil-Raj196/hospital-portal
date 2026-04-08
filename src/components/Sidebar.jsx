import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/", icon: "🏠" },
    { name: "Patients", path: "/patients", icon: "🧑‍🤝‍🧑" },
    { name: "Doctors", path: "/doctors", icon: "🩺" },
    { name: "Staff", path: "/staff", icon: "👨‍⚕️" },
    { name: "Beds", path: "/beds", icon: "🛏️" },
    { name: "Appointments", path: "/appointments", icon: "📅" },
    { name: "Billing", path: "/billing", icon: "💳" },
    { name: "Pharmacy", path: "/pharmacy", icon: "💊" },
    { name: "Lab Reports", path: "/lab-reports", icon: "🧪" },
    { name: "Analytics", path: "/analytics", icon: "📊" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">🏥 HMS</h2>

      {menu.map((item) => (
        <Link key={item.path} to={item.path}>
          <div
            className={`flex items-center gap-3 p-2 rounded mb-2 cursor-pointer transition-colors duration-150 ${
              location.pathname === item.path
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-700 text-gray-200"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;