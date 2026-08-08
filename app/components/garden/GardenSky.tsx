import TimeOfDay from "./TimeOfDay";

export default function GardenSky() {
  return (
    <>
      {/* Time-based atmosphere */}
      <TimeOfDay />

      {/* Soft sunlight */}

      {/* Cloud 1 */}
      <div
        className="garden-float absolute left-[8%] top-10 opacity-70"
        aria-hidden="true"
      >
        <span className="text-3xl">☁️</span>
      </div>

      {/* Cloud 2 */}
      <div
        className="garden-float absolute right-[13%] top-16 opacity-60"
        aria-hidden="true"
      >
        <span className="text-2xl">☁️</span>
      </div>

      {/* Small floating particles */}
      <div className="absolute left-[25%] top-[35%] h-1.5 w-1.5 rounded-full bg-white/70" />
      <div className="absolute left-[65%] top-[28%] h-1 w-1 rounded-full bg-white/60" />
      <div className="absolute right-[25%] top-[45%] h-1.5 w-1.5 rounded-full bg-white/60" />

      {/* Tiny garden sparkles */}
      <div className="absolute left-[45%] top-[22%] text-xs opacity-50">
        ✦
      </div>

      <div className="absolute right-[38%] top-[38%] text-xs opacity-40">
        ✦
      </div>
    </>
  );
}