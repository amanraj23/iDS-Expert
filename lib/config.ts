export const siteConfig = {
  name: "iDS Expert",
  tagline: "Aapki taiyari, hamari zimmedari",
  description:
    "Independent application assistance for government jobs, competitive exams, admissions, scholarships, and other online forms.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "7004574382",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "7004574382",
  email: process.env.NEXT_PUBLIC_EMAIL || "contact@idsexpert.com",
  address: process.env.NEXT_PUBLIC_ADDRESS || "India",
  hours: "Mon-Sat, 9:00 AM - 7:00 PM"
};

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "GOVERNMENT JOBS", href: "/government-jobs" },
  { label: "APPLICATION FORMS", href: "/application-forms" },
  { label: "CAREERS", href: "/careers" },
  { label: "OUR MOTIVATION", href: "/our-motivation" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/contact" }
];

export function whatsappUrl(message = "Hello, I need assistance with an application form.") {
  const cleanNumber = siteConfig.whatsapp.replace(/\D/g, "");
  return `https://wa.me/91${cleanNumber}?text=${encodeURIComponent(message)}`;
}
