"use client";

import { useState } from "react";

type AddHabitModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (habit: {
    name: string;
    description: string;
    icon: string;
  }) => void;
};

const habitIcons = ["🌱", "🏃", "📚", "💧", "💻", "🧘", "🎨", "🎯"];

export default function AddHabitModal({
  isOpen,
  onClose,
  onAdd,
}: AddHabitModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("🌱");

  if (!isOpen) {
    return null;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedDescription = description.trim();

    if (!trimmedName) {
      return;
    }

    onAdd({
      name: trimmedName,
      description:
        trimmedDescription || "Build consistency one day at a time.",
      icon,
    });

    setName("");
    setDescription("");
    setIcon("🌱");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-habit-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-md rounded-3xl border border-border-soft bg-white p-6 shadow-2xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#6f9b58]">
              New habit
            </p>

            <h2
              id="add-habit-title"
              className="mt-1 text-2xl font-bold text-text-primary"
            >
              Plant something new 🌱
            </h2>

            <p className="mt-1 text-sm text-text-muted">
              Start small. Grow consistently.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-2 py-1 text-xl text-text-muted transition-colors hover:bg-[#f1f4ed] hover:text-text-primary"
            aria-label="Close add habit dialog"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="habit-name"
              className="mb-2 block text-sm font-semibold text-text-primary"
            >
              Habit name
            </label>

            <input
              id="habit-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g. Read 20 pages"
              maxLength={50}
              required
              className="w-full rounded-2xl border border-border-soft bg-[#fafcf8] px-4 py-3 text-sm text-text-primary outline-none transition focus:border-[#6f9b58] focus:ring-4 focus:ring-[#6f9b58]/10"
            />
          </div>

          <div>
            <label
              htmlFor="habit-description"
              className="mb-2 block text-sm font-semibold text-text-primary"
            >
              Description
            </label>

            <textarea
              id="habit-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="What will this habit help you grow?"
              maxLength={120}
              rows={3}
              className="w-full resize-none rounded-2xl border border-border-soft bg-[#fafcf8] px-4 py-3 text-sm text-text-primary outline-none transition focus:border-[#6f9b58] focus:ring-4 focus:ring-[#6f9b58]/10"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-text-primary">
              Choose an icon
            </p>

            <div className="grid grid-cols-8 gap-2">
              {habitIcons.map((habitIcon) => (
                <button
                  key={habitIcon}
                  type="button"
                  onClick={() => setIcon(habitIcon)}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl transition-all ${
                    icon === habitIcon
                      ? "bg-[#e5f0df] ring-2 ring-[#6f9b58]"
                      : "bg-[#f4f6f1] hover:bg-[#e8eee3]"
                  }`}
                  aria-label={`Choose ${habitIcon} icon`}
                  aria-pressed={icon === habitIcon}
                >
                  {habitIcon}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-2xl border border-border-soft px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-[#f5f7f3]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-2xl bg-[#31543b] px-4 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#27442f]"
            >
              Plant Habit 🌱
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}