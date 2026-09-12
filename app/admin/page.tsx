import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin Dashboard" };

const metrics = ["Total enquiries", "New enquiries", "Active applications", "Completed applications", "Government jobs", "Upcoming deadlines"];
const modules = ["Manage Applications", "Manage Enquiries", "Manage Users", "Content Management"];

export default function AdminPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="text-sm font-black uppercase text-brand-blue">Admin</p>
        <h1 className="mt-2 text-4xl font-black text-brand-navy">Admin dashboard</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={metric} className="rounded-md border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-sm font-bold text-slate-500">{metric}</p>
              <p className="mt-2 text-3xl font-black text-brand-navy">{index === 0 ? "0" : "--"}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {modules.map((module) => (
            <article key={module} className="rounded-md border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-black text-brand-navy">{module}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Secure API routes are prepared for this area and should be connected to production authentication before launch.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
