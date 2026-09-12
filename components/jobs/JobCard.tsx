import { CalendarDays, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { whatsappUrl } from "@/lib/config";

type Job = {
  title: string;
  slug: string;
  organization: string;
  category: string;
  location: string;
  vacancies: string;
  qualification: string;
  lastDate: string;
  status: string;
};

const badgeStyles: Record<string, string> = {
  NEW: "bg-sky-100 text-sky-800",
  OPEN: "bg-emerald-100 text-emerald-800",
  "CLOSING SOON": "bg-amber-100 text-amber-900",
  CLOSED: "bg-slate-200 text-slate-700"
};

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className={`rounded-md px-2 py-1 text-xs font-black ${badgeStyles[job.status] || badgeStyles.OPEN}`}>{job.status}</span>
        <span className="text-xs font-bold text-slate-500">{job.category}</span>
      </div>
      <h2 className="mt-4 text-xl font-black text-brand-navy">{job.title}</h2>
      <p className="mt-2 text-sm font-semibold text-slate-600">{job.organization}</p>
      <div className="mt-4 grid gap-2 text-sm text-slate-600">
        <p className="flex items-center gap-2"><MapPin size={16} /> {job.location}</p>
        <p>Vacancies: <strong>{job.vacancies}</strong></p>
        <p>Qualification: <strong>{job.qualification}</strong></p>
        <p className="flex items-center gap-2"><CalendarDays size={16} /> Last date: <strong>{job.lastDate}</strong></p>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <ButtonLink href={`/government-jobs/${job.slug}`} variant="secondary">Details</ButtonLink>
        <ButtonLink href={whatsappUrl(`Hello, I need assistance with the ${job.title} application.`)}>Get Assistance</ButtonLink>
      </div>
    </article>
  );
}
