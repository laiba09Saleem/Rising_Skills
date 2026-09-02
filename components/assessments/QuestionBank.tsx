"use client";

import { useState } from "react";
import { Plus, Search, X } from "lucide-react";

interface Question {
  id: string;
  text: string;
  type: "Multiple Choice" | "True / False" | "Short Answer";
  skill: string;
  difficulty: "Easy" | "Medium" | "Hard";
  status: "Active" | "Retired";
  createdDate: string;
}

const mockQuestions: Question[] = [
  {
    id: "Q-001",
    text: "What is the purpose of the useEffect hook in React?",
    type: "Multiple Choice",
    skill: "React.js",
    difficulty: "Medium",
    status: "Active",
    createdDate: "2026-07-10",
  },
  {
    id: "Q-002",
    text: "JavaScript is a statically typed language.",
    type: "True / False",
    skill: "JavaScript",
    difficulty: "Easy",
    status: "Active",
    createdDate: "2026-07-12",
  },
  {
    id: "Q-003",
    text: "Explain the difference between let, const, and var.",
    type: "Short Answer",
    skill: "JavaScript",
    difficulty: "Medium",
    status: "Active",
    createdDate: "2026-07-15",
  },
  {
    id: "Q-004",
    text: "Which method is used to update state in a functional component?",
    type: "Multiple Choice",
    skill: "React.js",
    difficulty: "Easy",
    status: "Active",
    createdDate: "2026-07-18",
  },
  {
    id: "Q-005",
    text: "CSS Grid and Flexbox serve the exact same purpose.",
    type: "True / False",
    skill: "UI Development",
    difficulty: "Easy",
    status: "Retired",
    createdDate: "2026-06-20",
  },
];

export default function QuestionBank() {
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [retireTarget, setRetireTarget] = useState<Question | null>(null);
  const [questions, setQuestions] = useState(mockQuestions);

  const filtered = questions.filter(
    (q) =>
      q.text.toLowerCase().includes(search.toLowerCase()) ||
      q.skill.toLowerCase().includes(search.toLowerCase())
  );

  const handleRetire = () => {
    if (!retireTarget) return;
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === retireTarget.id ? { ...q, status: "Retired" as const } : q
      )
    );
    setRetireTarget(null);
  };

  return (
    <div className="p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
        <div>
          <h2 className="text-base font-semibold text-[#222]">
            Question Bank
          </h2>
          <p className="text-xs text-[#999] mt-1">
            Manage reusable assessment questions
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-[#6C4DF6] hover:bg-[#5D3FE4] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          <Plus size={16} />
          Add Question
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-5">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions"
            className="w-56 border border-[#DDD] rounded-lg pl-9 pr-3 py-2 text-sm outline-none focus:border-[#6C4DF6]"
          />
        </div>

        <select className="border border-[#DDD] rounded-lg px-3 py-2 text-sm text-[#555]">
          <option>All Skills</option>
          <option>React.js</option>
          <option>JavaScript</option>
          <option>UI Development</option>
        </select>

        <select className="border border-[#DDD] rounded-lg px-3 py-2 text-sm text-[#555]">
          <option>All Difficulties</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <select className="border border-[#DDD] rounded-lg px-3 py-2 text-sm text-[#555]">
          <option>All Types</option>
          <option>Multiple Choice</option>
          <option>True / False</option>
          <option>Short Answer</option>
        </select>

        <select className="border border-[#DDD] rounded-lg px-3 py-2 text-sm text-[#555]">
          <option>All Status</option>
          <option>Active</option>
          <option>Retired</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-14 h-14 rounded-full bg-[#F1EDFF] flex items-center justify-center mx-auto text-2xl">
            ❓
          </div>
          <h3 className="text-base font-semibold text-[#222] mt-4">
            No questions found
          </h3>
          <p className="text-sm text-[#999] mt-1">
            Add your first question to get started.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#EAEAEA] text-left text-xs text-[#999]">
                <th className="pb-3 font-medium">Question</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Skill</th>
                <th className="pb-3 font-medium">Difficulty</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Created</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((question) => (
                <tr
                  key={question.id}
                  className="border-b border-[#F0F0F0] hover:bg-[#FAFAFC] transition"
                >
                  <td className="py-4 max-w-xs">
                    <p className="font-medium text-[#222] line-clamp-2">
                      {question.text}
                    </p>
                    <p className="text-xs text-[#999] mt-0.5">
                      {question.id}
                    </p>
                  </td>
                  <td className="py-4 text-[#666]">{question.type}</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-[#F4F1FF] text-[#6C4DF6] rounded-md text-xs">
                      {question.skill}
                    </span>
                  </td>
                  <td className="py-4">
                    <DifficultyBadge difficulty={question.difficulty} />
                  </td>
                  <td className="py-4">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        question.status === "Active"
                          ? "bg-[#E8F8EF] text-[#199B52]"
                          : "bg-[#F0F0F0] text-[#777]"
                      }`}
                    >
                      {question.status}
                    </span>
                  </td>
                  <td className="py-4 text-[#666]">
                    {question.createdDate}
                  </td>
                  <td className="py-4">
                    <div className="flex gap-3">
                      <button className="text-[#6C4DF6] text-sm hover:underline">
                        Edit
                      </button>
                      <button className="text-[#6C4DF6] text-sm hover:underline">
                        View
                      </button>
                      {question.status === "Active" && (
                        <button
                          onClick={() => setRetireTarget(question)}
                          className="text-red-500 text-sm hover:underline"
                        >
                          Retire
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showAddModal && (
        <AddQuestionModal onClose={() => setShowAddModal(false)} />
      )}

      {retireTarget && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md p-6">
            <h2 className="text-lg font-semibold text-[#222]">
              Retire Question?
            </h2>
            <p className="text-sm text-[#666] mt-2">
              This question will no longer be available for new assessments.
              Existing assessments using this question will not be affected.
            </p>
            <p className="text-sm text-[#444] mt-3 font-medium line-clamp-2">
              &ldquo;{retireTarget.text}&rdquo;
            </p>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setRetireTarget(null)}
                className="border border-[#DDD] px-4 py-2 rounded-lg text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleRetire}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
              >
                Retire Question
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DifficultyBadge({
  difficulty,
}: {
  difficulty: "Easy" | "Medium" | "Hard";
}) {
  const styles = {
    Easy: "bg-[#E8F8EF] text-[#199B52]",
    Medium: "bg-[#FFF4DC] text-[#C78100]",
    Hard: "bg-[#FEECEC] text-[#D93025]",
  };

  return (
    <span className={`text-xs px-2.5 py-1 rounded-full ${styles[difficulty]}`}>
      {difficulty}
    </span>
  );
}

function AddQuestionModal({ onClose }: { onClose: () => void }) {
  const [questionType, setQuestionType] = useState("Multiple Choice");

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-[#EAEAEA] p-5">
          <div>
            <h2 className="text-lg font-semibold text-[#222]">Add Question</h2>
            <p className="text-xs text-[#999] mt-1">
              Create a new question for the bank
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <Field label="Question Text">
            <textarea
              rows={3}
              placeholder="Enter your question..."
              className="w-full border border-[#DDD] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#6C4DF6] resize-none"
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Question Type">
              <select
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
                className="w-full border border-[#DDD] rounded-lg px-3 py-2.5 text-sm"
              >
                <option>Multiple Choice</option>
                <option>True / False</option>
                <option>Short Answer</option>
              </select>
            </Field>

            <Field label="Skill">
              <select className="w-full border border-[#DDD] rounded-lg px-3 py-2.5 text-sm">
                <option>React.js</option>
                <option>JavaScript</option>
                <option>UI Development</option>
                <option>TypeScript</option>
              </select>
            </Field>
          </div>

          <Field label="Difficulty">
            <select className="w-full border border-[#DDD] rounded-lg px-3 py-2.5 text-sm">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </Field>

          {(questionType === "Multiple Choice" ||
            questionType === "True / False") && (
            <div className="space-y-3">
              <p className="text-sm font-medium text-[#333]">Answer Options</p>
              {questionType === "True / False" ? (
                <>
                  <AnswerOption label="True" name="correct" />
                  <AnswerOption label="False" name="correct" />
                </>
              ) : (
                <>
                  <AnswerOption label="Option A" name="correct" />
                  <AnswerOption label="Option B" name="correct" />
                  <AnswerOption label="Option C" name="correct" />
                  <AnswerOption label="Option D" name="correct" />
                </>
              )}
            </div>
          )}

          <Field label="Explanation (optional)">
            <textarea
              rows={2}
              placeholder="Explain the correct answer..."
              className="w-full border border-[#DDD] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#6C4DF6] resize-none"
            />
          </Field>
        </div>

        <div className="flex justify-end gap-3 border-t border-[#EAEAEA] p-5">
          <button
            onClick={onClose}
            className="border border-[#DDD] px-4 py-2 rounded-lg text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="bg-[#6C4DF6] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#5D3FE4]"
          >
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-[#333] block mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

function AnswerOption({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <input type="radio" name={name} className="accent-[#6C4DF6]" />
      <input
        type="text"
        placeholder={label}
        className="flex-1 border border-[#DDD] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#6C4DF6]"
      />
    </div>
  );
}
