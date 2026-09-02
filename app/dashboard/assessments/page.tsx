"use client";

import { useState } from "react";
import AssessmentCard from "@/components/assessments/AssessmentCard";
import AssessmentFilters from "@/components/assessments/AssessmentFilters";
import CreateAssessment from "@/components/assessments/CreateAssessment";
import QuestionBank from "@/components/assessments/QuestionBank";
import AssessmentResults from "@/components/assessments/AssessmentResults";
import AssessmentVersions from "@/components/assessments/AssessmentVersions";

type Tab = "assessments" | "questions" | "results" | "versions";

const assessments = [
  {
    id: "AS-001",
    title: "Frontend Developer Assessment",
    description:
      "Evaluate frontend development skills including React, JavaScript and UI development.",
    skills: ["React.js", "JavaScript", "UI Development"],
    questions: 20,
    duration: 30,
    passScore: 70,
    attempts: 2,
    status: "Published",
    version: "1.0",
  },
  {
    id: "AS-002",
    title: "JavaScript Fundamentals",
    description:
      "Assessment covering JavaScript fundamentals, ES6+ and programming concepts.",
    skills: ["JavaScript", "ES6+"],
    questions: 15,
    duration: 20,
    passScore: 60,
    attempts: 3,
    status: "Draft",
    version: "1.0",
  },
  {
    id: "AS-003",
    title: "React.js Skills Assessment",
    description:
      "Test React components, hooks, state management and routing knowledge.",
    skills: ["React.js", "Hooks", "Redux"],
    questions: 25,
    duration: 40,
    passScore: 70,
    attempts: 2,
    status: "Published",
    version: "1.2",
  },
];

export default function AssessmentsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("assessments");
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FC] px-6 py-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-[26px] font-semibold text-[#171717]">
            Assessments
          </h1>

          <p className="text-sm text-[#777] mt-1">
            Create, manage and evaluate skill assessments
          </p>
        </div>

        <button
          onClick={() => setShowCreate(true)}
          className="bg-[#6C4DF6] hover:bg-[#5D3FE4] text-white
          px-5 py-2.5 rounded-lg text-sm font-medium transition"
        >
          + Create Assessment
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-7">

        <StatCard
          title="Total Assessments"
          value="24"
          subtitle="+3 this month"
        />

        <StatCard
          title="Published"
          value="18"
          subtitle="Ready to assign"
        />

        <StatCard
          title="Draft"
          value="6"
          subtitle="In preparation"
        />

        <StatCard
          title="Questions"
          value="128"
          subtitle="In question bank"
        />

      </div>

      {/* Main Card */}
      <div className="bg-white border border-[#E8E8ED] rounded-xl">

        {/* Tabs */}
        <div className="border-b border-[#EAEAEA] px-5">
          <div className="flex gap-7">

            <TabButton
              active={activeTab === "assessments"}
              onClick={() => setActiveTab("assessments")}
            >
              Assessments
            </TabButton>

            <TabButton
              active={activeTab === "questions"}
              onClick={() => setActiveTab("questions")}
            >
              Question Bank
            </TabButton>

            <TabButton
              active={activeTab === "results"}
              onClick={() => setActiveTab("results")}
            >
              Results
            </TabButton>

            <TabButton
              active={activeTab === "versions"}
              onClick={() => setActiveTab("versions")}
            >
              Versions
            </TabButton>

          </div>
        </div>

        {/* Assessments */}
        {activeTab === "assessments" && (
          <div className="p-5">

            <AssessmentFilters />

            <div className="space-y-4 mt-5">

              {assessments.map((assessment) => (
                <AssessmentCard
                  key={assessment.id}
                  assessment={assessment}
                />
              ))}

            </div>

          </div>
        )}

        {/* Question Bank */}
        {activeTab === "questions" && (
          <QuestionBank />
        )}

        {/* Results */}
        {activeTab === "results" && (
          <AssessmentResults />
        )}

        {/* Versions */}
        {activeTab === "versions" && (
          <AssessmentVersions />
        )}

      </div>

      {/* Create Modal */}
      {showCreate && (
        <CreateAssessment
          onClose={() => setShowCreate(false)}
        />
      )}

    </div>
  );
}


/* ---------------- Stats ---------------- */

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="bg-white border border-[#E8E8ED] rounded-xl p-5">

      <div className="flex justify-between items-start">

        <div>
          <p className="text-sm text-[#777]">
            {title}
          </p>

          <h2 className="text-2xl font-semibold text-[#181818] mt-2">
            {value}
          </h2>

          <p className="text-xs text-[#999] mt-1">
            {subtitle}
          </p>
        </div>

        <div className="w-10 h-10 rounded-lg bg-[#F1EDFF]
          flex items-center justify-center text-[#6C4DF6]">
          ✦
        </div>

      </div>

    </div>
  );
}


/* ---------------- Tabs ---------------- */

function TabButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`py-4 text-sm font-medium border-b-2 transition ${
        active
          ? "text-[#6C4DF6] border-[#6C4DF6]"
          : "text-[#777] border-transparent hover:text-[#333]"
      }`}
    >
      {children}
    </button>
  );
}