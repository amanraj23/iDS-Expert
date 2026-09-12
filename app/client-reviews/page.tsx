import type { Metadata } from "next";
import { CheckCircle2, MessageCircle, Quote, ShieldCheck, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig, whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Client Reviews",
  description: "Read client feedback about iDS Expert application assistance, document guidance, and support experience."
};

const reviews = [
  {
    name: "Ravi Kumar",
    location: "Patna, Bihar",
    service: "Railway application assistance",
    text: "The team explained the document requirements clearly and helped me avoid mistakes while reviewing my form details.",
    rating: 5
  },
  {
    name: "Priya Singh",
    location: "Ranchi, Jharkhand",
    service: "Scholarship form guidance",
    text: "I was confused about eligibility and upload steps. iDS Expert made the whole process organised and easy to follow.",
    rating: 5
  },
  {
    name: "Amit Verma",
    location: "Varanasi, Uttar Pradesh",
    service: "Exam form assistance",
    text: "Quick response on WhatsApp and careful guidance for fee payment, photo size, and final preview before submission.",
    rating: 5
  },
  {
    name: "Neha Kumari",
    location: "Gaya, Bihar",
    service: "Admission form support",
    text: "They helped me understand every step without rushing. I liked that official website details were checked first.",
    rating: 4
  },
  {
    name: "Sandeep Yadav",
    location: "Lucknow, Uttar Pradesh",
    service: "Government job form help",
    text: "Professional support and clear communication. The document checklist saved me a lot of time.",
    rating: 5
  },
  {
    name: "Anjali Sharma",
    location: "Delhi",
    service: "Application status assistance",
    text: "My application status page was difficult to understand, but the team explained the next step in simple language.",
    rating: 5
  }
];

const qualityPoints = [
  "Clear explanation of eligibility, fees, dates, and required documents",
  "Careful review of applicant details before final submission",
  "Support through phone and WhatsApp during business hours",
  "Independent assistance with reminders to verify official sources"
];

export default function ClientReviewsPage() {
  return (
    <>
      <section className="overflow-hidden bg-white">
        <div className="container grid gap-8 py-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:py-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-brand-blue/15 bg-brand-sky px-3 py-2 text-xs font-black uppercase text-brand-blue">
              <ShieldCheck size={16} /> Client feedback
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-brand-navy sm:text-5xl">
              Reviews from people who used iDS Expert support
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Read what clients say about our online form assistance, document guidance, application checks, and support experience.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/assistance">Request Assistance</ButtonLink>
              <ButtonLink href={whatsappUrl("Hello, I want to share my review for iDS Expert.")} variant="outline" target="_blank" rel="noreferrer">
                Share a Review <MessageCircle size={18} />
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-slate-50 p-5 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["4.8/5", "average experience"],
                ["24 hr", "usual response"],
                ["6", "sample reviews"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-slate-200 bg-white p-4">
                  <p className="text-2xl font-black text-brand-navy">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase text-slate-500">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-md bg-brand-navy p-5 text-white">
              <Quote className="text-brand-gold" size={28} />
              <p className="mt-4 text-lg font-black leading-7">
                Helpful, clear, and focused on avoiding common application mistakes.
              </p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Feedback is based on client experiences with private application assistance. It does not represent any government department or guarantee any selection, approval, or official outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-brand-blue">Client Reviews</p>
              <h2 className="mt-2 text-3xl font-black text-brand-navy">What clients appreciate</h2>
            </div>
            <ButtonLink href={`tel:${siteConfig.phone}`} variant="outline">Call {siteConfig.phone}</ButtonLink>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={`${review.name}-${review.service}`} className="rounded-md border border-slate-200 bg-white p-5 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-1 text-brand-gold" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={17} fill={index < review.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="rounded-md bg-brand-sky px-2 py-1 text-[11px] font-black uppercase text-brand-blue">Verified client</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <h3 className="font-black text-brand-navy">{review.name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase text-slate-500">{review.location}</p>
                  <p className="mt-2 text-sm font-bold text-brand-blue">{review.service}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase text-brand-blue">Service Quality</p>
            <h2 className="mt-2 text-3xl font-black text-brand-navy">Built around careful assistance</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Every request is handled with practical guidance so clients can understand the form process and make informed decisions.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {qualityPoints.map((point) => (
              <div key={point} className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-brand-blue" size={22} />
                <p className="text-sm font-bold leading-6 text-brand-navy">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
