"use client";

import { useState } from "react";
import HabitIcon from "./HabitIcon";
import HabitProgress from "./HabitProgress";

type HabitCardProps = {
  id: number;
  name: string;
  description: string;
  streak: number;
  progress: number;
  icon?: string;
  completed?: boolean;
  onToggle?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
};

export default function HabitCard({
  name,
  description,
  streak,
  progress,
  icon = "🌱",
  completed = false,
  onToggle,
  onDelete,
  onEdit,
}: HabitCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`relative rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition-all duration-200 ${
        completed ? "opacity-80" : "hover:-translate-y-0.5"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Habit icon */}
        <div className="shrink-0">
          <HabitIcon icon={icon} />
        </div>

        {/* Habit content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-text-primary">
                {name}
              </h3>

              {description && (
                <p className="mt-1 text-sm text-text-muted">
                  {description}
                </p>
              )}
            </div>

            {/* More menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="rounded-xl px-2 py-1 text-lg text-text-muted transition-colors hover:bg-[#f1f4ed] hover:text-text-primary"
                aria-label={`More options for ${name}`}
              >
                ⋮
              </button>

              {menuOpen && (
  <div className="absolute right-0 top-10 z-30 w-32 rounded-xl bg-white p-1.5 shadow-lg ring-1 ring-black/10">
    <button
      type="button"
      onClick={() => {
        setMenuOpen(false);
        onEdit?.();
      }}
      className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-text-primary transition hover:bg-[#f1f4ed]"
    >
      ✏️ Edit
    </button>

    <button
      type="button"
      onClick={() => {
        setMenuOpen(false);
        onDelete?.();
      }}
      className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-red-500 transition hover:bg-red-50"
    >
      🗑️ Delete
    </button>
  </div>
)}
            </div>
          </div>

          {/* Progress */}
          <div className="mt-5">
            <HabitProgress progress={completed ? 100 : progress} />
          </div>

          {/* Bottom section */}
          <div className="mt-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm">
              <span aria-hidden="true">🔥</span>

              <span className="font-medium text-text-primary">
                {streak} day streak
              </span>
            </div>

            <button
              type="button"
              onClick={onToggle}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                completed
                  ? "bg-[#e5f0df] text-[#527443]"
                  : "bg-[#31543b] text-white hover:-translate-y-0.5 hover:bg-[#27442f]"
              }`}
            >
              {completed ? "✓ Completed" : "Complete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}