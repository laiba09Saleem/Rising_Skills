import ChallengeCard from "@/components/challenges/ChallengeCard";
import ChallengeFilters from "@/components/challenges/ChallengeFilters";
import { challenges } from "@/lib/challenges";
import {
  CheckCircle2,
  Clock3,
  Code2,
  Trophy,
} from "lucide-react";

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold text-indigo-600">
            PRACTICAL ASSESSMENT
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Practical Challenges
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Test your skills through real-world practical challenges.
            Complete a challenge, submit your work, and earn demonstrated
            skill evidence.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Available Challenges
                </p>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  12
                </h3>
              </div>

              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Code2 size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  In Progress
                </p>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  2
                </h3>
              </div>

              <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                <Clock3 size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Completed
                </p>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  5
                </h3>
              </div>

              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <CheckCircle2 size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Skills Demonstrated
                </p>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  8
                </h3>
              </div>

              <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                <Trophy size={22} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <ChallengeFilters />

        {/* Section */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Available Challenges
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose a challenge that matches your skills and interests.
            </p>
          </div>

          <span className="hidden rounded-lg bg-white px-3 py-2 text-sm text-slate-500 shadow-sm sm:block">
            {challenges.length} challenges
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
