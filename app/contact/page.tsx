import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig, whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact iDS Expert by phone, WhatsApp, email, or contact form for online application assistance."
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase text-brand-blue">Contact</p>
          <h1 className="mt-2 text-4xl font-black text-brand-navy">Talk to iDS Expert</h1>
          <div className="mt-8 grid gap-4">
            <p className="flex gap-3 rounded-md bg-white p-4 shadow-sm"><Phone className="text-brand-blue" /> {siteConfig.phone}</p>
            <p className="flex gap-3 rounded-md bg-white p-4 shadow-sm"><Mail className="text-brand-blue" /> {siteConfig.email}</p>
            <p className="flex gap-3 rounded-md bg-white p-4 shadow-sm"><MapPin className="text-brand-blue" /> {siteConfig.address}</p>
            <p className="rounded-md bg-white p-4 shadow-sm">Business hours: {siteConfig.hours}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`tel:${siteConfig.phone}`}>Call Us</ButtonLink>
            <ButtonLink href={whatsappUrl()} variant="secondary">WhatsApp</ButtonLink>
          </div>
        </div>
        <form className="grid gap-4 rounded-md border border-slate-200 bg-white p-6 shadow-soft">
          {["Full Name", "Mobile Number", "Email", "Subject"].map((label) => (
            <label key={label} className="grid gap-2 text-sm font-bold text-brand-navy">
              {label}
              <input className="min-h-12 rounded-md border border-slate-200 px-3" />
            </label>
          ))}
          <label className="grid gap-2 text-sm font-bold text-brand-navy">
            Message
            <textarea className="min-h-32 rounded-md border border-slate-200 px-3 py-3" />
          </label>
          <button className="min-h-12 rounded-md bg-brand-gold px-5 py-3 text-sm font-black text-brand-navy">Send Message</button>
        </form>
      </div>
    </section>
  );
}
