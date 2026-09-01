"use client";

import OpportunityCard, {
  Opportunity,
} from "@/components/opportunities/OpportunityCard";

import OpportunityFilters from "@/components/opportunities/OpportunityFilters";

import {
  Briefcase,
  CheckCircle2,
  Sparkles,
  Target,
} from "lucide-react";

const opportunities: Opportunity[] = [
  {
    id: "frontend-developer-intern",
    title: "Frontend Developer Intern",
    company: "Tech Solutions Ltd.",
    type: "Internship",
    location: "Lahore, Pakistan",
    workMode: "Hybrid",
    description:
      "Join our frontend team and build modern web applications using React.js, JavaScript and Tailwind CSS.",
    skills: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    experience: "0-1 years",
    deadline: "Sep 15, 2026",
    status: "Eligible",
    salary: "PKR 40,000/month",
    match: 92,
  },

  {
    id: "react-developer",
    title: "React Developer",
    company: "Digital Labs",
    type: "Job",
    location: "Remote",
    workMode: "Remote",
    description:
      "Work on production React applications and collaborate with designers and backend developers.",
    skills: ["React.js", "JavaScript", "Redux", "REST API"],
    experience: "1-2 years",
    deadline: "Sep 20, 2026",
    status: "Eligible",
    salary: "PKR 80,000/month",
    match: 87,
  },

  {
    id: "fullstack-project",
    title: "Full Stack Web Project",
    company: "Innovation Hub",
    type: "Project",
    location: "Remote",
    workMode: "Remote",
    description:
      "Build a full-stack web application using modern frontend and backend technologies.",
    skills: ["React.js", "Node.js", "MongoDB", "API"],
    experience: "0-1 years",
    deadline: "Sep 25, 2026",
    status: "Eligible",
    salary: "PKR 50,000/project",
    match: 81,
  },

  {
    id: "javascript-apprenticeship",
    title: "JavaScript Apprenticeship",
    company: "Code Academy",
    type: "Apprenticeship",
    location: "Lahore, Pakistan",
    workMode: "On-site",
    description:
      "Learn and apply JavaScript development practices while working on real-world projects.",
    skills: ["JavaScript", "HTML", "CSS"],
    experience: "0 years",
    deadline: "Sep 28, 2026",
    status: "Eligible",
    salary: "PKR 30,000/month",
    match: 78,
  },

  {
    id: "frontend-freelance",
    title: "Frontend Freelance Developer",
    company: "Startup Studio",
    type: "Freelance / Contract",
    location: "Remote",
    workMode: "Remote",
    description:
      "Develop responsive frontend interfaces for startup products using React and Tailwind CSS.",
    skills: ["React.js", "Tailwind CSS", "UI Design"],
    experience: "1+ years",
    deadline: "Oct 1, 2026",
    status: "Eligible",
    salary: "PKR 60,000/project",
    match: 74,
  },

  {
    id: "typescript-developer",
    title: "TypeScript Developer",
    company: "Cloud Systems",
    type: "Job",
    location: "Islamabad, Pakistan",
    workMode: "Hybrid",
    description:
      "Build scalable frontend applications with TypeScript and modern React architecture.",
    skills: ["TypeScript", "React.js", "Next.js"],
    experience: "2+ years",
    deadline: "Oct 5, 2026",
    status: "Not Eligible",
    salary: "PKR 100,000/month",
    match: 61,
  },
];

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold text-indigo-600">
            CAREER OPPORTUNITIES
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Opportunities
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Discover opportunities that match your skills, proficiency and
            verified evidence.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Recommended"
            value="12"
            icon={<Sparkles size={22} />}
            iconClass="bg-indigo-50 text-indigo-600"
          />

          <StatCard
            title="Eligible"
            value="8"
            icon={<CheckCircle2 size={22} />}
            iconClass="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="Applications"
            value="3"
            icon={<Briefcase size={22} />}
            iconClass="bg-amber-50 text-amber-600"
          />

          <StatCard
            title="Average Match"
            value="84%"
            icon={<Target size={22} />}
            iconClass="bg-violet-50 text-violet-600"
          />

        </div>

        {/* AI Recommendation Banner */}
        <div className="mb-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                <Sparkles size={22} />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Recommended for You
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  These opportunities are ranked using your current skill
                  states, evidence and role requirements.
                </p>
              </div>
            </div>

            <span className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700">
              AI-assisted
            </span>

          </div>
        </div>

        {/* Filters */}
        <OpportunityFilters />

        {/* Section Header */}
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Recommended Opportunities
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Opportunities ranked according to your profile.
            </p>
          </div>

          <span className="hidden rounded-lg bg-white px-3 py-2 text-sm text-slate-500 shadow-sm sm:block">
            {opportunities.length} opportunities
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {opportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

/* Stats Component */

function StatCard({
  title,
  value,
  icon,
  iconClass,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h3 className="mt-1 text-2xl font-bold text-slate-900">
            {value}
          </h3>
        </div>

        <div className={`rounded-xl p-3 ${iconClass}`}>
          {icon}
        </div>

      </div>
    </div>
  );
}