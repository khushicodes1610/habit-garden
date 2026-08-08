type AddHabitButtonProps = {
  onClick: () => void;
};

export default function AddHabitButton({
  onClick,
}: AddHabitButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-2xl bg-[#31543b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#27442f] hover:shadow-md"
    >
      <span className="text-lg leading-none">+</span>
      Add Habit
    </button>
  );
}