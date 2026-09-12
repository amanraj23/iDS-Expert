import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Career opportunities at iDS Expert."
};

const openings = [
  { title: "Application Support Executive", location: "Remote / Office", type: "Full-time", experience: "0-2 years" },
  { title: "Content Research Associate", location: "Remote", type: "Part-time", experience: "1+ years" }
];

export default function CareersPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="text-sm font-black uppercase text-brand-blue">Careers</p>
        <h1 className="mt-2 text-4xl font-black text-brand-navy">Current openings</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {openings.map((job) => (
            <article key={job.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-black text-brand-navy">{job.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{job.location} | {job.type} | {job.experience}</p>
              <h3 className="mt-5 font-black text-brand-navy">Responsibilities</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Assist users, track requests, research official updates, and maintain clear communication.</p>
              <h3 className="mt-5 font-black text-brand-navy">Requirements</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Good communication, attention to detail, and comfort with online forms and official websites.</p>
            </article>
          ))}
        </div>
        <form className="mt-10 grid gap-4 rounded-md border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-brand-navy">Apply for a role</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {["Full Name", "Mobile Number", "Email", "Role Interested In"].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-bold text-brand-navy">{label}<input className="min-h-12 rounded-md border border-slate-200 px-3" /></label>
            ))}
          </div>
          <label className="grid gap-2 text-sm font-bold text-brand-navy">Message<textarea className="min-h-28 rounded-md border border-slate-200 px-3 py-3" /></label>
          <button className="min-h-12 rounded-md bg-brand-gold px-5 py-3 text-sm font-black text-brand-navy">Submit Career Application</button>
        </form>
      </div>
    </section>
  );
}
