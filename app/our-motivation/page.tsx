import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Motivation",
  description: "Making online applications simpler, clearer and more accessible."
};

export default function MotivationPage() {
  return (
    <section className="section bg-white">
      <div className="container max-w-4xl">
        <p className="text-sm font-black uppercase text-brand-blue">Our Motivation</p>
        <h1 className="mt-2 text-4xl font-black text-brand-navy">Making Online Applications Simpler, Clearer and More Accessible</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">iDS Expert exists to reduce confusion around online application processes. Many users miss opportunities because deadlines, eligibility, documents, fee steps, and official portals are difficult to track. Our purpose is to help people understand the process and complete forms with greater confidence.</p>
        <p className="mt-4 text-lg leading-8 text-slate-600">We keep official government links clearly separate from our private assistance service, and we encourage every applicant to verify important information through official sources before final submission.</p>
      </div>
    </section>
  );
}
