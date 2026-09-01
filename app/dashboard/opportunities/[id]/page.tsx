"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Sparkles,
  Target,
  UserCheck,
  XCircle,
} from "lucide-react";

import { useState } from "react";

const skills = [
  {
    name: "React.js",
    required: "Intermediate",
    student: "Advanced",
    state: "Demonstrated",
    match: true,
  },
  {
    name: "JavaScript",
    required: "Intermediate",
    student: "Advanced",
    state: "Verified",
    match: true,
  },
  {
    name: "TypeScript",
    required: "Intermediate",
    student: "Beginner",
    state: "Self-Reported",
    match: false,
  },
  {
    name: "Tailwind CSS",
    required: "Beginner",
    student: "Intermediate",
    state: "Assessed",
    match: true,
  },
];

export default function OpportunityDetailPage() {
  const [applied, setApplied] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          href="/dashboard/opportunities"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft size={18} />
          Back to Opportunities
        </Link>

        {/* Header */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

            <div className="flex gap-4">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Building2 size={30} />
              </div>

              <div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    Internship
                  </span>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Published
                  </span>
                </div>

                <h1 className="mt-3 text-3xl font-bold text-slate-900">
                  Frontend Developer Intern
                </h1>

                <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <Building2 size={16} />
                  Tech Solutions Ltd.
                </p>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    Lahore, Pakistan
                  </span>

                  <span className="flex items-center gap-2">
                    <Briefcase size={16} />
                    Hybrid
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={16} />
                    Full Time
                  </span>

                </div>
              </div>
            </div>

            {/* Match */}
            <div className="min-w-[190px] rounded-2xl bg-indigo-50 p-5">

              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700">
                <Target size={18} />
                Match Score
              </div>

              <p className="mt-2 text-4xl font-bold text-indigo-700">
                92%
              </p>

              <p className="mt-1 text-xs text-indigo-600">
                Strong match with your profile
              </p>

            </div>

          </div>
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* LEFT */}
          <div className="space-y-6 lg:col-span-2">

            {/* About */}
            <Section title="About this Opportunity">

              <p className="leading-7 text-slate-600">
                We are looking for a motivated Frontend Developer Intern to
                join our product development team. You will work with
                experienced developers to build modern responsive web
                applications.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                This opportunity is suitable for candidates who have practical
                experience with React.js, JavaScript, TypeScript and modern
                frontend development practices.
              </p>

            </Section>

            {/* Information */}
            <Section title="Opportunity Information">

              <div className="grid gap-4 sm:grid-cols-2">

                <Info
                  icon={<Briefcase size={18} />}
                  label="Opportunity Type"
                  value="Internship"
                />

                <Info
                  icon={<MapPin size={18} />}
                  label="Location"
                  value="Lahore, Pakistan"
                />

                <Info
                  icon={<Clock3 size={18} />}
                  label="Work Mode"
                  value="Hybrid"
                />

                <Info
                  icon={<CalendarDays size={18} />}
                  label="Deadline"
                  value="September 15, 2026"
                />

              </div>

            </Section>

            {/* Required Skills */}
            <Section title="Required Skills">

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>

            </Section>

            {/* Skill Comparison */}
            <Section title="Your Skills">

              <p className="mb-5 text-sm text-slate-500">
                Your current skills compared with the opportunity requirements.
              </p>

              <div className="overflow-x-auto">

                <table className="w-full min-w-[650px]">

                  <thead>
                    <tr className="border-b text-left text-xs uppercase text-slate-400">
                      <th className="px-3 py-3">Skill</th>
                      <th className="px-3 py-3">Required</th>
                      <th className="px-3 py-3">Your Level</th>
                      <th className="px-3 py-3">State</th>
                      <th className="px-3 py-3">Match</th>
                    </tr>
                  </thead>

                  <tbody>
                    {skills.map((skill) => (
                      <tr
                        key={skill.name}
                        className="border-b border-slate-100"
                      >

                        <td className="px-3 py-4 text-sm font-semibold text-slate-800">
                          {skill.name}
                        </td>

                        <td className="px-3 py-4 text-sm text-slate-500">
                          {skill.required}
                        </td>

                        <td className="px-3 py-4 text-sm text-slate-600">
                          {skill.student}
                        </td>

                        <td className="px-3 py-4">
                          <StateBadge state={skill.state} />
                        </td>

                        <td className="px-3 py-4">
                          {skill.match ? (
                            <CheckCircle2
                              size={20}
                              className="text-emerald-500"
                            />
                          ) : (
                            <XCircle
                              size={20}
                              className="text-red-500"
                            />
                          )}
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>

              </div>

            </Section>

            {/* Skill Gap */}
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">

              <div className="flex gap-3">

                <div className="rounded-xl bg-amber-100 p-2 text-amber-600">
                  <Target size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Skill Gap Identified
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Your TypeScript proficiency is currently below the
                    required level.
                  </p>

                  <Link
                    href="/dashboard/skills"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-amber-700"
                  >
                    Improve this skill
                    <ArrowRight size={15} />
                  </Link>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* Eligibility */}
            <section className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600">
                  <UserCheck size={21} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Eligibility
                  </h2>

                  <p className="text-xs text-slate-500">
                    Mandatory requirement check
                  </p>
                </div>

              </div>

              <div className="mt-5 rounded-xl bg-emerald-50 p-4">

                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <CheckCircle2 size={18} />
                  You are eligible
                </div>

                <p className="mt-2 text-xs leading-5 text-emerald-700">
                  You meet the mandatory requirements for this opportunity.
                </p>

              </div>

            </section>

            {/* Why Match */}
            <section className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-indigo-50 p-2 text-indigo-600">
                  <Sparkles size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Why This Match?
                  </h2>

                  <p className="text-xs font-medium text-indigo-600">
                    AI-assisted explanation
                  </p>
                </div>

              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Your React.js and JavaScript skills strongly match this
                opportunity. You also have assessed evidence for Tailwind CSS.
              </p>

              <div className="mt-5 space-y-3">

                <Reason text="Strong React.js experience" />

                <Reason text="Verified JavaScript skill" />

                <Reason text="Assessed Tailwind CSS skill" />

              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-500">
                AI explanation does not change the deterministic match score
                or eligibility result.
              </div>

            </section>

            {/* Apply */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              {!applied ? (
                <>
                  <h2 className="text-lg font-bold text-slate-900">
                    Interested in this Opportunity?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Submit your application and let the employer review your
                    profile.
                  </p>

                  <button
                    onClick={() => setApplied(true)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    Apply Now
                    <ArrowRight size={17} />
                  </button>
                </>
              ) : (
                <ApplicationStatus />
              )}

            </section>

            {/* Company */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold text-slate-900">
                About the Company
              </h2>

              <div className="mt-4 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <Building2 size={21} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Tech Solutions Ltd.
                  </p>

                  <p className="text-xs text-slate-500">
                    Software & Technology
                  </p>
                </div>

              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                A technology company building modern digital products and
                creating opportunities for emerging developers.
              </p>

            </section>

          </div>

        </div>

      </div>
    </div>
  );
}

/* Section */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-4 text-lg font-bold text-slate-900">
        {title}
      </h2>

      {children}

    </section>
  );
}

/* Info */

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">

      <div className="rounded-lg bg-white p-2 text-indigo-600 shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-xs text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-800">
          {value}
        </p>
      </div>

    </div>
  );
}

/* State */

function StateBadge({ state }: { state: string }) {
  const classes =
    state === "Verified"
      ? "bg-emerald-50 text-emerald-700"
      : state === "Demonstrated"
      ? "bg-blue-50 text-blue-700"
      : state === "Assessed"
      ? "bg-violet-50 text-violet-700"
      : "bg-slate-100 text-slate-600";

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${classes}`}
    >
      {state}
    </span>
  );
}

/* Reason */

function Reason({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <CheckCircle2 size={16} className="text-emerald-500" />
      {text}
    </div>
  );
}

/* Application Status */

function ApplicationStatus() {
  return (
    <div>

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600">
          <CheckCircle2 size={21} />
        </div>

        <div>
          <h2 className="font-bold text-slate-900">
            Application Submitted
          </h2>

          <p className="text-xs text-slate-500">
            Your application has been received.
          </p>
        </div>

      </div>

      <div className="mt-6 space-y-4">

        <Step
          title="Submitted"
          description="Application submitted successfully"
          active
        />

        <Step
          title="Under Review"
          description="Waiting for employer review"
        />

        <Step
          title="Shortlisted"
          description="Candidate selected for next stage"
        />

        <Step
          title="Offered / Rejected / Closed"
          description="Final application outcome"
          last
        />

      </div>

    </div>
  );
}

/* Step */

function Step({
  title,
  description,
  active = false,
  last = false,
}: {
  title: string;
  description: string;
  active?: boolean;
  last?: boolean;
}) {
  return (
    <div className="flex gap-3">

      <div className="flex flex-col items-center">

        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full ${
            active
              ? "bg-indigo-600 text-white"
              : "bg-slate-100 text-slate-400"
          }`}
        >
          {active ? (
            <CheckCircle2 size={16} />
          ) : (
            <span className="text-xs">•</span>
          )}
        </div>

        {!last && (
          <div className="mt-1 h-8 w-px bg-slate-200" />
        )}

      </div>

      <div>
        <p
          className={`text-sm font-semibold ${
            active ? "text-slate-900" : "text-slate-400"
          }`}
        >
          {title}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {description}
        </p>
      </div>

    </div>
  );
}