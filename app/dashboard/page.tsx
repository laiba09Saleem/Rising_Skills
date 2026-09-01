export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <p className="text-sm text-gray-500">Welcome back 👋</p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Your Career Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Track your skills, assessments, evidence and career opportunities.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Profile Completion</p>
          <h2 className="mt-2 text-3xl font-bold text-indigo-600">70%</h2>
          <div className="mt-4 h-2 rounded-full bg-gray-100">
            <div className="h-2 w-[70%] rounded-full bg-indigo-600" />
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">My Skills</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">8</h2>
          <p className="mt-2 text-sm text-green-600">3 verified</p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Assessments</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">4</h2>
          <p className="mt-2 text-sm text-gray-500">3 completed</p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Opportunities</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">12</h2>
          <p className="mt-2 text-sm text-indigo-600">4 new matches</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Your Skills</h2>
              <p className="text-sm text-gray-500">
                Current skill verification status
              </p>
            </div>
            <button className="text-sm font-medium text-indigo-600">View All</button>
          </div>

          <div className="mt-6 space-y-5">
            <Skill name="React.js" level="Advanced" status="Verified" />
            <Skill name="JavaScript" level="Advanced" status="Assessed" />
            <Skill name="TypeScript" level="Intermediate" status="Demonstrated" />
            <Skill name="Node.js" level="Intermediate" status="Self-Reported" />
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Complete Your Profile
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Complete your profile to improve your opportunity matches.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-indigo-100">
              <span className="text-2xl font-bold text-indigo-600">70%</span>
            </div>
          </div>
          <button className="mt-6 w-full rounded-lg bg-indigo-600 py-3 text-sm font-medium text-white hover:bg-indigo-700">
            Complete Profile
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Recommended Opportunities
            </h2>
            <p className="text-sm text-gray-500">
              Based on your skills and evidence
            </p>
          </div>
          <button className="text-sm font-medium text-indigo-600">View All</button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Opportunity
            title="Frontend Developer"
            company="Tech Solutions"
            match="92%"
          />
          <Opportunity title="React Developer" company="Digital Labs" match="87%" />
          <Opportunity
            title="Junior Full Stack Developer"
            company="Software House"
            match="81%"
          />
        </div>
      </div>
    </div>
  );
}

function Skill({
  name,
  level,
  status,
}: {
  name: string;
  level: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{level}</p>
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          status === "Verified"
            ? "bg-green-100 text-green-700"
            : status === "Demonstrated"
              ? "bg-blue-100 text-blue-700"
              : status === "Assessed"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-100 text-gray-600"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

function Opportunity({
  title,
  company,
  match,
}: {
  title: string;
  company: string;
  match: string;
}) {
  return (
    <div className="rounded-lg border p-5 transition hover:border-indigo-300 hover:shadow-sm">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{company}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-medium text-green-600">{match} Match</span>
        <button className="text-sm font-medium text-indigo-600">View</button>
      </div>
    </div>
  );
}
