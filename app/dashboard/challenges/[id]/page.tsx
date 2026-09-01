import Link from "next/link";
import { notFound } from "next/navigation";
import ChallengeSubmission from "@/components/challenges/ChallengeSubmission";
import { getChallengeById } from "@/lib/challenges";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
} from "lucide-react";

type ChallengeDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ChallengeDetailPage({
  params,
}: ChallengeDetailPageProps) {
  const { id } = await params;
  const challenge = getChallengeById(id);

  if (!challenge) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/dashboard/challenges"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft size={18} />
          Back to Challenges
        </Link>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                Practical Challenge
              </span>

              <h1 className="mt-4 text-3xl font-bold text-slate-900">
                {challenge.title}
              </h1>

              <p className="mt-2 max-w-2xl text-slate-500">
                {challenge.description}
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-4 text-amber-700">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock size={18} />
                Deadline
              </div>

              <p className="mt-1 text-sm">{challenge.deadline}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Difficulty</p>
            <p className="mt-1 font-semibold text-slate-900">
              {challenge.difficulty}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Estimated Time</p>
            <p className="mt-1 font-semibold text-slate-900">
              {challenge.estimatedTime}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Submission</p>
            <p className="mt-1 font-semibold text-slate-900">
              {challenge.submissionType}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Skills Tested</h2>

          <p className="mt-1 text-sm text-slate-500">
            This challenge evaluates the following skills.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {challenge.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            Challenge Description
          </h2>

          {challenge.fullDescription.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            Deliverable Requirements
          </h2>

          <div className="mt-5 space-y-4">
            {challenge.requirements.map((requirement) => (
              <div
                key={requirement}
                className="flex items-center gap-3 text-sm text-slate-600"
              >
                <CheckCircle size={18} className="text-green-500" />
                {requirement}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            Evaluation Criteria
          </h2>

          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
            <div className="grid grid-cols-2 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
              <span>Criteria</span>
              <span>Weight</span>
            </div>

            {challenge.evaluationCriteria.map((item) => (
              <div
                key={item.criteria}
                className="grid grid-cols-2 border-t px-4 py-3 text-sm text-slate-600"
              >
                <span>{item.criteria}</span>
                <span>{item.weight}</span>
              </div>
            ))}
          </div>
        </div>

        <ChallengeSubmission
          challengeId={challenge.id}
          challengeTitle={challenge.title}
        />
      </div>
    </div>
  );
}
