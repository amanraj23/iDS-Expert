import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Government job, exam, recruitment, scholarship, admission, document, and status assistance services."
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="text-sm font-black uppercase text-brand-blue">Services</p>
        <h1 className="mt-2 text-4xl font-black text-brand-navy">Online application assistance services</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Professional support for users who need clarity around eligibility, documents, deadlines, and online application steps.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.slug} className="rounded-md border border-slate-200 bg-white p-6 shadow-soft">
              <service.icon className="text-brand-blue" size={32} />
              <h2 className="mt-4 text-xl font-black text-brand-navy">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              <div className="mt-5 grid gap-2">
                <ButtonLink href={`/services#${service.slug}`} variant="outline">Learn More</ButtonLink>
                <ButtonLink href="/assistance">Get Assistance</ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
