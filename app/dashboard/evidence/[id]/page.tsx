"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  Clock3,
  FileCheck2,
  ShieldCheck,
  User,
} from "lucide-react";

export default function EvidenceDetailPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <Link
          href="/dashboard/evidence"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft size={18} />
          Back to Evidence
        </Link>

        {/* Header */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <ShieldCheck size={28} />
              </div>

              <div>
                <p className="text-sm font-semibold text-indigo-600">
                  VERIFIED EVIDENCE
                </p>

                <h1 className="mt-1 text-2xl font-bold text-slate-900">
                  TypeScript
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  TypeScript Skill Verification
                </p>
              </div>
            </div>

            <span className="inline-flex w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              Verified
            </span>
          </div>
        </div>

        {/* Traceability */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <FileCheck2 className="text-indigo-600" size={22} />

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Evidence Traceability
              </h2>

              <p className="text-sm text-slate-500">
                Complete source information for this evidence record.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <InfoItem
              label="Student"
              value="Nida Karamat"
              icon={<User size={17} />}
            />

            <InfoItem
              label="Skill"
              value="TypeScript"
              icon={<Award size={17} />}
            />

            <InfoItem
              label="Source"
              value="TypeScript Skill Verification"
              icon={<FileCheck2 size={17} />}
            />

            <InfoItem
              label="State"
              value="Verified"
              icon={<ShieldCheck size={17} />}
            />

            <InfoItem
              label="Evaluator"
              value="Sara Ahmed — Evaluator"
              icon={<User size={17} />}
            />

            <InfoItem
              label="Created"
              value="August 30, 2026 — 03:45 PM"
              icon={<Clock3 size={17} />}
            />
          </div>
        </div>

        {/* Verification result */}
        <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-emerald-600">
              <CheckCircle2 size={22} />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                Skill Successfully Verified
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                This skill was independently verified by an authorized
                evaluator. The verification record is part of the
                student's permanent evidence history.
              </p>
            </div>
          </div>
        </div>

        {/* Immutable notice */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-bold text-slate-900">
            Evidence Record
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Evidence records are immutable. Students cannot edit or
            delete an existing evidence record. If a correction is
            required, the system creates a new superseding evidence
            record while retaining the original history.
          </p>

          <div className="mt-5 rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Evidence ID
            </p>

            <p className="mt-1 font-mono text-sm text-slate-700">
              EV-TS-2026-0830-001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {icon}
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}