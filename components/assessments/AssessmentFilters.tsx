"use client";

export default function AssessmentFilters() {
  return (
    <div className="flex items-center justify-between">

      <div>
        <h2 className="text-base font-semibold text-[#222]">
          Assessment Library
        </h2>

        <p className="text-xs text-[#999] mt-1">
          Manage your assessments and assignments
        </p>
      </div>

      <div className="flex gap-3">

        <div className="relative">

          <span className="absolute left-3 top-2.5 text-[#999]">
            🔍
          </span>

          <input
            placeholder="Search assessments"
            className="w-60 border border-[#DDD]
            rounded-lg pl-9 pr-3 py-2 text-sm
            outline-none focus:border-[#6C4DF6]"
          />

        </div>

        <select
          className="border border-[#DDD] rounded-lg
          px-3 py-2 text-sm text-[#555]"
        >
          <option>All Status</option>
          <option>Published</option>
          <option>Draft</option>
        </select>

      </div>

    </div>
  );
}