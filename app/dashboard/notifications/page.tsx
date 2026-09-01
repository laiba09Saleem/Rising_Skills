"use client";

import { useState } from "react";
import {
  Bell,
  CheckCheck,
  Clock,
  Settings,
  ShieldAlert,
} from "lucide-react";

import NotificationCard from "@/components/notifications/NotificationCard";
import NotificationFilters, {
  type NotificationFilter,
} from "@/components/notifications/NotificationFilters";
import NotificationPreferences from "@/components/notifications/NotificationPreferences";

const CHALLENGE_TYPES = new Set(["challenge", "submission", "deadline"]);
const OPPORTUNITY_TYPES = new Set(["opportunity", "application"]);
const SYSTEM_TYPES = new Set(["evidence", "feedback"]);

function filterNotifications(
  items: typeof notifications,
  filter: NotificationFilter
) {
  switch (filter) {
    case "Unread":
      return items.filter((notification) => !notification.read);
    case "Challenges":
      return items.filter((notification) =>
        CHALLENGE_TYPES.has(notification.type)
      );
    case "Opportunities":
      return items.filter((notification) =>
        OPPORTUNITY_TYPES.has(notification.type)
      );
    case "System":
      return items.filter((notification) =>
        SYSTEM_TYPES.has(notification.type)
      );
    default:
      return items;
  }
}

const notifications = [
  {
    id: "1",
    type: "submission",
    title: "Challenge submission evaluated",
    message:
      "Your React Frontend Dashboard submission has been evaluated. View your score and feedback.",
    time: "10 minutes ago",
    read: false,
    urgency: "medium" as const,
  },
  {
    id: "2",
    type: "opportunity",
    title: "New opportunity recommendation",
    message:
      "A Frontend Developer Internship matches your React and JavaScript skills.",
    time: "1 hour ago",
    read: false,
    urgency: "low" as const,
  },
  {
    id: "3",
    type: "evidence",
    title: "Skill evidence verified",
    message:
      "Your React skill evidence has been verified by an evaluator.",
    time: "3 hours ago",
    read: false,
    urgency: "high" as const,
  },
  {
    id: "4",
    type: "challenge",
    title: "New challenge assigned",
    message:
      "A new JavaScript API Integration challenge is available for you.",
    time: "Yesterday",
    read: true,
    urgency: "medium" as const,
  },
  {
    id: "5",
    type: "application",
    title: "Application status updated",
    message:
      "Your application for Frontend Developer Intern moved to Shortlisted.",
    time: "Yesterday",
    read: true,
    urgency: "high" as const,
  },
  {
    id: "6",
    type: "deadline",
    title: "Challenge deadline approaching",
    message:
      "Your React Frontend Dashboard challenge deadline is tomorrow.",
    time: "2 days ago",
    read: true,
    urgency: "high" as const,
  },
  {
    id: "7",
    type: "feedback",
    title: "Employer feedback received",
    message:
      "An employer has added feedback to your recent application.",
    time: "3 days ago",
    read: true,
    urgency: "low" as const,
  },
];

export default function NotificationsPage() {
  const [showPreferences, setShowPreferences] = useState(false);
  const [activeFilter, setActiveFilter] = useState<NotificationFilter>("All");

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const filteredNotifications = filterNotifications(
    notifications,
    activeFilter
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Notifications
              </h1>

              {unreadCount > 0 && (
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                  {unreadCount} unread
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-slate-500">
              Stay updated with your assessments, challenges, opportunities,
              applications, and skill verification.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowPreferences(!showPreferences)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <Settings size={17} />
            Preferences
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Notifications</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {notifications.length}
                </p>
              </div>

              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Bell size={21} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Unread</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {unreadCount}
                </p>
              </div>

              <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                <Clock size={21} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Security</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  Active
                </p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <ShieldAlert size={21} />
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        {showPreferences && (
          <div className="mb-8">
            <NotificationPreferences />
          </div>
        )}

        {/* Notification List */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
            <NotificationFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              <CheckCheck size={17} />
              Mark all as read
            </button>
          </div>

          {filteredNotifications.length > 0 ? (
            <div>
              {filteredNotifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </div>
          ) : (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Bell size={24} />
              </div>

              <h3 className="mt-4 font-semibold text-slate-900">
                {activeFilter === "All"
                  ? "No notifications"
                  : `No ${activeFilter.toLowerCase()} notifications`}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {activeFilter === "All"
                  ? "You are all caught up."
                  : "Try selecting a different filter."}
              </p>
            </div>
          )}
        </div>

        {/* Footer note */}
        <div className="mt-5 rounded-xl border border-slate-200 bg-white px-5 py-4">
          <p className="text-xs leading-5 text-slate-500">
            Notification history is retained even when an external delivery
            channel such as email or push fails. Delivery status will be
            available when the backend notification service is connected.
          </p>
        </div>
      </div>
    </div>
  );
}