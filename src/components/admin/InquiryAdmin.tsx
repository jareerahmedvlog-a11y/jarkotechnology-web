"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { serviceOptions } from "@/config/site";
import type { Inquiry } from "@/lib/inquiries";

const emptyForm = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  details: "",
};

export function InquiryAdmin() {
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setError("");
    try {
      const res = await fetch("/api/admin/inquiries");
      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      const data = (await res.json()) as {
        ok?: boolean;
        inquiries?: Inquiry[];
        error?: string;
      };
      if (!res.ok || !data.ok) {
        setError(data.error || "Failed to load inquiries.");
        return;
      }
      setInquiries(data.inquiries || []);
    } catch {
      setError("Failed to load inquiries.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    void load();
  }, [load]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  async function onDelete(id: string) {
    if (!confirm("Delete this inquiry?")) return;
    setMessage("");
    const res = await fetch(`/api/admin/inquiries/${id}`, { method: "DELETE" });
    if (res.status === 401) {
      router.replace("/admin/login");
      return;
    }
    if (!res.ok) {
      setError("Could not delete inquiry.");
      return;
    }
    setInquiries((prev) => prev.filter((item) => item.id !== id));
    setMessage("Inquiry deleted.");
  }

  async function onAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch("/api/admin/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        inquiry?: Inquiry;
        error?: string;
      };
      if (!res.ok || !data.ok || !data.inquiry) {
        setError(data.error || "Could not add inquiry.");
        return;
      }
      setInquiries((prev) => [data.inquiry!, ...prev]);
      setForm(emptyForm);
      setShowAdd(false);
      setMessage("Inquiry added.");
    } catch {
      setError("Could not add inquiry.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-cyan-300 uppercase">
            Admin
          </p>
          <h1 className="font-display text-3xl font-bold text-text">
            Project Inquiries
          </h1>
          <p className="mt-1 text-sm text-text-muted">
            View, add, or delete customer inquiries only.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="btn-primary !w-auto"
            onClick={() => setShowAdd((v) => !v)}
          >
            {showAdd ? "Close Form" : "Add Inquiry"}
          </button>
          <button type="button" className="btn-secondary !w-auto" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      {message ? <p className="mb-4 text-sm text-emerald-300">{message}</p> : null}
      {error ? (
        <p className="mb-4 text-sm text-red-300" role="alert">
          {error}
        </p>
      ) : null}

      {showAdd ? (
        <form
          onSubmit={onAdd}
          className="gradient-border mb-8 grid gap-3 rounded-2xl p-5 sm:grid-cols-2"
        >
          <h2 className="font-display text-lg font-semibold text-text sm:col-span-2">
            Add Inquiry
          </h2>
          {(
            [
              ["fullName", "Full Name", "text"],
              ["businessName", "Business Name (optional)", "text"],
              ["email", "Email", "email"],
              ["phone", "Phone / WhatsApp", "tel"],
              ["budget", "Budget (optional)", "text"],
            ] as const
          ).map(([key, label, type]) => (
            <div key={key}>
              <label className="text-sm text-text-muted" htmlFor={key}>
                {label}
              </label>
              <input
                id={key}
                type={type}
                required={key !== "businessName" && key !== "budget"}
                value={form[key]}
                onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                className="mt-1 w-full rounded-xl border border-border bg-[#0a0a12] px-3 py-2.5 text-sm text-text"
              />
            </div>
          ))}
          <div>
            <label className="text-sm text-text-muted" htmlFor="service">
              Service
            </label>
            <select
              id="service"
              required
              value={form.service}
              onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
              className="mt-1 w-full rounded-xl border border-border bg-[#0a0a12] px-3 py-2.5 text-sm text-text"
            >
              <option value="" disabled>
                Select service
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-text-muted" htmlFor="details">
              Project Details
            </label>
            <textarea
              id="details"
              required
              rows={4}
              value={form.details}
              onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))}
              className="mt-1 w-full rounded-xl border border-border bg-[#0a0a12] px-3 py-2.5 text-sm text-text"
            />
          </div>
          <button
            type="submit"
            className="btn-primary sm:col-span-2 sm:!w-auto"
            disabled={saving}
          >
            {saving ? "Saving…" : "Save Inquiry"}
          </button>
        </form>
      ) : null}

      {loading ? (
        <p className="text-text-muted">Loading inquiries…</p>
      ) : inquiries.length === 0 ? (
        <div className="gradient-border rounded-2xl p-8 text-center text-text-muted">
          No inquiries yet. When someone submits the website form, it will appear
          here.
        </div>
      ) : (
        <ul className="space-y-4">
          {inquiries.map((item) => (
            <li key={item.id} className="gradient-border rounded-2xl p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold text-text">
                    {item.fullName}
                  </p>
                  <p className="text-sm text-indigo-300">{item.service}</p>
                  <p className="mt-2 text-sm text-text-muted">
                    {item.email} · {item.phone}
                  </p>
                  {item.businessName ? (
                    <p className="text-sm text-text-dim">Business: {item.businessName}</p>
                  ) : null}
                  {item.budget ? (
                    <p className="text-sm text-text-dim">Budget: {item.budget}</p>
                  ) : null}
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-text">
                    {item.details}
                  </p>
                  <p className="mt-3 text-xs text-text-dim">
                    {new Date(item.submittedAt).toLocaleString()} · {item.source}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => void onDelete(item.id)}
                  className="shrink-0 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200 hover:bg-red-500/20"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
