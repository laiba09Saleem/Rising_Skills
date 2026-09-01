"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface AddSkillModalProps {
  onClose: () => void;
  onAdd: (skill: {
    name: string;
    category: string;
    proficiency: string;
    description: string;
  }) => void;
}

export default function AddSkillModal({
  onClose,
  onAdd,
}: AddSkillModalProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(
    "Frontend Development"
  );
  const [proficiency, setProficiency] =
    useState("Beginner");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    onAdd({
      name,
      category,
      proficiency,
      description,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Add Skill
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Add a skill as a self-reported claim.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-5"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Skill
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. React.js"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            >
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>Database</option>
              <option>Testing</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Proficiency
            </label>

            <select
              value={proficiency}
              onChange={(e) => setProficiency(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              rows={3}
              placeholder="Briefly describe your experience..."
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            />
          </div>

          <div className="rounded-xl bg-blue-50 p-3 text-xs text-blue-700">
            New skills are initially stored as
            <strong> Self-Reported</strong>. Assessment,
            Demonstrated and Verified states can only be
            produced through their respective system workflows.
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Add Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}