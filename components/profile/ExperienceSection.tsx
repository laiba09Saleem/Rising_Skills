"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

type Experience = {
  id: number;
  position: string;
  company: string;
  duration: string;
  description: string;
};

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    position: "",
    company: "",
    duration: "",
    description: "",
  });

  const addExperience = () => {
    if (!form.position || !form.company) return;

    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      position: "",
      company: "",
      duration: "",
      description: "",
    });

    setShowForm(false);
  };

  const deleteExperience = (id: number) => {
    setExperiences(
      experiences.filter((item) => item.id !== id)
    );
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Experience
          </h2>

          <p className="text-sm text-slate-500">
            Your professional experience
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white"
        >
          <Plus size={16} />
          Add Experience
        </button>
      </div>

      {showForm && (
        <div className="mb-6 space-y-4 rounded-xl bg-slate-50 p-5">

          <div className="grid gap-4 md:grid-cols-2">

            <input
              placeholder="Job Title"
              value={form.position}
              onChange={(e) =>
                setForm({
                  ...form,
                  position: e.target.value,
                })
              }
              className="rounded-xl border border-slate-300 bg-white px-4 py-2.5"
            />

            <input
              placeholder="Company"
              value={form.company}
              onChange={(e) =>
                setForm({
                  ...form,
                  company: e.target.value,
                })
              }
              className="rounded-xl border border-slate-300 bg-white px-4 py-2.5"
            />

            <input
              placeholder="Duration"
              value={form.duration}
              onChange={(e) =>
                setForm({
                  ...form,
                  duration: e.target.value,
                })
              }
              className="rounded-xl border border-slate-300 bg-white px-4 py-2.5"
            />

          </div>

          <textarea
            placeholder="Description"
            rows={3}
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5"
          />

          <button
            onClick={addExperience}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white"
          >
            Save Experience
          </button>

        </div>
      )}

      {experiences.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">
          <p className="text-sm text-slate-500">
            No experience added yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="flex justify-between rounded-xl border border-slate-200 p-5"
            >
              <div>
                <h3 className="font-semibold text-slate-900">
                  {item.position}
                </h3>

                <p className="text-sm text-slate-600">
                  {item.company}
                </p>

                <p className="text-xs text-slate-400">
                  {item.duration}
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>

              <button
                onClick={() => deleteExperience(item.id)}
                className="h-fit rounded-lg p-2 text-red-500 hover:bg-red-50"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}