"use client";

import { useState } from "react";

const initialState = {
  applicantName: "",
  phone: "",
  email: "",
  city: "",
  applicationName: "",
  dateOfBirth: "",
  qualification: "",
  preferredContactMethod: "WhatsApp",
  message: "",
  consent: false
};

type AssistanceFormState = typeof initialState;

export function AssistanceForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [reference, setReference] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const response = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await response.json();
    if (response.ok) {
      setReference(data.referenceNumber);
      setForm(initialState);
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-md border border-slate-200 bg-white p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" name="applicantName" value={form.applicantName} onChange={setForm} required />
        <Field label="Mobile Number" name="phone" value={form.phone} onChange={setForm} required />
        <Field label="Email" name="email" value={form.email} onChange={setForm} type="email" />
        <Field label="City" name="city" value={form.city} onChange={setForm} required />
        <Field label="Application / Job Name" name="applicationName" value={form.applicationName} onChange={setForm} required />
        <Field label="Date of Birth" name="dateOfBirth" value={form.dateOfBirth} onChange={setForm} type="date" />
        <Field label="Qualification" name="qualification" value={form.qualification} onChange={setForm} />
        <label className="grid gap-2 text-sm font-bold text-brand-navy">
          Preferred Contact Method
          <select
            className="min-h-12 rounded-md border border-slate-200 px-3 text-sm font-medium text-slate-700"
            value={form.preferredContactMethod}
            onChange={(event) => setForm((current) => ({ ...current, preferredContactMethod: event.target.value }))}
          >
            <option>WhatsApp</option>
            <option>Phone</option>
            <option>Email</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-brand-navy">
        Message
        <textarea
          className="min-h-28 rounded-md border border-slate-200 px-3 py-3 text-sm font-medium text-slate-700"
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
        />
      </label>
      <label className="flex gap-3 text-sm leading-6 text-slate-700">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4"
          checked={form.consent}
          onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))}
          required
        />
        I understand that this is an independent application assistance service and not a government department.
      </label>
      <button className="min-h-12 rounded-md bg-brand-gold px-5 py-3 text-sm font-black text-brand-navy transition hover:bg-amber-400" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Request Application Assistance"}
      </button>
      {status === "success" ? <p className="rounded-md bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">Request submitted. Reference number: {reference}</p> : null}
      {status === "error" ? <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-bold text-red-800">Please check the details and try again.</p> : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof AssistanceFormState;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<AssistanceFormState>>;
  type?: string;
  required?: boolean;
};

function Field({ label, name, value, onChange, type = "text", required }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-brand-navy">
      {label}
      <input
        type={type}
        required={required}
        className="min-h-12 rounded-md border border-slate-200 px-3 text-sm font-medium text-slate-700"
        value={value}
        onChange={(event) => onChange((current) => ({ ...current, [name]: event.target.value }))}
      />
    </label>
  );
}
