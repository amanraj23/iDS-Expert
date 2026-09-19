import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

const groups = [
  { title: "Company", links: [["Home", "/"], ["About", "/about"], ["Our Motivation", "/our-motivation"], ["Services", "/services"], ["Client Reviews", "/client-reviews"], ["Careers", "/careers"], ["Contact", "/contact"]] },
  { title: "Applications", links: [["Government Jobs", "/government-jobs"], ["Application Forms", "/application-forms"], ["Latest Jobs", "/government-jobs"], ["Closing Soon", "/government-jobs?status=closing-soon"]] },
  { title: "Support", links: [["FAQ", "/faq"], ["Application Assistance", "/assistance"], ["Contact", "/contact"]] },
  { title: "Legal", links: [["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms-and-conditions"], ["Disclaimer", "/disclaimer"]] }
];

export function Footer() {
  return (
    <footer className="border-t border-brand-gold/20 bg-[#fbfaf4]">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <Image src="/logo.png" alt="iDS Expert" width={190} height={108} className="h-20 w-auto object-contain" />
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">{siteConfig.description}</p>
          <p className="mt-4 text-sm font-bold text-brand-navy">Phone / WhatsApp: {siteConfig.phone}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-black text-brand-navy">{group.title}</h2>
              <div className="mt-4 grid gap-3">
                {group.links.map(([label, href]) => (
                  <Link key={href + label} href={href} className="text-sm text-slate-600 hover:text-brand-gold">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-brand-gold/20 bg-brand-navy py-5">
        <p className="container text-xs leading-5 text-white/80">
          This website is operated by an independent private application assistance service and is not a government website or government department. Users should verify important information through the official government website before submitting applications or making payments.
        </p>
      </div>
    </footer>
  );
}
