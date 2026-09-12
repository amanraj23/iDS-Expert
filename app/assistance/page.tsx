import type { Metadata } from "next";
import { AssistanceForm } from "@/components/forms/AssistanceForm";
import { Disclaimer } from "@/components/ui/Disclaimer";

export const metadata: Metadata = {
  title: "Request Application Assistance",
  description: "Submit a request for help with government job, exam, admission, scholarship, or other online application forms."
};

export default function AssistancePage() {
  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase text-brand-blue">Get Assistance</p>
          <h1 className="mt-2 text-4xl font-black text-brand-navy">Request application assistance</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">Share basic details only. We do not ask for unnecessary sensitive information, and document uploads should be requested only when needed for a specific application process.</p>
          <div className="mt-6">
            <Disclaimer />
          </div>
        </div>
        <AssistanceForm />
      </div>
    </section>
  );
}
