import EvidenceCard, {
    Evidence,
  } from "@/components/evidence/EvidenceCard";
  import EvidenceFilters from "@/components/evidence/EvidenceFilters";
  import {
    Award,
    BookOpenCheck,
    ShieldCheck,
    Sparkles,
  } from "lucide-react";
  
  const evidence: Evidence[] = [
    {
      id: "ev-js-assessed",
      skill: "JavaScript",
      state: "Assessed",
      sourceType: "Assessment",
      sourceTitle: "JavaScript Fundamentals",
      score: 82,
      date: "Aug 18, 2026",
      description:
        "Assessment result demonstrating knowledge of JavaScript fundamentals and ES6+ concepts.",
    },
    {
      id: "ev-react-demo",
      skill: "React.js",
      state: "Demonstrated",
      sourceType: "Challenge",
      sourceTitle: "React Frontend Dashboard",
      score: 88,
      evaluator: "Ahmed Khan — Evaluator",
      date: "Aug 25, 2026",
      description:
        "Passing practical challenge submission reviewed against the challenge rubric.",
    },
    {
      id: "ev-ts-verified",
      skill: "TypeScript",
      state: "Verified",
      sourceType: "Verification",
      sourceTitle: "TypeScript Skill Verification",
      evaluator: "Sara Ahmed — Evaluator",
      date: "Aug 30, 2026",
      description:
        "Skill independently verified by an authorized evaluator.",
    },
    {
      id: "ev-html-assessed",
      skill: "HTML & CSS",
      state: "Assessed",
      sourceType: "Assessment",
      sourceTitle: "HTML & CSS Assessment",
      score: 91,
      date: "Aug 15, 2026",
      description:
        "Assessment result demonstrating knowledge of HTML semantics and CSS fundamentals.",
    },
  ];
  
  export default function EvidencePage() {
    const assessed = evidence.filter(
      (item) => item.state === "Assessed"
    ).length;
  
    const demonstrated = evidence.filter(
      (item) => item.state === "Demonstrated"
    ).length;
  
    const verified = evidence.filter(
      (item) => item.state === "Verified"
    ).length;
  
    return (
      <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">
  
          {/* Header */}
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold text-indigo-600">
              SKILL EVIDENCE
            </p>
  
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              My Evidence
            </h1>
  
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              View the evidence behind your skills, including assessments,
              practical challenges, and independent verification.
            </p>
          </div>
  
          {/* Important notice */}
          <div className="mb-8 flex gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600">
              <Sparkles size={20} />
            </div>
  
            <div>
              <h3 className="font-semibold text-slate-900">
                Evidence is your skill proof
              </h3>
  
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Evidence is generated from trusted platform activities.
                It cannot be manually edited or deleted by the student.
              </p>
            </div>
          </div>
  
          {/* Stats */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Total Evidence"
              value={evidence.length}
              icon={<Sparkles size={22} />}
              iconClass="bg-indigo-50 text-indigo-600"
            />
  
            <StatCard
              label="Assessed"
              value={assessed}
              icon={<BookOpenCheck size={22} />}
              iconClass="bg-indigo-50 text-indigo-600"
            />
  
            <StatCard
              label="Demonstrated"
              value={demonstrated}
              icon={<Award size={22} />}
              iconClass="bg-amber-50 text-amber-600"
            />
  
            <StatCard
              label="Verified"
              value={verified}
              icon={<ShieldCheck size={22} />}
              iconClass="bg-emerald-50 text-emerald-600"
            />
          </div>
  
          {/* Filters */}
          <EvidenceFilters />
  
          {/* Evidence list */}
          <div className="mb-5">
            <h2 className="text-lg font-bold text-slate-900">
              Evidence History
            </h2>
  
            <p className="mt-1 text-sm text-slate-500">
              Your evidence records from assessments, challenges, and
              verification events.
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {evidence.map((item) => (
              <EvidenceCard
                key={item.id}
                evidence={item}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  function StatCard({
    label,
    value,
    icon,
    iconClass,
  }: {
    label: string;
    value: number;
    icon: React.ReactNode;
    iconClass: string;
  }) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">{label}</p>
  
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