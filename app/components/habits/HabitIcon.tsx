type HabitIconProps = {
  icon?: string;
};

export default function HabitIcon({
  icon = "🌱",
}: HabitIconProps) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8f2e2] text-2xl shadow-sm"
      aria-hidden="true"
    >
      {icon}
    </div>
  );
}