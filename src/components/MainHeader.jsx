import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About Us", path: "/about-us" },
  { name: "Departments", path: "/departments" },
  { name: "Patient & Visitors", path: "/patient-visitors" },
  { name: "Media", path: "/media" },
  { name: "Art Clinic", path: "/art-clinic" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Career", path: "/career" },
  { name: "Admin", path: "/login" },
];

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-800 text-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/main" className="flex items-center gap-2 text-lg font-bold transition hover:text-blue-200 sm:text-2xl">
          <span role="img" aria-label="hospital">🏥</span>
          <span>Ridhaan Hospital</span>
        </Link>
        <button
          type="button"
          className="rounded-md border border-blue-300 px-3 py-2 text-sm font-semibold md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium transition hover:text-blue-200 lg:text-base"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      {isOpen && (
        <nav className="border-t border-blue-700 bg-blue-900 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="rounded-md px-2 py-2 text-sm font-medium transition hover:bg-blue-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
