import type { Metadata } from "next";
import { Search } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { categories, jobs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Application Forms",
  description: "Search government jobs, SSC, UPSC, banking, railway, defence, police, scholarship, and admission application forms."
};

export default function ApplicationFormsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="text-sm font-black uppercase text-brand-blue">Application Forms</p>
        <h1 className="mt-2 text-4xl font-black text-brand-navy">Searchable form directory</h1>
        <div className="mt-8 flex min-h-12 items-center gap-3 rounded-md border border-slate-200 bg-white px-4 shadow-soft">
          <Search className="text-brand-blue" size={20} />
          <input className="w-full outline-none" placeholder="Search application forms..." />
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-md bg-white px-3 py-2 text-sm font-bold text-brand-navy shadow-sm">{category}</span>
          ))}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {jobs.map((job) => (
            <article key={job.slug} className="rounded-md border border-slate-200 bg-white p-5 shadow-soft">
              <span className="rounded-md bg-brand-sky px-2 py-1 text-xs font-black text-brand-blue">{job.category}</span>
              <h2 className="mt-4 text-xl font-black text-brand-navy">{job.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{job.description}</p>
              <p className="mt-4 text-sm font-bold text-slate-700">Last date: {job.lastDate} | {job.status}</p>
              <div className="mt-5 grid gap-2">
                <ButtonLink href={`/government-jobs/${job.slug}`} variant="outline">Details</ButtonLink>
                <ButtonLink href={job.officialApplicationUrl} variant="secondary">Apply Officially</ButtonLink>
                <ButtonLink href="/assistance">Get Assistance</ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
