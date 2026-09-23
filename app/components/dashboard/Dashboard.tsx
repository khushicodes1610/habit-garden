"use client";

import { useEffect, useState } from "react";
import HabitCard from "../habits/HabitCard";
import GardenPreview from "../garden/GardenPreview";
import LocationWeather, {
  Weather,
} from "../garden/LocationWeather";

type Habit = {
  id: number;
  name: string;
  description: string;
  icon: string;
  completed: boolean;
  streak: number;
  progress: number;
  lastCompletedDate: string | null;
};

const initialHabits: Habit[] = [
  {
    id: 1,
    name: "DSA Practice",
    description: "Solve at least one problem today.",
    icon: "💻",
    completed: false,
    streak: 5,
    progress: 70,
    lastCompletedDate: null,
  },
  {
    id: 2,
    name: "Read 20 Pages",
    description: "Read a few pages of your current book.",
    icon: "📚",
    completed: false,
    streak: 3,
    progress: 40,
    lastCompletedDate: null,
  },
  {
    id: 3,
    name: "Workout",
    description: "Move your body for at least 30 minutes.",
    icon: "🏃‍♀️",
    completed: false,
    streak: 7,
    progress: 80,
    lastCompletedDate: null,
  },
];

const habitIcons = [
  "🌱",
  "💻",
  "📚",
  "🏃‍♀️",
  "🧘",
  "💧",
  "🎨",
  "🎯",
];

export default function Dashboard() {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);

  // Weather
  const [weather, setWeather] = useState<Weather>("sunny");
  const [isDay, setIsDay] = useState(true);

  // Add Habit modal
  const [isAddHabitOpen, setIsAddHabitOpen] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const [habitIcon, setHabitIcon] = useState("🌱");
  const [editingHabitId, setEditingHabitId] = useState<number | null>(null);

  // Load saved habits
  useEffect(() => {
    const savedHabits = localStorage.getItem("habit-garden-habits");

    if (savedHabits) {
      try {
        setHabits(JSON.parse(savedHabits));
      } catch {
        console.error("Unable to load saved habits.");
      }
    }
  }, []);

  // Save habits
  useEffect(() => {
    localStorage.setItem(
      "habit-garden-habits",
      JSON.stringify(habits)
    );
  }, [habits]);

  const completedCount = habits.filter(
    (habit) => habit.completed
  ).length;

  // Toggle habit + streak logic
  const toggleHabit = (id: number) => {
    setHabits((currentHabits) =>
      currentHabits.map((habit) => {
        if (habit.id !== id) {
          return habit;
        }

        const today = new Date().toISOString().split("T")[0];

        // Undo today's completion
        if (habit.completed) {
          return {
            ...habit,
            completed: false,
            streak: Math.max(0, habit.streak - 1),
            lastCompletedDate: null,
          };
        }

        // First time completing habit
        const lastDate = habit.lastCompletedDate;

        if (!lastDate) {
          return {
            ...habit,
            completed: true,
            streak: 1,
            lastCompletedDate: today,
          };
        }

        const last = new Date(lastDate);
        const current = new Date(today);

        const differenceInDays = Math.floor(
          (current.getTime() - last.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        // Completed yesterday → continue streak
        if (differenceInDays === 1) {
          return {
            ...habit,
            completed: true,
            streak: habit.streak + 1,
            lastCompletedDate: today,
          };
        }

        // Already completed today
        if (differenceInDays === 0) {
          return {
            ...habit,
            completed: true,
            lastCompletedDate: today,
          };
        }

        // Missed one or more days → restart streak
        return {
          ...habit,
          completed: true,
          streak: 1,
          lastCompletedDate: today,
        };
      })
    );
  };

  // Delete habit
  const deleteHabit = (id: number) => {
    setHabits((currentHabits) =>
      currentHabits.filter((habit) => habit.id !== id)
    );
  };

  // Overall progress
  const progress =
    habits.length === 0
      ? 0
      : Math.round((completedCount / habits.length) * 100);

  // Open Add Habit modal
  const openAddHabit = () => {
    setHabitName("");
    setHabitDescription("");
    setHabitIcon("🌱");
    setIsAddHabitOpen(true);
  };
  
  const openEditHabit = (habit: Habit) => {
  setEditingHabitId(habit.id);
  setHabitName(habit.name);
  setHabitDescription(habit.description);
  setHabitIcon(habit.icon);
  setIsAddHabitOpen(true);
};

  // Close Add Habit modal
  const closeAddHabit = () => {
    setIsAddHabitOpen(false);
  };

  // Add new habit
  const addHabit = () => {
  const trimmedName = habitName.trim();

  if (!trimmedName) {
    return;
  }

  // Edit existing habit
  if (editingHabitId !== null) {
    setHabits((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === editingHabitId
          ? {
              ...habit,
              name: trimmedName,
              description: habitDescription.trim(),
              icon: habitIcon,
            }
          : habit
      )
    );

    setEditingHabitId(null);
    setIsAddHabitOpen(false);
    return;
  }

  // Add new habit
  const newHabit: Habit = {
    id: Date.now(),
    name: trimmedName,
    description: habitDescription.trim(),
    icon: habitIcon,
    completed: false,
    streak: 0,
    progress: 0,
    lastCompletedDate: null,
  };

  setHabits((currentHabits) => [
    ...currentHabits,
    newHabit,
  ]);

  setIsAddHabitOpen(false);
};

  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-[#52745b]">
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

            <p className="font-semibold">
              Keep growing 🌿
            </p>
          </div>
        </header>

        {/* Progress */}
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Today&apos;s progress
              </h2>

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
                <h2 className="text-xl font-bold">
                  Today&apos;s habits
                </h2>

                <p className="text-sm text-[#7b887d]">
                  Water your habits consistently.
                </p>
              </div>

              <button
                type="button"
                onClick={openAddHabit}
                className="rounded-xl bg-[#52745b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#43624b]"
              >
                + Add habit
              </button>
            </div>

            <div className="space-y-4">
              {habits.map((habit) => (
                <HabitCard
  key={habit.id}
  {...habit}
  onToggle={() => toggleHabit(habit.id)}
  onDelete={() => deleteHabit(habit.id)}
  onEdit={() => openEditHabit(habit)}
/>
              ))}
            </div>
          </section>

          {/* Garden */}
          <section>
            <div className="mb-4">
              <h2 className="text-xl font-bold">
                Your garden
              </h2>

              <p className="text-sm text-[#7b887d]">
                Every completed habit helps your garden grow.
              </p>

              <LocationWeather
                onWeatherChange={(detectedWeather, detectedIsDay) => {
                  setWeather(detectedWeather);
                  setIsDay(detectedIsDay);
                }}
              />
            </div>

            <GardenPreview
              completedHabits={completedCount}
              progress={progress}
              weather={weather}
              isDay={isDay}
            />
          </section>
        </div>
      </main>

      {/* Add Habit Modal */}
      {isAddHabitOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm"
          onMouseDown={closeAddHabit}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >

            {/* Modal header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-text-primary">
                  Add a new habit 🌱
                </h2>

                <p className="mt-1 text-sm text-text-muted">
                  Start growing something new.
                </p>
              </div>

              <button
                type="button"
                onClick={closeAddHabit}
                className="rounded-xl px-3 py-2 text-lg text-text-muted transition hover:bg-[#f1f4ed]"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Habit name */}
            <div className="mb-4">
              <label
                htmlFor="habit-name"
                className="mb-2 block text-sm font-semibold"
              >
                Habit name
              </label>

              <input
                id="habit-name"
                type="text"
                value={habitName}
                onChange={(event) =>
                  setHabitName(event.target.value)
                }
                placeholder="e.g. Drink 2L of water"
                className="w-full rounded-xl border border-[#dfe5dc] px-4 py-3 text-sm outline-none transition focus:border-[#6f9474] focus:ring-2 focus:ring-[#6f9474]/20"
              />
            </div>

            {/* Description */}
            <div className="mb-5">
              <label
                htmlFor="habit-description"
                className="mb-2 block text-sm font-semibold"
              >
                Description
              </label>

              <textarea
                id="habit-description"
                value={habitDescription}
                onChange={(event) =>
                  setHabitDescription(event.target.value)
                }
                placeholder="A little reminder for yourself..."
                rows={3}
                className="w-full resize-none rounded-xl border border-[#dfe5dc] px-4 py-3 text-sm outline-none transition focus:border-[#6f9474] focus:ring-2 focus:ring-[#6f9474]/20"
              />
            </div>

            {/* Icon picker */}
            <div className="mb-6">
              <p className="mb-2 text-sm font-semibold">
                Choose an icon
              </p>

              <div className="flex flex-wrap gap-2">
                {habitIcons.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() => setHabitIcon(icon)}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl transition ${
                      habitIcon === icon
                        ? "bg-[#e5f0df] ring-2 ring-[#52745b]"
                        : "bg-[#f5f7f3] hover:bg-[#eaf0e6]"
                    }`}
                    aria-label={`Choose ${icon}`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={closeAddHabit}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#718075] transition hover:bg-[#f1f4ed]"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={addHabit}
                disabled={!habitName.trim()}
                className="rounded-xl bg-[#52745b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#43624b] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Add habit 🌱
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}