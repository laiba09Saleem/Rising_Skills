"use client";

import { useState } from "react";
import Link from "next/link";
import { BriefcaseBusiness, Users } from "lucide-react";

import ApplicationStats from "../../../component/employers/applications/ApplicationStats";
import ApplicationFilters from "../../../component/employers/applications/ApplicationFilters";
import ApplicationTable, {
  Application,
} from "../../../component/employers/applications/ApplicationTable";

const initialApplications: Application[] = [
  {
    id: 1,
    name: "Ahmed Raza",
    email: "ahmed.raza@email.com",
    job: "React.js Frontend Developer",
    location: "Lahore, Pakistan",
    applied: "Today",
    experience: "2 Years",
    skills: ["React.js", "Next.js", "TypeScript"],
    status: "New",
  },
  {
    id: 2,
    name: "Ayesha Khan",
    email: "ayesha.khan@email.com",
    job: "AI / Machine Learning Engineer",
    location: "Islamabad, Pakistan",
    applied: "Yesterday",
    experience: "3 Years",
    skills: ["Python", "TensorFlow", "Machine Learning"],
    status: "Shortlisted",
  },
  {
    id: 3,
    name: "Hassan Ali",
    email: "hassan.ali@email.com",
    job: "UI/UX Designer",
    location: "Lahore, Pakistan",
    applied: "2 days ago",
    experience: "1.5 Years",
    skills: ["Figma", "UI Design", "UX Research"],
    status: "Interview",
  },
  {
    id: 4,
    name: "Sara Ahmed",
    email: "sara.ahmed@email.com",
    job: "React.js Frontend Developer",
    location: "Karachi, Pakistan",
    applied: "3 days ago",
    experience: "2 Years",
    skills: ["React.js", "JavaScript", "Tailwind CSS"],
    status: "Rejected",
  },
  {
    id: 5,
    name: "Usman Tariq",
    email: "usman.tariq@email.com",
    job: "Backend Developer Intern",
    location: "Lahore, Pakistan",
    applied: "4 days ago",
    experience: "Fresh",
    skills: ["Node.js", "Express.js", "MongoDB"],
    status: "New",
  },
];

export default function ApplicationsPage() {
  const [applications, setApplications] =
    useState<Application[]>(initialApplications);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredApplications = applications.filter((application) => {
    const text = search.toLowerCase();

    const matchesSearch =
      application.name.toLowerCase().includes(text) ||
      application.email.toLowerCase().includes(text) ||
      application.job.toLowerCase().includes(text);

    const matchesStatus =
      status === "All" || application.status === status;

    return matchesSearch && matchesStatus;
  });

  // DELETE
  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) return;

    setApplications((prev) =>
      prev.filter((application) => application.id !== id)
    );
  };

  // VIEW
  const handleView = (application: Application) => {
    alert(
      `Candidate: ${application.name}\nJob: ${application.job}\nStatus: ${application.status}`
    );
  };

  // EDIT
  const handleEdit = (application: Application) => {
    const newStatus = window.prompt(
      "Enter new status: New / Shortlisted / Interview / Rejected",
      application.status
    );

    if (!newStatus) return;

    const validStatuses = [
      "New",
      "Shortlisted",
      "Interview",
      "Rejected",
    ];

    if (!validStatuses.includes(newStatus)) {
      alert("Invalid status.");
      return;
    }

    setApplications((prev) =>
      prev.map((item) =>
        item.id === application.id
          ? { ...item, status: newStatus }
          : item
      )
    );
  };

  const newCount = applications.filter(
    (item) => item.status === "New"
  ).length;

  const shortlisted = applications.filter(
    (item) => item.status === "Shortlisted"
  ).length;

  const interviews = applications.filter(
    (item) => item.status === "Interview"
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <BriefcaseBusiness className="h-4 w-4" />
            <span>Employer Portal</span>
            <span>/</span>
            <span>Applications</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Applications
          </h1>

          <p className="mt-1 text-slate-500">
            Review and manage candidate applications.
          </p>
        </div>

        <Link
          href="/employer/candidates"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
        >
          <Users className="h-5 w-5" />
          Browse Candidates
        </Link>
      </div>

      {/* Stats */}
      <ApplicationStats
        total={applications.length}
        newCount={newCount}
        shortlisted={shortlisted}
        interviews={interviews}
      />

      {/* Applications */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <ApplicationFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />

        <ApplicationTable
          applications={filteredApplications}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
          <p className="text-sm text-slate-500">
            Showing {filteredApplications.length} applications
          </p>
        </div>
      </div>
    </div>
  );
}