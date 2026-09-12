import type { Metadata } from "next";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about iDS Expert application assistance, official links, documents, fees, and service limits."
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <section className="section bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        <p className="text-sm font-black uppercase text-brand-blue">FAQ</p>
        <h1 className="mt-2 text-4xl font-black text-brand-navy">Common questions</h1>
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-md border border-slate-200 p-5">
              <h2 className="text-lg font-black text-brand-navy">{faq.question}</h2>
              <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
