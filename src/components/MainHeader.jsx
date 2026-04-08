import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { emergencyContacts, navItems } from "../data/siteData";

const MainHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img src={logo} alt="Hospital logo" className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16" />
          <div className="leading-tight">
            <div className="text-2xl font-black uppercase tracking-tight text-cyan-600">Ridhaan</div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-600">Hospitals</div>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {navItems.map((item) => (
            <div key={item.path} className="group relative">
              <Link to={item.path} className="flex items-center gap-2 text-[15px] font-medium text-slate-900 transition hover:text-cyan-700">
                <span>{item.label}</span>
                {item.children ? <span className="text-xs">▼</span> : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full z-20 mt-4 w-72 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-cyan-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <div className="group relative">
            <Link
              to="/emergency-contact"
              className="flex items-center gap-2 bg-red-600 px-6 py-5 text-sm font-bold text-white transition hover:bg-red-700"
            >
              <span>Emergency Contact</span>
              <span className="text-xs">▼</span>
            </Link>
            <div className="invisible absolute right-0 top-full z-20 mt-3 w-72 rounded-2xl bg-white p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              {emergencyContacts.map((contact) => (
                <div key={contact.city} className="rounded-xl px-3 py-2 text-sm text-slate-700">
                  <div className="font-semibold text-slate-900">{contact.city}</div>
                  <div>{contact.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
        >
          Menu
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <div key={item.path} className="rounded-2xl border border-slate-100 p-3">
                <Link to={item.path} className="block text-sm font-semibold text-slate-900" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mt-2 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="text-sm text-slate-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="rounded-2xl bg-red-600 p-4 text-white">
              <Link to="/emergency-contact" className="block text-sm font-bold" onClick={() => setMobileOpen(false)}>
                Emergency Contact
              </Link>
              <div className="mt-3 space-y-2 text-sm">
                {emergencyContacts.map((contact) => (
                  <div key={contact.city}>
                    <div className="font-semibold">{contact.city}</div>
                    <div>{contact.phone}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default MainHeader;
