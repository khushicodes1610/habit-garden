"use client";

import { useState } from "react";
import HabitCard from "../habits/HabitCard";
import GardenPreview from "../garden/GardenPreview";

const initialHabits = [
  {
    id: 1,
    name: "DSA Practice",
    description: "Solve at least one problem today.",
    icon: "💻",
    completed: false,
    streak: 5,
    progress: 70,
  },
  {
    id: 2,
    name: "Read 20 Pages",
    description: "Read a few pages of your current book.",
    icon: "📚",
    completed: false,
    streak: 3,
    progress: 40,
  },
  {
    id: 3,
    name: "Workout",
    description: "Move your body for at least 30 minutes.",
    icon: "🏃‍♀️",
    completed: false,
    streak: 7,
    progress: 80,
  },
];

export default function Dashboard() {
  const [habits, setHabits] = useState(initialHabits);

  const completedCount = habits.filter((habit) => habit.completed).length;

  const toggleHabit = (id: number) => {
    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    );
  };

  const progress =
    habits.length === 0
      ? 0
      : Math.round((completedCount / habits.length) * 100);

  return (
    <main className="min-h-screen bg-[#f7f5ed] px-5 py-8 text-[#26352b] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium uppercase tracking-[0.2em] text-[#7b8f7c]">
              Your Garden
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Good morning, Khushi 🌱
            </h1>

            <p className="mt-2 text-[#718075]">
              Small habits today. A stronger you tomorrow.
            </p>
          </div>

          <div className="rounded-2xl bg-white px-5 py-3 shadow-sm ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-wider text-[#8a978c]">
              Today
            </p>
            <p className="font-semibold">Keep growing 🌿</p>
          </div>
        </header>

        {/* Progress */}
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Today&apos;s progress</h2>
              <p className="text-sm text-[#7b887d]">
                {completedCount} of {habits.length} habits completed
              </p>
            </div>

            <span className="text-2xl font-bold text-[#52745b]">
              {progress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-[#e8ebe3]">
            <div
              className="h-full rounded-full bg-[#6f9474] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Habits */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Today&apos;s habits</h2>
                <p className="text-sm text-[#7b887d]">
                  Water your habits consistently.
                </p>
              </div>

              <button className="rounded-xl bg-[#52745b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#43624b]">
                + Add habit
              </button>
            </div>

            <div className="space-y-4">
              {habits.map((habit) => (
                <HabitCard
                  key={habit.id}
                  {...habit}
                  onToggle={() => toggleHabit(habit.id)}
                />
              ))}
            </div>
          </section>

          {/* Garden */}
          <section>
            <div className="mb-4">
              <h2 className="text-xl font-bold">Your garden</h2>
              <p className="text-sm text-[#7b887d]">
                Every completed habit helps your garden grow.
              </p>
            </div>

            <GardenPreview
  completedHabits={completedCount}
  progress={progress}
/>
</section>
        </div>
      </div>
    </main>
  );
}