"use client";

import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      setForm(initialState);
      setStatus("success");
      setMessage("Message sent. We will contact you soon.");
      return;
    }

    const data = await response.json().catch(() => null);
    setStatus("error");
    setMessage(data?.error || "Could not send message. Please try again.");
  }

  function updateField(name: keyof typeof initialState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-md border border-slate-200 bg-white p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" name="name" value={form.name} onChange={updateField} required />
        <Field label="Mobile Number" name="phone" value={form.phone} onChange={updateField} required />
        <Field label="Email" name="email" value={form.email} onChange={updateField} type="email" />
        <Field label="Subject" name="subject" value={form.subject} onChange={updateField} required />
      </div>
      <label className="grid gap-2 text-sm font-bold text-brand-navy">
        Message
        <textarea
          className="min-h-32 rounded-md border border-slate-200 px-3 py-3"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
        />
      </label>
      <button
        type="submit"
        className="min-h-12 rounded-md bg-brand-gold px-5 py-3 text-sm font-black text-brand-navy transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {message ? <p className={`text-sm font-bold ${status === "success" ? "text-emerald-700" : "text-red-600"}`}>{message}</p> : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof typeof initialState;
  value: string;
  onChange: (name: keyof typeof initialState, value: string) => void;
  type?: string;
  required?: boolean;
};

function Field({ label, name, value, onChange, type = "text", required = false }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-brand-navy">
      {label}
      <input
        className="min-h-12 rounded-md border border-slate-200 px-3"
        type={type}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        required={required}
      />
    </label>
  );
}
