
const MainFooter = () => (
  <footer className="w-full bg-blue-900 text-white pt-8 pb-4 px-8 mt-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-lg mb-2">Quick Links</h3>
        <ul className="space-y-1 text-sm">
          <li><a href="/about-us" className="hover:underline">About Us</a></li>
          <li><a href="/departments" className="hover:underline">Departments</a></li>
          <li><a href="/patient-visitors" className="hover:underline">Patient & Visitors</a></li>
          <li><a href="/media" className="hover:underline">Media</a></li>
          <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
          <li><a href="/career" className="hover:underline">Career</a></li>
        </ul>
      </div>
      {/* Contact Info */}
      <div>
        <h3 className="font-bold text-lg mb-2">Contact</h3>
        <p className="text-sm">🏥 Ridhaan Hospital<br/>123 Health Ave, City, Country</p>
        <p className="text-sm mt-1">📞 +91-1234567890</p>
        <p className="text-sm">✉️ <a href="mailto:info@ridhaanhospital.com" className="underline">info@ridhaanhospital.com</a></p>
      </div>
      {/* Social Media */}
      <div>
        <h3 className="font-bold text-lg mb-2">Follow Us</h3>
        <div className="flex gap-4 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400">🌐</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">🐦</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400">📸</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-300">💼</a>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-blue-200 mt-6">
      &copy; {new Date().getFullYear()} Ridhaan Hospital. All rights reserved.
    </div>
  </footer>
);

export default MainFooter;
