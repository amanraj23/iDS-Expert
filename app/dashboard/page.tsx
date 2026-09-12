import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = { title: "User Dashboard" };

const statuses = ["REQUEST RECEIVED", "UNDER REVIEW", "DOCUMENTS REQUIRED", "FORM IN PROGRESS", "FORM COMPLETED", "SUBMITTED", "COMPLETED", "CANCELLED"];

export default function DashboardPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="text-sm font-black uppercase text-brand-blue">Dashboard</p>
        <h1 className="mt-2 text-4xl font-black text-brand-navy">Track assistance requests</h1>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {["Submitted requests", "Pending requirements", "Support"].map((item) => (
            <div key={item} className="rounded-md border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-black text-brand-navy">{item}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Sign in integration can connect this panel to each user&apos;s saved requests and profile information.</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-md border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-brand-navy">Application status flow</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {statuses.map((status) => <span key={status} className="rounded-md bg-brand-sky px-3 py-2 text-xs font-black text-brand-navy">{status}</span>)}
          </div>
          <ButtonLink href="/contact" className="mt-6">Contact Support</ButtonLink>
        </div>
      </div>
    </section>
  );
}
