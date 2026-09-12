import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { jobs } from "@/lib/data";
import { whatsappUrl } from "@/lib/config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  return {
    title: job?.title || "Application Details",
    description: job?.description || "Application details and assistance options."
  };
}

export default async function JobDetailsPage({ params }: Props) {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  if (!job) notFound();

  const facts = [
    ["Organization", job.organization],
    ["Department", job.department],
    ["Category", job.category],
    ["Location", job.location],
    ["Vacancies", job.vacancies],
    ["Qualification", job.qualification],
    ["Age limit", job.ageLimit],
    ["Application fee", job.applicationFee],
    ["Start date", job.startDate],
    ["Last date", job.lastDate],
    ["Status", job.status],
    ["Selection process", job.selectionProcess],
    ["Salary / pay scale", job.salary]
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Government Jobs", item: "/government-jobs" },
      { "@type": "ListItem", position: 2, name: job.title, item: `/government-jobs/${job.slug}` }
    ]
  };

  return (
    <section className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="rounded-md border border-slate-200 bg-white p-6 shadow-soft">
          <span className="rounded-md bg-brand-gold px-2 py-1 text-xs font-black text-brand-navy">{job.status}</span>
          <h1 className="mt-4 text-4xl font-black text-brand-navy">{job.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{job.description}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {facts.map(([label, value]) => (
              <div key={label} className="rounded-md bg-slate-50 p-4">
                <p className="text-xs font-black uppercase text-slate-500">{label}</p>
                <p className="mt-1 font-bold text-brand-navy">{value}</p>
              </div>
            ))}
          </div>
          <h2 className="mt-8 text-2xl font-black text-brand-navy">Required documents</h2>
          <ul className="mt-4 grid gap-2 text-slate-700">
            {job.requiredDocuments.map((document) => <li key={document}>- {document}</li>)}
          </ul>
          <h2 className="mt-8 text-2xl font-black text-brand-navy">How to apply</h2>
          <p className="mt-3 leading-7 text-slate-600">Review eligibility and official instructions first. Use the official application website for direct submission, or request iDS Expert assistance if you want help understanding and completing the online process.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <ButtonLink href={job.officialNotificationUrl} variant="outline">Official Notification</ButtonLink>
            <ButtonLink href={job.officialApplicationUrl} variant="secondary">Official Website</ButtonLink>
            <ButtonLink href="/assistance">Get Our Assistance</ButtonLink>
          </div>
        </article>
        <aside className="h-fit rounded-md border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-xl font-black text-brand-navy">Need help with this application?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Our team can help you understand required details, documents, and online steps.</p>
          <div className="mt-5 grid gap-3">
            <ButtonLink href="/assistance">Get Application Assistance</ButtonLink>
            <ButtonLink href={whatsappUrl(`Hello, I need assistance with the ${job.title} application.`)} variant="secondary">WhatsApp CTA</ButtonLink>
          </div>
          <div className="mt-5">
            <Disclaimer />
          </div>
        </aside>
      </div>
    </section>
  );
}
