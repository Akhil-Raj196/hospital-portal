import { Link } from "react-router-dom";

const MainFooter = () => (
  <footer className="mt-8 w-full bg-blue-900 px-4 pb-4 pt-8 text-white sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
      <div>
        <h3 className="mb-2 text-lg font-bold">Quick Links</h3>
        <ul className="space-y-1 text-sm">
          <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
          <li><Link to="/departments" className="hover:underline">Departments</Link></li>
          <li><Link to="/patient-visitors" className="hover:underline">Patient & Visitors</Link></li>
          <li><Link to="/media" className="hover:underline">Media</Link></li>
          <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
          <li><Link to="/career" className="hover:underline">Career</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold">Contact</h3>
        <p className="text-sm">🏥 Ridhaan Hospital<br />123 Health Ave, City, Country</p>
        <p className="mt-1 text-sm">📞 +91-1234567890</p>
        <p className="text-sm">
          ✉️ <a href="mailto:info@ridhaanhospital.com" className="underline">info@ridhaanhospital.com</a>
        </p>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold">Follow Us</h3>
        <div className="flex gap-4 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-300">🌐</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-300">🐦</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-300">📸</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-200">💼</a>
        </div>
      </div>
    </div>
    <div className="mt-6 text-center text-xs text-blue-200">
      &copy; {new Date().getFullYear()} Ridhaan Hospital. All rights reserved.
    </div>
  </footer>
);

export default MainFooter;
