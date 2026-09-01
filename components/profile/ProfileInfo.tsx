"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function ProfileInfo() {
  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState({
    fullName: "Nida Karamat",
    email: "nida@example.com",
    phone: "0300-0000000",
    location: "Lahore, Pakistan",
    headline: "Frontend Developer",
    bio: "Frontend developer interested in React.js and Next.js.",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Personal Information
          </h2>

          <p className="text-sm text-slate-500">
            Your basic profile information
          </p>
        </div>

        <button
          onClick={() => setEditing(!editing)}
          className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
        >
          <Pencil size={15} />
          {editing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Full Name
          </label>

          {editing ? (
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500"
            />
          ) : (
            <p className="text-sm text-slate-600">{form.fullName}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>

          {editing ? (
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500"
            />
          ) : (
            <p className="text-sm text-slate-600">{form.email}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Phone
          </label>

          {editing ? (
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500"
            />
          ) : (
            <p className="text-sm text-slate-600">{form.phone}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Location
          </label>

          {editing ? (
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500"
            />
          ) : (
            <p className="text-sm text-slate-600">{form.location}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Professional Headline
          </label>

          {editing ? (
            <input
              name="headline"
              value={form.headline}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500"
            />
          ) : (
            <p className="text-sm text-slate-600">{form.headline}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-700">
            About Me
          </label>

          {editing ? (
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500"
            />
          ) : (
            <p className="text-sm leading-6 text-slate-600">
              {form.bio}
            </p>
          )}
        </div>

      </div>

      {editing && (
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => setEditing(false)}
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium"
          >
            Cancel
          </button>

          <button
            onClick={() => setEditing(false)}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Save Changes
          </button>
        </div>
      )}

    </section>
  );
}