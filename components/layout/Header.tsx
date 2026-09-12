"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, Search, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig, whatsappUrl } from "@/lib/config";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container flex min-h-[76px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="iDS Expert home">
          <Image
            src="/logo.svg"
            alt="iDS Expert"
            width={170}
            height={96}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs font-bold text-slate-700 transition hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-navy transition hover:bg-brand-sky" aria-label="Search">
            <Search size={20} />
          </button>
          <ButtonLink href={`tel:${siteConfig.phone}`} variant="outline" className="px-4">
            <Phone size={16} /> Call Us
          </ButtonLink>
          <ButtonLink href={whatsappUrl()} variant="secondary" className="px-4">
            WhatsApp
          </ButtonLink>
          <ButtonLink href="/assistance">Get Assistance</ButtonLink>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-brand-navy xl:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <nav className="container grid gap-2 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-bold text-slate-700 hover:bg-brand-sky">
                {item.label}
              </Link>
            ))}
            <div className="grid gap-2 pt-2 sm:grid-cols-3">
              <ButtonLink href="/assistance" className="w-full">Get Assistance</ButtonLink>
              <ButtonLink href={`tel:${siteConfig.phone}`} variant="outline" className="w-full">Call Us</ButtonLink>
              <ButtonLink href={whatsappUrl()} variant="secondary" className="w-full">WhatsApp</ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
