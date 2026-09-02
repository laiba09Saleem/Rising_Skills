// "use client";
// import Link from "next/link";

// import {
//     BriefcaseBusiness,
//     FileText,
//     Users,
//     UserCheck,
//     Plus,
//     ArrowRight,
//     MoreHorizontal,
//     Trophy,
//     Target,
//   } from "lucide-react";

// const stats = [
//   {
//     title: "Active Jobs",
//     value: "08",
//     description: "Currently published",
//     icon: BriefcaseBusiness,
//   },
//   {
//     title: "Applications",
//     value: "124",
//     description: "Total applications",
//     icon: FileText,
//   },
//   {
//     title: "Candidates",
//     value: "356",
//     description: "Available candidates",
//     icon: Users,
//   },
//   {
//     title: "Shortlisted",
//     value: "28",
//     description: "Candidates shortlisted",
//     icon: UserCheck,
//   },
// ];

// const applications = [
//   {
//     name: "Ali Raza",
//     role: "React Developer",
//     match: "94%",
//     status: "Shortlisted",
//   },
//   {
//     name: "Sara Khan",
//     role: "Frontend Developer",
//     match: "88%",
//     status: "Under Review",
//   },
//   {
//     name: "Hamza Ali",
//     role: "Next.js Developer",
//     match: "82%",
//     status: "Submitted",
//   },
//   {
//     name: "Ayesha Noor",
//     role: "UI/UX Developer",
//     match: "79%",
//     status: "Under Review",
//   },
// ];

// const jobs = [
//   {
//     title: "React.js Developer",
//     type: "Full Time",
//     applications: 24,
//     status: "Published",
//   },
//   {
//     title: "Frontend Developer Intern",
//     type: "Internship",
//     applications: 38,
//     status: "Published",
//   },
//   {
//     title: "Next.js Developer",
//     type: "Full Time",
//     applications: 12,
//     status: "Published",
//   },
// ];

// const candidates = [
//   {
//     name: "Ali Raza",
//     role: "Frontend Developer",
//     match: "94%",
//     skills: "React • Next.js • TypeScript",
//   },
//   {
//     name: "Sara Khan",
//     role: "React Developer",
//     match: "91%",
//     skills: "React • JavaScript • Tailwind",
//   },
//   {
//     name: "Hamza Ali",
//     role: "Full Stack Developer",
//     match: "87%",
//     skills: "Next.js • Node.js • MongoDB",
//   },
// ];

// export default function EmployerDashboard() {
//   return (
//     <div className="space-y-7">
//       {/* Welcome Banner */}
//       <section className="relative overflow-hidden rounded-2xl bg-slate-900 px-7 py-8 text-white shadow-sm">
//         <div className="relative z-10">
//           <p className="mb-2 text-sm font-medium text-slate-300">
//             Welcome back, RAN AI 👋
//           </p>

//           <h1 className="text-2xl font-bold sm:text-3xl">
//             Find the right talent for your opportunities.
//           </h1>

//           <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
//             Manage your job opportunities, review applications,
//             discover skilled candidates and build your ideal team.
//           </p>

//           <div className="mt-6 flex flex-wrap gap-3">
//             <Link
//               href="/employers/jobs"
//               className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
//             >
//               <Plus size={17} />
//               Post a Job
//             </Link>

//             <Link
//               href="/employers/candidates"
//               className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
//             >
//               Find Candidates
//             </Link>
//           </div>
//         </div>

//         <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
//       </section>

//       {/* Statistics */}
//       <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
//         {stats.map((stat) => {
//           const Icon = stat.icon;

//           return (
//             <div
//               key={stat.title}
//               className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
//             >
//               <div className="flex items-start justify-between">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                   <Icon size={21} />
//                 </div>

//                 <MoreHorizontal
//                   size={20}
//                   className="text-slate-400"
//                 />
//               </div>

//               <p className="mt-5 text-sm font-medium text-slate-500">
//                 {stat.title}
//               </p>

//               <h3 className="mt-1 text-3xl font-bold text-slate-900">
//                 {stat.value}
//               </h3>

//               <p className="mt-1 text-xs text-slate-400">
//                 {stat.description}
//               </p>
//             </div>
//           );
//         })}
//       </section>

//       {/* Applications + Jobs */}
//       <section className="grid gap-6 xl:grid-cols-3">
//         {/* Applications */}
//         <div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm">
//           <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
//             <div>
//               <h2 className="font-semibold text-slate-900">
//                 Recent Applications
//               </h2>

//               <p className="mt-1 text-xs text-slate-500">
//                 Latest candidate applications
//               </p>
//             </div>

//             <Link
//               href="/employers/applications"
//               className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
//             >
//               View all
//               <ArrowRight size={15} />
//             </Link>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[650px]">
//               <thead>
//                 <tr className="border-b border-slate-100 text-left">
//                   <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
//                     Candidate
//                   </th>

//                   <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
//                     Position
//                   </th>

//                   <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
//                     Match
//                   </th>

//                   <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
//                     Status
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {applications.map((application) => (
//                   <tr
//                     key={application.name}
//                     className="border-b border-slate-50 last:border-0 hover:bg-slate-50/70"
//                   >
//                     <td className="px-6 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
//                           {application.name
//                             .split(" ")
//                             .map((word) => word[0])
//                             .join("")}
//                         </div>

//                         <span className="text-sm font-medium text-slate-800">
//                           {application.name}
//                         </span>
//                       </div>
//                     </td>

//                     <td className="px-6 py-4 text-sm text-slate-600">
//                       {application.role}
//                     </td>

//                     <td className="px-6 py-4">
//                       <span className="font-semibold text-indigo-600">
//                         {application.match}
//                       </span>
//                     </td>

//                     <td className="px-6 py-4">
//                       <span
//                         className={`rounded-full px-3 py-1 text-xs font-medium ${
//                           application.status === "Shortlisted"
//                             ? "bg-emerald-50 text-emerald-600"
//                             : application.status ===
//                                 "Under Review"
//                               ? "bg-amber-50 text-amber-600"
//                               : "bg-slate-100 text-slate-600"
//                         }`}
//                       >
//                         {application.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Active Jobs */}
//         <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
//           <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
//             <div>
//               <h2 className="font-semibold text-slate-900">
//                 Active Jobs
//               </h2>

//               <p className="mt-1 text-xs text-slate-500">
//                 Your current opportunities
//               </p>
//             </div>

//             <Link
//               href="/employers/jobs"
//               className="text-sm font-medium text-indigo-600"
//             >
//               View all
//             </Link>
//           </div>

//           <div className="divide-y divide-slate-100">
//             {jobs.map((job) => (
//               <div
//                 key={job.title}
//                 className="px-6 py-5"
//               >
//                 <div className="flex items-start justify-between gap-3">
//                   <div>
//                     <h3 className="text-sm font-semibold text-slate-800">
//                       {job.title}
//                     </h3>

//                     <p className="mt-1 text-xs text-slate-500">
//                       {job.type}
//                     </p>
//                   </div>

//                   <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-600">
//                     {job.status}
//                   </span>
//                 </div>

//                 <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
//                   <FileText size={14} />
//                   {job.applications} applications
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="border-t border-slate-100 p-4">
//             <Link
//               href="/employers/jobs"
//               className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
//             >
//               Manage Jobs
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Recommended Candidates */}
//       <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
//         <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
//           <div>
//             <h2 className="font-semibold text-slate-900">
//               Recommended Candidates
//             </h2>

//             <p className="mt-1 text-xs text-slate-500">
//               Candidates matching your active opportunities
//             </p>
//           </div>

//           <Link
//             href="/employers/candidates"
//             className="flex items-center gap-1 text-sm font-medium text-indigo-600"
//           >
//             Explore candidates
//             <ArrowRight size={15} />
//           </Link>
//         </div>

//         <div className="grid gap-4 p-6 md:grid-cols-3">
//           {candidates.map((candidate) => (
//             <div
//               key={candidate.name}
//               className="rounded-2xl border border-slate-100 p-5 transition hover:border-indigo-100 hover:shadow-sm"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 font-semibold text-indigo-600">
//                   {candidate.name
//                     .split(" ")
//                     .map((word) => word[0])
//                     .join("")}
//                 </div>

//                 <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600">
//                   {candidate.match} Match
//                 </span>
//               </div>

//               <h3 className="mt-4 font-semibold text-slate-900">
//                 {candidate.name}
//               </h3>

//               <p className="mt-1 text-sm text-slate-500">
//                 {candidate.role}
//               </p>

//               <p className="mt-3 text-xs leading-5 text-slate-400">
//                 {candidate.skills}
//               </p>

//               <Link
//                 href="/employers/candidates"
//                 className="mt-5 block rounded-xl border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
//               >
//                 View Profile
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Quick Actions */}
//       <section>
//         <h2 className="mb-4 text-lg font-semibold text-slate-900">
//           Quick Actions
//         </h2>

//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           <Link
//             href="/employers/jobs"
//             className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200"
//           >
//             <BriefcaseBusiness className="text-indigo-600" size={22} />

//             <h3 className="mt-4 text-sm font-semibold text-slate-900">
//               Post a Job
//             </h3>

//             <p className="mt-1 text-xs text-slate-500">
//               Create a new opportunity
//             </p>
//           </Link>

//           <Link
//             href="/employers/candidates"
//             className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200"
//           >
//             <Users className="text-indigo-600" size={22} />

//             <h3 className="mt-4 text-sm font-semibold text-slate-900">
//               Find Candidates
//             </h3>

//             <p className="mt-1 text-xs text-slate-500">
//               Discover suitable talent
//             </p>
//           </Link>

//           <Link
//             href="/employers/challenges"
//             className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200"
//           >
//             <Trophy className="text-indigo-600" size={22} />

//             <h3 className="mt-4 text-sm font-semibold text-slate-900">
//               Create Challenge
//             </h3>

//             <p className="mt-1 text-xs text-slate-500">
//               Test candidate skills
//             </p>
//           </Link>

//           <Link
//             href="/employers/matching"
//             className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200"
//           >
//             <Target className="text-indigo-600" size={22} />

//             <h3 className="mt-4 text-sm font-semibold text-slate-900">
//               Candidate Matching
//             </h3>

//             <p className="mt-1 text-xs text-slate-500">
//               Find high-match candidates
//             </p>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import {
    BriefcaseBusiness,
    FileText,
    Users,
    UserCheck,
    Plus,
    ArrowRight,
    MoreHorizontal,
    Trophy,
    Target,
  } from "lucide-react";

const stats = [
  {
    title: "Active Jobs",
    value: "08",
    description: "Currently published",
    icon: BriefcaseBusiness,
  },
  {
    title: "Applications",
    value: "124",
    description: "Total applications",
    icon: FileText,
  },
  {
    title: "Candidates",
    value: "356",
    description: "Available candidates",
    icon: Users,
  },
  {
    title: "Shortlisted",
    value: "28",
    description: "Candidates shortlisted",
    icon: UserCheck,
  },
];

const applications = [
  {
    name: "Ali Raza",
    role: "React Developer",
    match: "94%",
    status: "Shortlisted",
  },
  {
    name: "Sara Khan",
    role: "Frontend Developer",
    match: "88%",
    status: "Under Review",
  },
  {
    name: "Hamza Ali",
    role: "Next.js Developer",
    match: "82%",
    status: "Submitted",
  },
  {
    name: "Ayesha Noor",
    role: "UI/UX Developer",
    match: "79%",
    status: "Under Review",
  },
];

const jobs = [
  {
    title: "React.js Developer",
    type: "Full Time",
    applications: 24,
    status: "Published",
  },
  {
    title: "Frontend Developer Intern",
    type: "Internship",
    applications: 38,
    status: "Published",
  },
  {
    title: "Next.js Developer",
    type: "Full Time",
    applications: 12,
    status: "Published",
  },
];

const candidates = [
  {
    name: "Ali Raza",
    role: "Frontend Developer",
    match: "94%",
    skills: "React • Next.js • TypeScript",
  },
  {
    name: "Sara Khan",
    role: "React Developer",
    match: "91%",
    skills: "React • JavaScript • Tailwind",
  },
  {
    name: "Hamza Ali",
    role: "Full Stack Developer",
    match: "87%",
    skills: "Next.js • Node.js • MongoDB",
  },
];

export default function EmployerDashboard() {
  return (
    <div className="space-y-7">
      {/* Welcome Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-slate-900 px-7 py-8 text-white shadow-sm">
        <div className="relative z-10">
          <p className="mb-2 text-sm font-medium text-slate-300">
            Welcome back, RAN AI 👋
          </p>

          <h1 className="text-2xl font-bold sm:text-3xl">
            Find the right talent for your opportunities.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Manage your job opportunities, review applications,
            discover skilled candidates and build your ideal team.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/employers/jobs"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              <Plus size={17} />
              Post a Job
            </Link>

            <Link
              href="/employers/candidates"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Find Candidates
            </Link>
          </div>
        </div>

        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      </section>

      {/* Statistics */}
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={21} />
                </div>

                <MoreHorizontal
                  size={20}
                  className="text-slate-400"
                />
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                {stat.title}
              </p>

              <h3 className="mt-1 text-3xl font-bold text-slate-900">
                {stat.value}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {stat.description}
              </p>
            </div>
          );
        })}
      </section>

      {/* Applications + Jobs */}
      <section className="grid gap-6 xl:grid-cols-3">
        {/* Applications */}
        <div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <div>
              <h2 className="font-semibold text-slate-900">
                Recent Applications
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Latest candidate applications
              </p>
            </div>

            <Link
              href="/employers/applications"
              className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              View all
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-100 text-left">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Candidate
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Position
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Match
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application) => (
                  <tr
                    key={application.name}
                    className="border-b border-slate-50 last:border-0 hover:bg-slate-50/70"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                          {application.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>

                        <span className="text-sm font-medium text-slate-800">
                          {application.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {application.role}
                    </td>

                    <td className="px-6 py-4">
                      <span className="font-semibold text-indigo-600">
                        {application.match}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          application.status === "Shortlisted"
                            ? "bg-emerald-50 text-emerald-600"
                            : application.status ===
                                "Under Review"
                              ? "bg-amber-50 text-amber-600"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {application.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Jobs */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <div>
              <h2 className="font-semibold text-slate-900">
                Active Jobs
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your current opportunities
              </p>
            </div>

            <Link
              href="/employers/jobs"
              className="text-sm font-medium text-indigo-600"
            >
              View all
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="px-6 py-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {job.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {job.type}
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-600">
                    {job.status}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <FileText size={14} />
                  {job.applications} applications
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 p-4">
            <Link
              href="/employers/jobs"
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Manage Jobs
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Candidates */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <h2 className="font-semibold text-slate-900">
              Recommended Candidates
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Candidates matching your active opportunities
            </p>
          </div>

          <Link
            href="/employers/candidates"
            className="flex items-center gap-1 text-sm font-medium text-indigo-600"
          >
            Explore candidates
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-4 p-6 md:grid-cols-3">
          {candidates.map((candidate) => (
            <div
              key={candidate.name}
              className="rounded-2xl border border-slate-100 p-5 transition hover:border-indigo-100 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 font-semibold text-indigo-600">
                  {candidate.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600">
                  {candidate.match} Match
                </span>
              </div>

              <h3 className="mt-4 font-semibold text-slate-900">
                {candidate.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {candidate.role}
              </p>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                {candidate.skills}
              </p>

              <Link
                href="/employers/candidates"
                className="mt-5 block rounded-xl border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          Quick Actions
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/employers/jobs"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200"
          >
            <BriefcaseBusiness className="text-indigo-600" size={22} />

            <h3 className="mt-4 text-sm font-semibold text-slate-900">
              Post a Job
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Create a new opportunity
            </p>
          </Link>

          <Link
            href="/employers/candidates"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200"
          >
            <Users className="text-indigo-600" size={22} />

            <h3 className="mt-4 text-sm font-semibold text-slate-900">
              Find Candidates
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Discover suitable talent
            </p>
          </Link>

          <Link
            href="/employers/challenges"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200"
          >
            <Trophy className="text-indigo-600" size={22} />

            <h3 className="mt-4 text-sm font-semibold text-slate-900">
              Create Challenge
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Test candidate skills
            </p>
          </Link>

          <Link
            href="/employers/matching"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200"
          >
            <Target className="text-indigo-600" size={22} />

            <h3 className="mt-4 text-sm font-semibold text-slate-900">
              Candidate Matching
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Find high-match candidates
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}