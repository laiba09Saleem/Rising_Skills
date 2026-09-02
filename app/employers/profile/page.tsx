"use client";

import { useState } from "react";
import {
  Building2,
  Globe,
  Mail,
  Phone,
  MapPin,
  Users,
  BriefcaseBusiness,
  Save,
  Pencil,
  Upload,
 
  CheckCircle2,
} from "lucide-react";

export default function CompanyProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "RAN AI",
    industry: "Artificial Intelligence & Software",
    companySize: "51-200 Employees",
    email: "hr@ran.com",
    phone: "+92 300 1234567",
    website: "https://ran.com",
    location: "Lahore, Pakistan",
    
    description:
      "RAN AI is a technology company focused on building innovative AI-powered solutions and helping organizations discover skilled technology professionals.",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSaved(false);
  };

  const handleSave = () => {
    setIsEditing(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="space-y-7">
      {/* Page Header */}
      <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Building2 size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Company Profile
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage your organization information and employer profile.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {saved && (
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
              <CheckCircle2 size={17} />
              Changes saved
            </div>
          )}

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <Pencil size={17} />
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <Save size={17} />
              Save Changes
            </button>
          )}
        </div>
      </section>

      {/* Company Overview */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative bg-slate-900 px-7 py-8">
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            {/* Company Logo */}
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white text-3xl font-bold text-indigo-600 shadow-lg">
                RA
              </div>

              {isEditing && (
                <button
                  type="button"
                  className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-white shadow-sm transition hover:bg-indigo-700"
                >
                  <Upload size={15} />
                </button>
              )}
            </div>

            {/* Company Name */}
            <div className="text-white">
              <h2 className="text-2xl font-bold">
                {formData.companyName}
              </h2>

              <p className="mt-1 text-sm text-slate-300">
                {formData.industry}
              </p>

              <div className="mt-3 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-200">
                  <Users size={13} />
                  {formData.companySize}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-200">
                  <MapPin size={13} />
                  {formData.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Completion */}
        <div className="border-b border-slate-100 px-7 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Profile Completion
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Complete your company profile to attract better candidates.
              </p>
            </div>

            <span className="text-sm font-bold text-indigo-600">
              85%
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[85%] rounded-full bg-indigo-600" />
          </div>
        </div>
      </section>

      {/* Basic Information */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-7 py-5">
          <h2 className="font-semibold text-slate-900">
            Basic Information
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            General information about your company.
          </p>
        </div>

        <div className="grid gap-6 p-7 md:grid-cols-2">
          {/* Company Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Company Name
            </label>

            <div className="relative">
              <Building2
                size={17}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-80"
              />
            </div>
          </div>

          {/* Industry */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Industry
            </label>

            <div className="relative">
              <BriefcaseBusiness
                size={17}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-80"
              />
            </div>
          </div>

          {/* Company Size */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Company Size
            </label>

            <div className="relative">
              <Users
                size={17}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="text"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-80"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Location
            </label>

            <div className="relative">
              <MapPin
                size={17}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-7 py-5">
          <h2 className="font-semibold text-slate-900">
            Contact Information
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Contact details candidates and platform users can use.
          </p>
        </div>

        <div className="grid gap-6 p-7 md:grid-cols-2">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Company Email
            </label>

            <div className="relative">
              <Mail
                size={17}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-80"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Phone Number
            </label>

            <div className="relative">
              <Phone
                size={17}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-80"
              />
            </div>
          </div>

          {/* Website */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Website
            </label>

            <div className="relative">
              <Globe
                size={17}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-80"
              />
            </div>
          </div>

          {/* LinkedIn
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              LinkedIn
            </label>

            <div className="relative">
              <Linkedin
                size={17}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-80"
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Company Description */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-7 py-5">
          <h2 className="font-semibold text-slate-900">
            Company Description
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Tell candidates about your organization and work culture.
          </p>
        </div>

        <div className="p-7">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            disabled={!isEditing}
            rows={6}
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white disabled:cursor-not-allowed disabled:opacity-80"
          />

          <div className="mt-2 flex justify-end">
            <span className="text-xs text-slate-400">
              {formData.description.length} characters
            </span>
          </div>
        </div>
      </section>

      {/* Bottom Save */}
      {isEditing && (
        <div className="flex justify-end gap-3 pb-4">
          <button
            onClick={() => setIsEditing(false)}
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <Save size={17} />
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}