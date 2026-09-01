"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

type Skill = {
  id: number;
  name: string;
  level: string;
  state: string;
};

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([
    {
      id: 1,
      name: "React.js",
      level: "Intermediate",
      state: "Self-Reported",
    },
    {
      id: 2,
      name: "JavaScript",
      level: "Intermediate",
      state: "Self-Reported",
    },
  ]);

  const [newSkill, setNewSkill] = useState("");
  const [level, setLevel] = useState("Beginner");

  const addSkill = () => {
    if (!newSkill.trim()) return;

    setSkills([
      ...skills,
      {
        id: Date.now(),
        name: newSkill,
        level,
        state: "Self-Reported",
      },
    ]);

    setNewSkill("");
  };

  const deleteSkill = (id: number) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-900">
          My Skills
        </h2>

        <p className="text-sm text-slate-500">
          Skills and their current verification state
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-3 md:flex-row">

        <input
          placeholder="Enter skill e.g. React.js"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500"
        />

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-2.5"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Expert</option>
        </select>

        <button
          onClick={addSkill}
          className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white"
        >
          <Plus size={16} />
          Add Skill
        </button>

      </div>

      <div className="grid gap-4 md:grid-cols-2">

        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
          >

            <div>
              <h3 className="font-semibold text-slate-900">
                {skill.name}
              </h3>

              <p className="text-sm text-slate-500">
                {skill.level}
              </p>

              <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {skill.state}
              </span>
            </div>

            <button
              onClick={() => deleteSkill(skill.id)}
              className="rounded-lg p-2 text-red-500 hover:bg-red-50"
            >
              <X size={17} />
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}