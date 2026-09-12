import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <section className="section bg-white">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-black text-brand-navy">Terms and Conditions</h1>
        <div className="mt-6 grid gap-4 text-lg leading-8 text-slate-600">
          <p>iDS Expert provides private application assistance and information support. We are not a government website or government department.</p>
          <p>Users remain responsible for verifying eligibility, dates, fees, official instructions, and final submissions through official websites.</p>
          <p>Assistance does not guarantee selection, employment, exam qualification, approval, or acceptance of any application.</p>
          <p>Third-party official links are provided for user convenience and should be reviewed directly before submission or payment.</p>
        </div>
      </div>
    </section>
  );
}
