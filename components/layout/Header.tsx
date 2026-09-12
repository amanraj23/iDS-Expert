"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig, whatsappUrl } from "@/lib/config";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="hidden border-b border-slate-100 bg-brand-navy py-2 text-xs font-bold text-white lg:block">
        <div className="container flex items-center justify-between gap-4">
          <p>Independent private application assistance service</p>
          <div className="flex items-center gap-5">
            <a className="inline-flex items-center gap-2 hover:text-brand-gold" href={`tel:${siteConfig.phone}`}>
              <Phone size={14} /> {siteConfig.phone}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-brand-gold" href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={14} /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>
      <div className="container flex min-h-[74px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="iDS Expert home">
          <Image
            src="/logo.png"
            alt="iDS Expert"
            width={210}
            height={140}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs font-black text-slate-700 transition hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={whatsappUrl()} variant="outline" className="h-11 w-11 px-0" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </ButtonLink>
          <ButtonLink href="/assistance">Get Assistance</ButtonLink>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-brand-navy lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container grid gap-2 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-bold text-slate-700 hover:bg-brand-sky">
                {item.label}
              </Link>
            ))}
            <div className="grid gap-2 pt-2 sm:grid-cols-2">
              <ButtonLink href="/assistance" className="w-full">Get Assistance</ButtonLink>
              <ButtonLink href={whatsappUrl()} variant="secondary" className="w-full" target="_blank" rel="noreferrer">WhatsApp</ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
