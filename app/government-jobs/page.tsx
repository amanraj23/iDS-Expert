import type { Metadata } from "next";
import { Search } from "lucide-react";
import { JobCard } from "@/components/jobs/JobCard";
import { jobs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Government Jobs",
  description: "Search government job applications, important dates, eligibility, fees, and official links."
};

export default function GovernmentJobsPage() {
  const filters = ["Qualification", "Location", "Department", "Job category", "Application status", "Last date"];

  return (
    <section className="section">
      <div className="container">
        <p className="text-sm font-black uppercase text-brand-blue">Government Jobs</p>
        <h1 className="mt-2 text-4xl font-black text-brand-navy">Search job applications and deadlines</h1>
        <div className="mt-8 rounded-md border border-slate-200 bg-white p-4 shadow-soft">
          <div className="flex min-h-12 items-center gap-3 rounded-md border border-slate-200 px-4">
            <Search className="text-brand-blue" size={20} />
            <input className="w-full outline-none" placeholder="Search by title, department, category, qualification or location..." />
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {filters.map((filter) => (
              <select key={filter} className="min-h-11 rounded-md border border-slate-200 px-3 text-sm text-slate-600" aria-label={filter}>
                <option>{filter}</option>
              </select>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <select className="min-h-11 rounded-md border border-slate-200 px-3 text-sm font-bold text-brand-navy" aria-label="Sort jobs">
              <option>Latest</option>
              <option>Closing Soon</option>
              <option>Recently Added</option>
            </select>
          </div>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {jobs.map((job) => <JobCard key={job.slug} job={job} />)}
        </div>
      </div>
    </section>
  );
}
