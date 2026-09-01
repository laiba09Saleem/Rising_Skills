"use client";

import {
  CheckCircle2,
  Filter,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  XCircle,
} from "lucide-react";

import RecommendationCard from "@/components/recommendations/RecommendationCard";
import MatchScore from "@/components/recommendations/MatchScore";
import SkillMatch from "@/components/recommendations/SkillMatch";

const recommendations = [
  {
    id: "frontend-developer-intern",
    title: "Frontend Developer Intern",
    company: "TechNova Solutions",
    type: "Internship",
    location: "Lahore",
    workMode: "Hybrid",
    score: 92,
    requiredSkills: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
    matchedSkills: ["React", "JavaScript", "Tailwind CSS"],
    missingSkills: ["TypeScript"],
    aiReason:
      "Your React and frontend experience strongly matches the role. Your demonstrated frontend skills and relevant project experience make this a strong opportunity.",
  },
  {
    id: "react-developer",
    title: "Junior React Developer",
    company: "Digital Labs",
    type: "Job",
    location: "Lahore",
    workMode: "On-site",
    score: 87,
    requiredSkills: ["React", "JavaScript", "REST API"],
    matchedSkills: ["React", "JavaScript", "REST API"],
    missingSkills: [],
    aiReason:
      "Your React experience and API knowledge closely match the mandatory and optional requirements of this opportunity.",
  },
  {
    id: "frontend-project",
    title: "Frontend Development Project",
    company: "BuildHub",
    type: "Project",
    location: "Remote",
    workMode: "Remote",
    score: 81,
    requiredSkills: ["React", "CSS", "Git"],
    matchedSkills: ["React", "CSS"],
    missingSkills: ["Git"],
    aiReason:
      "Your frontend development skills are a strong match. Improving your verified Git evidence could further strengthen this recommendation.",
  },
];

const skillData = [
  {
    name: "React",
    requiredLevel: "Intermediate",
    studentLevel: "Advanced",
    state: "Demonstrated" as const,
  },
  {
    name: "JavaScript",
    requiredLevel: "Intermediate",
    studentLevel: "Advanced",
    state: "Verified" as const,
  },
  {
    name: "Tailwind CSS",
    requiredLevel: "Intermediate",
    studentLevel: "Intermediate",
    state: "Assessed" as const,
  },
  {
    name: "TypeScript",
    requiredLevel: "Intermediate",
    studentLevel: "Beginner",
    state: "Self-Reported" as const,
  },
];

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Sparkles size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-indigo-600">
                SMART MATCHING
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Recommendations
              </h1>
            </div>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Discover opportunities that match your skills, proficiency,
            evidence and career profile.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Recommended
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  8
                </p>
              </div>

              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Target size={21} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Eligible
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  6
                </p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <CheckCircle2 size={21} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Average Match
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  87%
                </p>
              </div>

              <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                <TrendingUp size={21} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Verified Skills
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  5
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <ShieldCheck size={21} />
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility explanation */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                How your recommendations work
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Opportunities are first checked against mandatory
                requirements. Only eligible opportunities are scored and
                recommended.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 size={14} />
                  Hard Eligibility
                </span>

                <span className="flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700">
                  <Target size={14} />
                  Base Match Score
                </span>

                <span className="flex items-center gap-2 rounded-lg bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700">
                  <Sparkles size={14} />
                  AI-Assisted Explanation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal match */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          <MatchScore score={92} />

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Your Profile Strength
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Evidence-backed skills improve your matching score.
            </p>

            <div className="mt-5 space-y-4">

              <div>
                <div className="mb-2 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">
                    Verified
                  </span>
                  <span className="font-semibold text-slate-900">
                    5 skills
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[80%] rounded-full bg-emerald-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">
                    Demonstrated
                  </span>
                  <span className="font-semibold text-slate-900">
                    4 skills
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[65%] rounded-full bg-violet-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">
                    Assessed
                  </span>
                  <span className="font-semibold text-slate-900">
                    3 skills
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[50%] rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill comparison */}
        <div className="mb-8">
          <SkillMatch skills={skillData} />
        </div>

        {/* Filters */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <h2 className="font-bold text-slate-900">
                Recommended Opportunities
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Ranked using deterministic matching rules.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
                <Filter size={16} />
                Filters
              </button>

              <button className="rounded-xl bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                Best Match
              </button>

              <button className="rounded-xl px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50">
                Latest
              </button>
            </div>
          </div>
        </div>

        {/* Recommendation cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {recommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
            />
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-start gap-3">
            <XCircle
              size={18}
              className="mt-0.5 text-slate-400"
            />

            <div>
              <p className="text-sm font-semibold text-slate-700">
                Important
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                AI-assisted recommendations cannot override mandatory
                eligibility rules. The deterministic match score remains
                separate from any AI-generated explanation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}