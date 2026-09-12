import Image from "next/image";
import { ArrowRight, CheckCircle2, Search } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { categories, jobs, services } from "@/lib/data";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      <section className="bg-white">
        <div className="container grid min-h-[calc(100vh-76px)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-brand-blue">Government Job & Online Form Assistance Portal</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Get Assistance With Government Job & Online Application Forms
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Find important application forms, check eligibility and deadlines, and get professional assistance with the online application process.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/assistance">Get Application Assistance <ArrowRight size={18} /></ButtonLink>
              <ButtonLink href="/government-jobs" variant="outline">Explore Applications</ButtonLink>
            </div>
            <div className="mt-6 max-w-2xl">
              <Disclaimer />
            </div>
          </div>
          <div className="rounded-md border border-slate-200 bg-brand-sky p-5 shadow-soft">
            <div className="flex items-center justify-center rounded-md bg-white p-6">
              <Image src="/logo.svg" alt="iDS Expert logo" width={420} height={236} className="h-auto w-full max-w-[420px] object-contain" priority />
            </div>
            <div className="mt-5 rounded-md bg-white p-4">
              <label className="sr-only" htmlFor="hero-search">Search applications</label>
              <div className="flex min-h-12 items-center gap-3 rounded-md border border-slate-200 px-4">
                <Search className="text-brand-blue" size={20} />
                <input id="hero-search" className="w-full outline-none" placeholder="Search for a job, exam or application form..." />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Government Jobs", "Recruitment Forms", "Exam Applications", "Admission Forms", "Scholarship Forms", "Other Online Applications"].map((item) => (
                  <span key={item} className="rounded-md bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-navy text-white">
        <div className="container grid gap-8 md:grid-cols-3">
          {["Clear eligibility and deadline guidance", "Official links separated from our service", `Call or WhatsApp ${siteConfig.phone}`].map((item) => (
            <div key={item} className="flex gap-3">
              <CheckCircle2 className="mt-1 shrink-0 text-brand-gold" />
              <p className="text-lg font-bold">{item}</p>
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
            {services.slice(0, 4).map((service) => (
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
    </>
  );
}
