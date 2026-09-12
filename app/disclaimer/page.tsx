import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <section className="section bg-white">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-black text-brand-navy">Disclaimer</h1>
        <div className="mt-6 grid gap-4 text-lg leading-8 text-slate-600">
          <p>iDS Expert is an independent private application assistance service. It is not affiliated with, endorsed by, or operated by any government department unless explicitly stated.</p>
          <p>We do not claim guaranteed government jobs, guaranteed selection, guaranteed examination qualification, or guaranteed approval.</p>
          <p>Official notification and application links are labeled separately from our assistance service. Users should verify all important details through official sources.</p>
        </div>
      </div>
    </section>
  );
}
