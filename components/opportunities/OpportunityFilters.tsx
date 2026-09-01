"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function OpportunityFilters() {
  return (
    <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-3 md:grid-cols-4">
        <div className="relative md:col-span-2">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search opportunities..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
          />
        </div>

        <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none focus:border-indigo-400">
          <option>All Types</option>
          <option>Internship</option>
          <option>Apprenticeship</option>
          <option>Project</option>
          <option>Freelance / Contract</option>
          <option>Job</option>
        </select>

        <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none focus:border-indigo-400">
          <option>All Work Modes</option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>On-site</option>
        </select>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <SlidersHorizontal size={14} />
        Showing opportunities based on your profile and skills.
      </div>
    </div>
  );
}