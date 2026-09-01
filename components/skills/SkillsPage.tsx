"use client";

import {
  Award,
  Plus,
  ShieldCheck,
  Target,
} from "lucide-react";

import { useMemo, useState } from "react";

import SkillCard, {
  Skill,
} from "./SkillCard";

import SkillFilters from "./SkillFilters";

import AddSkillModal from "./AddSkillModal";

import EditSkillModal from "./EditSkillModal";

import SkillDetailsModal from "./SkillDetailsModal";

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([
    {
      id: 1,
      name: "React.js",
      category: "Frontend Development",
      proficiency: "Advanced",
      state: "Verified",
      evidenceCount: 3,
      lastUpdated: "Aug 28, 2026",
      description:
        "Building modern frontend applications using React.js.",
    },

    {
      id: 2,
      name: "JavaScript",
      category: "Frontend Development",
      proficiency: "Advanced",
      state: "Demonstrated",
      evidenceCount: 2,
      lastUpdated: "Aug 20, 2026",
      description:
        "Strong understanding of modern JavaScript.",
    },

    {
      id: 3,
      name: "Node.js",
      category: "Backend Development",
      proficiency: "Intermediate",
      state: "Assessed",
      evidenceCount: 1,
      lastUpdated: "Aug 18, 2026",
      description:
        "Backend development using Node.js and Express.",
    },

    {
      id: 4,
      name: "Manual Testing",
      category: "Testing",
      proficiency: "Intermediate",
      state: "Self-Reported",
      evidenceCount: 0,
      lastUpdated: "Aug 10, 2026",
      description:
        "Manual testing and bug reporting experience.",
    },
  ]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [state, setState] = useState("All");

  const [showAdd, setShowAdd] = useState(false);

  const [selectedSkill, setSelectedSkill] =
    useState<Skill | null>(null);

  const [editingSkill, setEditingSkill] =
    useState<Skill | null>(null);

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesSearch = skill.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        skill.category === category;

      const matchesState =
        state === "All" ||
        skill.state === state;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesState
      );
    });
  }, [skills, search, category, state]);

  const verifiedCount = skills.filter(
    (skill) => skill.state === "Verified"
  ).length;

  const demonstratedCount = skills.filter(
    (skill) => skill.state === "Demonstrated"
  ).length;

  const assessedCount = skills.filter(
    (skill) => skill.state === "Assessed"
  ).length;

  const handleAddSkill = (data: {
    name: string;
    category: string;
    proficiency: string;
    description: string;
  }) => {
    const newSkill: Skill = {
      id: Date.now(),
      name: data.name,
      category: data.category,
      proficiency: data.proficiency,
      state: "Self-Reported",
      evidenceCount: 0,
      lastUpdated: "Just now",
      description: data.description,
    };

    setSkills((previous) => [
      newSkill,
      ...previous,
    ]);

    setShowAdd(false);
  };

  const handleUpdateSkill = (data: {
    proficiency: string;
    description: string;
  }) => {
    if (!editingSkill) return;

    setSkills((previous) =>
      previous.map((skill) =>
        skill.id === editingSkill.id
          ? {
              ...skill,
              proficiency: data.proficiency,
              description: data.description,
              lastUpdated: "Just now",
            }
          : skill
      )
    );

    setEditingSkill(null);
  };

  const handleDelete = (id: number) => {
    const skill = skills.find(
      (item) => item.id === id
    );

    if (!skill) return;

    if (skill.state !== "Self-Reported") {
      alert(
        "Only self-reported skills can be deleted."
      );

      return;
    }

    const confirmed = window.confirm(
      `Delete ${skill.name}?`
    );

    if (!confirmed) return;

    setSkills((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium text-indigo-600">
              Student Portal
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              My Skills
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Manage your skills, track your proficiency,
              assessments, practical demonstrations and
              verification evidence.
            </p>
          </div>

          <button
            onClick={() => setShowAdd(true)}
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Plus size={18} />
            Add Skill
          </button>
        </div>

        {/* Stats */}

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Total Skills
              </p>

              <Target
                size={20}
                className="text-indigo-500"
              />
            </div>

            <p className="mt-3 text-2xl font-bold text-slate-900">
              {skills.length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Verified
              </p>

              <ShieldCheck
                size={20}
                className="text-green-600"
              />
            </div>

            <p className="mt-3 text-2xl font-bold text-slate-900">
              {verifiedCount}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Demonstrated
              </p>

              <Award
                size={20}
                className="text-purple-600"
              />
            </div>

            <p className="mt-3 text-2xl font-bold text-slate-900">
              {demonstratedCount}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Assessed
              </p>

              <Target
                size={20}
                className="text-blue-600"
              />
            </div>

            <p className="mt-3 text-2xl font-bold text-slate-900">
              {assessedCount}
            </p>
          </div>
        </div>

        {/* Filters */}

        <div className="mt-8">
          <SkillFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            state={state}
            setState={setState}
          />
        </div>

        {/* Skills */}

        <div className="mt-6">
          {filteredSkills.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <Target
                size={40}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-4 text-lg font-bold text-slate-800">
                No skills found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  onView={setSelectedSkill}
                  onEdit={setEditingSkill}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Skill */}

      {showAdd && (
        <AddSkillModal
          onClose={() => setShowAdd(false)}
          onAdd={handleAddSkill}
        />
      )}

      {/* Edit Skill */}

      {editingSkill && (
        <EditSkillModal
          skill={editingSkill}
          onClose={() => setEditingSkill(null)}
          onSave={handleUpdateSkill}
        />
      )}

      {/* Details */}

      {selectedSkill && (
        <SkillDetailsModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </div>
  );
}