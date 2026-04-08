import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { emergencyContacts, specialityLinks } from "../data/siteData";

const HomePage = () => (
  <div>
    <section className="bg-gradient-to-r from-slate-50 via-cyan-50 to-fuchsia-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
            Advanced care. Faster access. Better recovery.
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Hospital website structure with premium navigation, footer, and routed sections.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            This homepage now matches the overall direction of the reference: a clean medical header, dropdown navigation,
            emergency contact access, and a dense informational footer with linked pages.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/medical-specialities" className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-700">
              Explore Specialities
            </Link>
            <Link to="/contact-us" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-900">
              Contact Hospital
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-2xl">
          <img src={logo} alt="Hospital brand" className="mx-auto h-40 w-40 object-contain" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {emergencyContacts.map((contact) => (
              <div key={contact.city} className="rounded-2xl bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">{contact.city}</div>
                <div className="mt-1 text-sm text-slate-600">{contact.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-600">Featured</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Key Medical Specialities</h2>
        </div>
        <Link to="/medical-specialities" className="text-sm font-semibold text-cyan-700">
          View all
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {specialityLinks.slice(0, 6).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-lg font-bold text-cyan-700">
              +
            </div>
            <h3 className="text-xl font-bold text-slate-900">{item.label}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Structured route and content section ready for more detailed speciality-specific information.
            </p>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default HomePage;
