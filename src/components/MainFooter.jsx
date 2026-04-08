import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { emergencyContacts, newsLinks, specialityLinks } from "../data/siteData";

const socialItems = [
  { label: "Facebook", icon: "f" },
  { label: "Instagram", icon: "◎" },
  { label: "LinkedIn", icon: "in" },
  { label: "X", icon: "X" },
  { label: "YouTube", icon: "▶" },
];

const MainFooter = () => (
  <footer className="relative overflow-hidden bg-[#181415] text-white">
    <div className="pointer-events-none absolute inset-0 opacity-20">
      <div className="absolute -left-24 top-24 h-72 w-[42rem] rounded-full border border-white/20" />
      <div className="absolute left-1/4 top-0 h-[36rem] w-[36rem] rounded-full border border-white/10" />
      <div className="absolute right-0 top-12 h-[30rem] w-[34rem] rounded-full border border-white/10" />
    </div>

    <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1.1fr_2fr]">
        <div>
          <h3 className="mb-5 text-2xl font-bold">Emergency No</h3>
          <div className="space-y-5">
            {emergencyContacts.map((contact) => (
              <div key={contact.city} className="flex items-center gap-4">
                <img src={logo} alt="" className="h-12 w-12 rounded-full border border-white/10 object-cover" />
                <div>
                  <div className="text-sm font-semibold text-fuchsia-400">{contact.city}</div>
                  <div className="text-sm text-white/80">{contact.phone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-2xl font-bold">News & Media</h3>
          <div className="grid gap-3">
            {newsLinks.map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-white/80 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-2xl font-bold">Specialities</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {specialityLinks.map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-white/80 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap gap-3">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href="/"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-base font-bold text-slate-900 transition hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/70">
              ©2026 Ridhaan Hospitals and Healthcare Research Private Limited. All Rights Reserved.
            </p>
          </div>

          <div className="text-sm text-white/70 lg:text-right">
            <div>Developed and Maintained by Ingeniousolutions</div>
            <div className="mt-4 flex flex-wrap gap-4 lg:justify-end">
              <Link to="/terms-conditions" className="transition hover:text-white">Terms & Conditions</Link>
              <Link to="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
              <Link to="/payment-policy" className="transition hover:text-white">Payment Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default MainFooter;
