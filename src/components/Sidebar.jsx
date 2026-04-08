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
    <aside className="border-b border-gray-800 bg-gray-900 p-3 text-white sm:overflow-visible lg:sticky lg:top-0 lg:h-screen lg:w-60 lg:border-b-0">
      <div className="flex flex-row sm:flex-col w-full">
        <h2 className="mb-4 flex-shrink-0 pr-4 text-xl font-bold sm:mb-6 sm:text-2xl sm:pr-0">🏥 HMS</h2>
        <nav className="flex w-full gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {menu.map((item) => (
            <Link key={item.path} to={item.path} className="min-w-max flex-1 lg:min-w-0">
              <div
                className={`flex items-center gap-2 rounded p-2 text-sm whitespace-nowrap transition-colors duration-150 sm:gap-3 sm:text-base
                  ${location.pathname === item.path
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-700 text-gray-200"
                  }`}
              >
                <span className="text-lg sm:text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
