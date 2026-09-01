"use client";

import {
  Bell,
  CheckCircle2,
  Clock,
  FileCheck,
  GraduationCap,
  Briefcase,
  MessageSquare,
  ShieldCheck,
  X,
} from "lucide-react";

type Notification = {
  id: string;
  type: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  urgency: "high" | "medium" | "low";
};

const icons: Record<string, any> = {
  assessment: GraduationCap,
  challenge: FileCheck,
  submission: CheckCircle2,
  evidence: ShieldCheck,
  opportunity: Briefcase,
  application: Briefcase,
  feedback: MessageSquare,
  deadline: Clock,
};

export default function NotificationCard({
  notification,
}: {
  notification: Notification;
}) {
  const Icon = icons[notification.type] || Bell;

  return (
    <div
      className={`group flex gap-4 border-b border-slate-100 p-5 transition hover:bg-slate-50 ${
        !notification.read ? "bg-indigo-50/40" : "bg-white"
      }`}
    >
      {/* Icon */}
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          notification.urgency === "high"
            ? "bg-red-50 text-red-600"
            : notification.urgency === "medium"
            ? "bg-amber-50 text-amber-600"
            : "bg-indigo-50 text-indigo-600"
        }`}
      >
        <Icon size={20} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-slate-900">
                {notification.title}
              </h3>

              {!notification.read && (
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
              )}
            </div>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              {notification.message}
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg p-1 text-slate-400 opacity-0 transition hover:bg-slate-100 hover:text-slate-600 group-hover:opacity-100"
          >
            <X size={17} />
          </button>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-xs text-slate-400">
            {notification.time}
          </span>

          {notification.urgency === "high" && (
            <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-600">
              High Priority
            </span>
          )}

          {!notification.read && (
            <button
              type="button"
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Mark as read
            </button>
          )}
        </div>
      </div>
    </div>
  );
}