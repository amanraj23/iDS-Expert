import { ArrowRight, CalendarDays, FileSearch, PhoneCall, Search, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { categories, jobs, services } from "@/lib/data";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-white">
        <div className="container grid gap-8 py-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:py-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-brand-blue/15 bg-brand-sky px-3 py-2 text-xs font-black uppercase text-brand-blue">
              <ShieldCheck size={16} /> Independent assistance portal
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-brand-navy sm:text-5xl">
              Get Assistance With Government Job & Online Application Forms
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Find important application forms, check eligibility and deadlines, and get professional assistance with the online application process.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/assistance">Get Application Assistance <ArrowRight size={18} /></ButtonLink>
              <ButtonLink href="/government-jobs" variant="outline">Explore Applications</ButtonLink>
            </div>
            <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ["8+", "service categories"],
                ["24 hr", "request response"],
                ["100%", "private service"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-black text-brand-navy">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase text-slate-500">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 max-w-2xl">
              <Disclaimer />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-md border border-slate-200 bg-white p-4 shadow-soft">
              <label className="sr-only" htmlFor="hero-search">Search applications</label>
              <div className="flex min-h-12 items-center gap-3 rounded-md border border-slate-200 px-4">
                <Search className="text-brand-blue" size={20} />
                <input id="hero-search" className="w-full outline-none" placeholder="Search for a job, exam or application form..." />
              </div>
              <div className="mt-4 divide-y divide-slate-200">
                {jobs.map((job) => (
                  <article key={job.slug} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-md bg-brand-gold px-2 py-1 text-[11px] font-black text-brand-navy">{job.status}</span>
                      <span className="text-xs font-bold text-slate-500">Last date: {job.lastDate}</span>
                    </div>
                    <h2 className="mt-3 text-base font-black leading-6 text-brand-navy">{job.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{job.organization} | {job.location}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-slate-200 bg-white p-4 shadow-soft">
              <p className="text-sm font-black uppercase text-brand-blue">Popular Services</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {services.slice(0, 4).map((service) => (
                  <div key={service.slug} className="flex items-center gap-3 rounded-md bg-brand-sky px-3 py-3">
                    <service.icon className="shrink-0 text-brand-blue" size={20} />
                    <span className="text-sm font-bold leading-5 text-brand-navy">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-8 text-white">
        <div className="container grid gap-4 md:grid-cols-3">
          {[
            [FileSearch, "Find forms", "Search jobs, exams, admissions and scholarships."],
            [CalendarDays, "Track dates", "Review start dates, last dates, fees and status."],
            [PhoneCall, "Get support", `Call or WhatsApp ${siteConfig.phone}.`]
          ].map(([Icon, title, text]) => (
            <div key={String(title)} className="flex gap-4 rounded-md border border-white/10 bg-white/5 p-4">
              <Icon className="mt-1 shrink-0 text-brand-gold" size={24} />
              <div>
                <p className="font-black">{title as string}</p>
                <p className="mt-1 text-sm leading-6 text-white/75">{text as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-brand-blue">Services</p>
              <h2 className="mt-2 text-3xl font-black text-brand-navy">Application help, handled carefully</h2>
            </div>
            <ButtonLink href="/services" variant="outline">View All Services</ButtonLink>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.slug} className="rounded-md border border-slate-200 bg-white p-5 shadow-soft">
                <service.icon className="text-brand-blue" size={30} />
                <h3 className="mt-4 text-lg font-black text-brand-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-brand-blue">Latest Applications</p>
              <h2 className="mt-2 text-3xl font-black text-brand-navy">Browse important forms</h2>
            </div>
            <ButtonLink href="/application-forms" variant="outline">Open Directory</ButtonLink>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {jobs.map((job) => (
              <article key={job.slug} className="rounded-md border border-slate-200 p-5">
                <span className="rounded-md bg-brand-gold px-2 py-1 text-xs font-black text-brand-navy">{job.status}</span>
                <h3 className="mt-4 text-xl font-black text-brand-navy">{job.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{job.organization} | {job.location}</p>
                <p className="mt-3 text-sm font-bold text-slate-700">Last date: {job.lastDate}</p>
                <ButtonLink href={`/government-jobs/${job.slug}`} variant="secondary" className="mt-5">View Details</ButtonLink>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.slice(0, 8).map((category) => <span key={category} className="rounded-md bg-brand-sky px-3 py-2 text-sm font-bold text-brand-navy">{category}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase text-brand-blue">How It Works</p>
            <h2 className="mt-2 text-3xl font-black text-brand-navy">A simple, organised process</h2>
            <p className="mt-4 leading-7 text-slate-600">The service is arranged around clear steps so users know where official information ends and where private assistance begins.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Search the application or job",
              "Check eligibility, dates and fees",
              "Review official notification links",
              "Request private assistance if needed"
            ].map((step, index) => (
              <div key={step} className="rounded-md border border-slate-200 bg-white p-5 shadow-soft">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-gold text-sm font-black text-brand-navy">{index + 1}</span>
                <h3 className="mt-4 font-black text-brand-navy">{step}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Clear labels, official links, and assistance CTAs keep every action easy to understand.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
