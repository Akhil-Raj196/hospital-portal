import { Link } from "react-router-dom";

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

const MainHeader = () => (
  <header className="w-full bg-blue-800 text-white py-4 px-8 flex items-center justify-between shadow fixed top-0 left-0 z-50" style={{position: 'sticky'}}>
    <Link to="/main" className="text-2xl font-bold flex items-center gap-2 hover:underline hover:text-blue-200 transition">
      <span role="img" aria-label="hospital">🏥</span> Ridhaan Hospital
    </Link>
    <nav className="flex gap-6 items-center">
      {navLinks.map(link => (
        <Link
          key={link.path}
          to={link.path}
          className="hover:underline hover:text-blue-200 transition"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  </header>
);

export default MainHeader;
