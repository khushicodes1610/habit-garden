type HabitProgressProps = {
  progress: number;
};

export default function HabitProgress({
  progress,
}: HabitProgressProps) {
  const safeProgress = Math.min(
    100,
    Math.max(0, progress)
  );

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-text-muted">
          Weekly progress
        </span>

        <span className="font-semibold text-text-primary">
          {safeProgress}%
        </span>
      </div>

      <div
        className="h-2.5 overflow-hidden rounded-full bg-[#e5eadf]"
        role="progressbar"
        aria-valuenow={safeProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Habit progress: ${safeProgress}%`}
      >
        <div
          className="h-full rounded-full bg-[#6f9b58] transition-all duration-700"
          style={{ width: `${safeProgress}%` }}
        />
      </div>
    </div>
  );
}