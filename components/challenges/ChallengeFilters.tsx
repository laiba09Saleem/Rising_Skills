"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function ChallengeFilters() {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search challenges..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        {/* Difficulty */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={17} className="text-slate-400" />

          <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none focus:border-indigo-500">
            <option>All Difficulties</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Status */}
        <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none focus:border-indigo-500">
          <option>All Challenges</option>
          <option>Open</option>
          <option>Submitted</option>
          <option>Evaluated</option>
        </select>
      </div>
    </div>
  );
}