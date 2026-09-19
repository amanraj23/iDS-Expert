import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

const styles = {
  primary: "bg-brand-gold text-brand-navy shadow-soft hover:bg-[#efbd57]",
  secondary: "bg-brand-navy text-white hover:bg-brand-blue",
  outline: "border border-brand-gold/35 bg-white text-brand-navy hover:border-brand-gold hover:bg-brand-sky",
  ghost: "text-brand-navy hover:bg-brand-sky"
};

export function ButtonLink({ href, children, variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
