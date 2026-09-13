import type { Metadata } from "next";
import { CheckCircle2, FileText, HeartHandshake, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FramedImage } from "@/components/ui/FramedImage";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about iDS Expert, our business motive, and the inspiration behind our work."
};

const motives = [
  "Make online application processes simple, clear, and accessible for every applicant.",
  "Help users understand documents, dates, eligibility, fees, and official instructions before submission.",
  "Provide careful private assistance while encouraging users to verify important details from official sources."
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="container grid gap-10 py-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:py-16">
          <div className="animate-fade-up">
            <p className="text-sm font-black uppercase text-brand-blue">About iDS Expert</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight text-brand-navy sm:text-5xl">
              Our motive is to make online applications easier for everyone
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              iDS Expert is an independent private assistance service for government job forms, competitive exam applications, admissions, scholarships, and other online form processes. We work to reduce confusion so applicants can move through important steps with confidence and care.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/assistance">Get Assistance</ButtonLink>
              <ButtonLink href="/services" variant="outline">View Services</ButtonLink>
            </div>
          </div>

          <div className="grid gap-4">
            {motives.map((motive) => (
              <div key={motive} className="hover-lift animate-fade-up flex gap-4 rounded-md border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-brand-blue" size={24} />
                <p className="leading-7 text-slate-700">{motive}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-3">
          {[
            [FileText, "Clarity", "We explain application requirements in simple language so users can understand what is needed before they proceed."],
            [ShieldCheck, "Responsibility", "We keep our private assistance separate from official government information and encourage final verification."],
            [HeartHandshake, "Support", "We assist users with patience, document readiness, form review, and step-by-step guidance."]
          ].map(([Icon, title, text]) => (
            <article key={String(title)} className="hover-lift animate-fade-up rounded-md border border-slate-200 bg-white p-6 shadow-soft">
              <Icon className="text-brand-blue" size={30} />
              <h2 className="mt-4 text-xl font-black text-brand-navy">{title as string}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text as string}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <FramedImage
            src="/shailendra-kumar-ojha.png"
            alt="Shri Shailendra Kumar Ojha"
            title="श्री शैलेन्द्र कुमार ओझा"
            width={840}
            height={1020}
            subtitle="1970-2025"
            className="animate-fade-up"
          />
          <div className="animate-fade-up">
            <p className="text-sm font-black uppercase text-brand-blue">Our Inspiration</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-brand-navy">श्री शैलेन्द्र कुमार ओझा (1970-2025)</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              iDS Expert is inspired by the values of discipline, learning, service, and steady self-improvement. Shri Shailendra Kumar Ojha ji&apos;s thoughts remind us that meaningful change is built through small improvements made every day.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              His inspiration guides our business motive: to help people move forward with clarity, honesty, and confidence whenever they face complex online application processes.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="text-sm font-black uppercase text-brand-blue">Inspiration Note</p>
            <h2 className="mt-2 text-3xl font-black text-brand-navy">Small daily improvement creates big change</h2>
            <div className="mt-5 grid gap-4 text-lg leading-9 text-slate-700">
              <p>यदि हम अपने जीवन में प्रतिदिन 1% सुधार करते हैं, तो साल में जीवन पूरी तरह बदल जायेगा।</p>
              <p>यदि हम प्रतिदिन थोड़ा सीखते हैं, पढ़ते हैं, और अपने गुणों में सुधार करते हैं, तो कुछ महीनों में बड़ा परिवर्तन दिखाई देता है।</p>
              <p>यही विचार iDS Expert के काम की प्रेरणा है: हर दिन बेहतर सेवा, बेहतर मार्गदर्शन, और बेहतर जिम्मेदारी।</p>
            </div>
          </div>
          <FramedImage
            src="/inspiration-note.png"
            alt="Handwritten inspiration note by Shri Shailendra Kumar Ojha"
            title="प्रेरणा नोट"
            width={1100}
            height={900}
            subtitle="प्रतिदिन सुधार, सीखना, और जिम्मेदारी।"
            fallbackLines={[
              "यदि हम अपने जीवन में प्रतिदिन 1% सुधार करते हैं तो 1 साल में जीवन पूरी तरह बदल जायेगा।",
              "यदि हम केवल 20 हफ्ते प्रतिदिन पढ़ते हैं तो कम से कम 24 पुस्तकें पढ़ते हैं।",
              "यदि हम अपने गुणों में केवल 1% सुधार करते हैं तो 6 महीने में बड़ा परिवर्तन हो जायेगा।",
              "यदि हम प्रतिदिन कुछ बातें किसी भाषा में सीखते हैं तो 6 माह में 180 बातें सीखते हैं।"
            ]}
            className="animate-fade-up"
          />
        </div>
      </section>
    </>
  );
}
