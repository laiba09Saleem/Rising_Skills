"use client";

import { useState } from "react";

interface Assessment {
  id: string;
  title: string;
  description: string;
  skills: string[];
  questions: number;
  duration: number;
  passScore: number;
  attempts: number;
  status: string;
  version: string;
}

export default function AssessmentCard({
  assessment,
}: {
  assessment: Assessment;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showAssign, setShowAssign] = useState(false);

  return (
    <div className="border border-[#E8E8ED] rounded-xl p-5 hover:shadow-sm transition">

      <div className="flex justify-between">

        <div className="flex gap-4">

          {/* Icon */}
          <div className="w-11 h-11 rounded-lg bg-[#F1EDFF]
            flex items-center justify-center text-[#6C4DF6]">
            📝
          </div>

          <div>

            <div className="flex items-center gap-3">

              <h3 className="font-semibold text-[#222]">
                {assessment.title}
              </h3>

              <span
                className={`text-xs px-2.5 py-1 rounded-full ${
                  assessment.status === "Published"
                    ? "bg-[#E8F8EF] text-[#199B52]"
                    : "bg-[#FFF4DC] text-[#C78100]"
                }`}
              >
                {assessment.status}
              </span>

            </div>

            <p className="text-xs text-[#999] mt-1">
              {assessment.id} • Version {assessment.version}
            </p>

            <p className="text-sm text-[#777] mt-3 max-w-2xl">
              {assessment.description}
            </p>

          </div>

        </div>

        {/* Menu */}
        <div className="relative">

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl text-[#999] hover:text-[#444]"
          >
            ⋮
          </button>

          {showMenu && (
            <div className="absolute right-0 top-8 bg-white
              border border-[#E5E5E5] rounded-lg shadow-lg
              w-40 z-10 py-1">

              <button className="block w-full text-left px-4 py-2
                text-sm hover:bg-gray-50">
                Edit
              </button>

              <button className="block w-full text-left px-4 py-2
                text-sm hover:bg-gray-50">
                Duplicate
              </button>

              <button className="block w-full text-left px-4 py-2
                text-sm text-red-500 hover:bg-gray-50">
                Archive
              </button>

            </div>
          )}

        </div>

      </div>

      {/* Skills */}
      <div className="flex gap-2 mt-4 ml-15">

        {assessment.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 bg-[#F4F1FF]
            text-[#6C4DF6] rounded-md text-xs"
          >
            {skill}
          </span>
        ))}

      </div>

      {/* Details */}
      <div className="grid grid-cols-4 border-t mt-5 pt-4">

        <Detail
          label="Questions"
          value={assessment.questions.toString()}
        />

        <Detail
          label="Duration"
          value={`${assessment.duration} min`}
        />

        <Detail
          label="Pass Score"
          value={`${assessment.passScore}%`}
        />

        <Detail
          label="Max Attempts"
          value={assessment.attempts.toString()}
        />

      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 mt-4">

        <button
          onClick={() => setShowAssign(true)}
          disabled={assessment.status !== "Published"}
          className="px-4 py-2 border border-[#DDD]
          rounded-lg text-sm hover:bg-gray-50 disabled:opacity-40"
        >
          Assign
        </button>

        <button className="px-4 py-2 bg-[#6C4DF6]
          text-white rounded-lg text-sm hover:bg-[#5D3FE4]">
          View Details
        </button>

      </div>

      {/* Assign Dialog */}
      {showAssign && (
        <div className="fixed inset-0 bg-black/30 z-50
          flex items-center justify-center">

          <div className="bg-white rounded-xl w-[430px] p-6">

            <h2 className="text-lg font-semibold">
              Assign Assessment
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Assign this assessment to a student.
            </p>

            <div className="mt-5 space-y-4">

              <div>
                <label className="text-sm font-medium">
                  Student
                </label>

                <select className="w-full mt-1 border rounded-lg
                  px-3 py-2.5 text-sm">
                  <option>Select Student</option>
                  <option>Ali Raza</option>
                  <option>Hina Khan</option>
                  <option>Ahmed Hassan</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Due Date
                </label>

                <input
                  type="date"
                  className="w-full mt-1 border rounded-lg
                  px-3 py-2.5 text-sm"
                />
              </div>

            </div>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setShowAssign(false)}
                className="border px-4 py-2 rounded-lg text-sm"
              >
                Cancel
              </button>

              <button
                onClick={() => setShowAssign(false)}
                className="bg-[#6C4DF6] text-white px-4 py-2
                rounded-lg text-sm"
              >
                Assign
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-[#999]">
        {label}
      </p>

      <p className="text-sm font-semibold text-[#333] mt-1">
        {value}
      </p>
    </div>
  );
}