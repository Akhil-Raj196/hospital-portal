const InfoPage = ({ page }) => (
  <section className="bg-[#f8fafc]">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-600">Hospital Page</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">{page.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{page.lead}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {page.bullets.map((item) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default InfoPage;
