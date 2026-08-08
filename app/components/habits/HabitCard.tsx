"use client";

import { useState } from "react";
import HabitIcon from "./HabitIcon";
import HabitProgress from "./HabitProgress";

type HabitCardProps = {
  name: string;
  description: string;
  streak: number;
  progress: number;
  icon?: string;
  completed?: boolean;
};

export default function HabitCard({
  name,
  description,
  streak,
  progress,
  icon = "🌱",
  completed = false,
}: HabitCardProps) {
    const [isCompleted, setIsCompleted] = useState(completed);
const [currentStreak, setCurrentStreak] = useState(streak);
const [currentProgress, setCurrentProgress] = useState(progress);
  return (
    <article className="group rounded-3xl border border-border-soft bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <HabitIcon icon={icon} />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-text-primary">
                {name}
              </h3>

              <p className="mt-1 text-sm text-text-muted">
                {description}
              </p>
            </div>

            <button
              type="button"
              className="rounded-xl px-2 py-1 text-text-muted transition-colors hover:bg-[#f1f4ed] hover:text-text-primary"
              aria-label={`More options for ${name}`}
            >
              ⋮
            </button>
          </div>

          <div className="mt-5">
            <HabitProgress progress={currentProgress} />
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span aria-hidden="true">🔥</span>
              <span className="font-medium text-text-primary">
                {currentStreak} day streak
              </span>
            </div>

            <button
  type="button"
  onClick={() => {
    if (isCompleted) return;

    setIsCompleted(true);
    setCurrentStreak((value) => value + 1);
    setCurrentProgress((value) => Math.min(100, value + 10));
  }}
  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
    isCompleted
      ? "bg-[#e5f0df] text-[#527443]"
      : "bg-[#31543b] text-white hover:-translate-y-0.5 hover:bg-[#27442f]"
  }`}
>
  {isCompleted ? "✓ Completed" : "Complete"}
</button>
          </div>
        </div>
      </div>
    </article>
  );
}