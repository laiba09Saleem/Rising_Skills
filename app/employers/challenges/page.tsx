"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Trophy,
} from "lucide-react";

import ChallengeStats from "../../../component/employers/challenges/ChallengeStats";
import ChallengeFilters from "../../../component/employers/challenges/ChallengeFilters";

import ChallengeTable, {
  Challenge,
} from "../../../component/employers/challenges/ChallengeTable";

const initialChallenges: Challenge[] = [
  {
    id: 1,
    title: "React Frontend Coding Challenge",
    category: "Frontend",
    difficulty: "Medium",
    participants: 48,
    deadline: "Sep 15, 2026",
    duration: "90 Minutes",
    status: "Active",
  },
  {
    id: 2,
    title: "Machine Learning Model Challenge",
    category: "AI / ML",
    difficulty: "Hard",
    participants: 32,
    deadline: "Sep 20, 2026",
    duration: "120 Minutes",
    status: "Active",
  },
  {
    id: 3,
    title: "UI/UX Design Challenge",
    category: "Design",
    difficulty: "Medium",
    participants: 27,
    deadline: "Sep 10, 2026",
    duration: "60 Minutes",
    status: "Active",
  },
  {
    id: 4,
    title: "JavaScript Fundamentals",
    category: "Programming",
    difficulty: "Easy",
    participants: 65,
    deadline: "Aug 30, 2026",
    duration: "45 Minutes",
    status: "Completed",
  },
  {
    id: 5,
    title: "Backend API Development",
    category: "Backend",
    difficulty: "Hard",
    participants: 0,
    deadline: "Sep 25, 2026",
    duration: "120 Minutes",
    status: "Draft",
  },
];

export default function ChallengesPage() {
  const [challenges, setChallenges] =
    useState<Challenge[]>(initialChallenges);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredChallenges = challenges.filter((challenge) => {
    const text = search.toLowerCase();

    const matchesSearch =
      challenge.title.toLowerCase().includes(text) ||
      challenge.category.toLowerCase().includes(text);

    const matchesStatus =
      status === "All" || challenge.status === status;

    return matchesSearch && matchesStatus;
  });

  const activeCount = challenges.filter(
    (item) => item.status === "Active"
  ).length;

  const participants = challenges.reduce(
    (total, item) => total + item.participants,
    0
  );

  const completedCount = challenges.filter(
    (item) => item.status === "Completed"
  ).length;

  // VIEW
  const handleView = (challenge: Challenge) => {
    alert(
      `Challenge: ${challenge.title}\nCategory: ${challenge.category}\nDifficulty: ${challenge.difficulty}\nParticipants: ${challenge.participants}`
    );
  };

  // EDIT
  const handleEdit = (challenge: Challenge) => {
    const newStatus = window.prompt(
      "Enter status: Active / Draft / Completed / Closed",
      challenge.status
    );

    if (!newStatus) return;

    const validStatuses = [
      "Active",
      "Draft",
      "Completed",
      "Closed",
    ];

    if (!validStatuses.includes(newStatus)) {
      alert("Invalid status.");
      return;
    }

    setChallenges((prev) =>
      prev.map((item) =>
        item.id === challenge.id
          ? { ...item, status: newStatus }
          : item
      )
    );
  };

  // DELETE
  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this challenge?"
    );

    if (!confirmDelete) return;

    setChallenges((prev) =>
      prev.filter((challenge) => challenge.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <Trophy className="h-4 w-4" />
            <span>Employer Portal</span>
            <span>/</span>
            <span>Challenges</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Challenges
          </h1>

          <p className="mt-1 text-slate-500">
            Create and manage practical challenges for candidates.
          </p>
        </div>

        <Link
          href="/employer/challenges/create"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Create Challenge
        </Link>
      </div>

      {/* Stats */}
      <ChallengeStats
        total={challenges.length}
        active={activeCount}
        participants={participants}
        completed={completedCount}
      />

      {/* Main */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <ChallengeFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />

        <ChallengeTable
          challenges={filteredChallenges}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
          <p className="text-sm text-slate-500">
            Showing {filteredChallenges.length} challenges
          </p>
        </div>
      </div>
    </div>
  );
}