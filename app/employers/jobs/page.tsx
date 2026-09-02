"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Plus,
  Search,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  Users,
  Clock3,
  CheckCircle2,
  PauseCircle,
  XCircle,
  MapPin,
  CalendarDays,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "React.js Frontend Developer",
    department: "Engineering",
    location: "Lahore, Pakistan",
    type: "Full Time",
    applicants: 42,
    posted: "2 days ago",
    deadline: "Sep 15, 2026",
    status: "Active",
  },
  {
    id: 2,
    title: "AI / Machine Learning Engineer",
    department: "Artificial Intelligence",
    location: "Remote",
    type: "Full Time",
    applicants: 31,
    posted: "5 days ago",
    deadline: "Sep 20, 2026",
    status: "Active",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Lahore, Pakistan",
    type: "Full Time",
    applicants: 24,
    posted: "1 week ago",
    deadline: "Sep 10, 2026",
    status: "Active",
  },
  {
    id: 4,
    title: "Backend Developer Intern",
    department: "Engineering",
    location: "Lahore, Pakistan",
    type: "Internship",
    applicants: 18,
    posted: "2 weeks ago",
    deadline: "Aug 30, 2026",
    status: "Closed",
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full Time",
    applicants: 9,
    posted: "3 weeks ago",
    deadline: "Aug 25, 2026",
    status: "Draft",
  },
];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.department.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <BriefcaseBusiness className="h-4 w-4" />
            <span>Employer Portal</span>
            <span>/</span>
            <span>Jobs</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Job Opportunities
          </h1>

          <p className="mt-1 text-slate-500">
            Create and manage your company&apos;s job opportunities.
          </p>
        </div>

        <Link
          href="/employer/jobs/create"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Post New Job
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Jobs"
          value="24"
          icon={<BriefcaseBusiness className="h-5 w-5" />}
          text="All job postings"
        />

        <StatCard
          title="Active Jobs"
          value="08"
          icon={<CheckCircle2 className="h-5 w-5" />}
          text="Currently hiring"
        />

        <StatCard
          title="Applications"
          value="124"
          icon={<Users className="h-5 w-5" />}
          text="Total applicants"
        />

        <StatCard
          title="Draft Jobs"
          value="03"
          icon={<PauseCircle className="h-5 w-5" />}
          text="Not published yet"
        />
      </div>

      {/* Main Card */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Filters */}
        <div className="border-b border-slate-200 p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              {["All", "Active", "Draft", "Closed"].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    statusFilter === status
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="divide-y divide-slate-100">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-5 transition hover:bg-slate-50"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                  {/* Job Info */}
                  <div className="flex min-w-0 gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <BriefcaseBusiness className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold text-slate-900">
                          {job.title}
                        </h3>

                        <StatusBadge status={job.status} />
                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        {job.department}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <BriefcaseBusiness className="h-4 w-4" />
                          {job.type}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="h-4 w-4" />
                          Deadline: {job.deadline}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Clock3 className="h-4 w-4" />
                          Posted {job.posted}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Applicants + Actions */}
                  <div className="flex items-center justify-between gap-5 xl:justify-end">
                    <div className="text-left xl:text-right">
                      <p className="text-xl font-bold text-slate-900">
                        {job.applicants}
                      </p>

                      <p className="text-xs text-slate-500">
                        Applications
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        title="View Job"
                        className="rounded-lg border border-slate-200 p-2.5 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        <Eye className="h-4 w-4" />
                      </button>

                      <button
                        title="Edit Job"
                        className="rounded-lg border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>

                      <button
                        title="More Options"
                        className="rounded-lg border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <XCircle className="h-7 w-7 text-slate-400" />
              </div>

              <h3 className="mt-4 text-base font-semibold text-slate-900">
                No jobs found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
          <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Showing {filteredJobs.length} of {jobs.length} jobs
            </span>

            <span>Last updated: Today</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Stat Card ---------------- */

function StatCard({
  title,
  value,
  icon,
  text,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-400">{text}</p>
    </div>
  );
}

/* ---------------- Status Badge ---------------- */

function StatusBadge({ status }: { status: string }) {
  const styles = {
    Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Draft: "bg-amber-50 text-amber-700 border-amber-200",
    Closed: "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}