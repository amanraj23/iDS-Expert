import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" items={["We collect basic contact and application-related information to respond to assistance requests.", "We use information to communicate, prepare guidance, maintain request records, and improve service quality.", "MongoDB credentials and private applicant data must never be exposed publicly.", "Users can contact us to request corrections or removal of their submitted information where legally appropriate."]} />;
}

function LegalPage({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="section bg-white">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-black text-brand-navy">{title}</h1>
        <div className="mt-6 grid gap-4 text-lg leading-8 text-slate-600">
          {items.map((item) => <p key={item}>{item}</p>)}
        </div>
      </div>
    </section>
  );
}
