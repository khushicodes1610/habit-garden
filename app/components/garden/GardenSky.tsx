export default function GardenSky() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft sunlight */}
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#fff6c7]/50 blur-3xl" />

      {/* Cloud 1 */}
      <div className="garden-float absolute left-[8%] top-10 flex items-end opacity-70">
        <span className="text-3xl">☁️</span>
      </div>

      {/* Cloud 2 */}
      <div className="garden-float absolute right-[13%] top-16 flex items-end opacity-60">
        <span className="text-2xl">☁️</span>
      </div>

      {/* Small floating particles */}
      <div className="absolute left-[25%] top-[35%] h-1.5 w-1.5 rounded-full bg-white/70" />
      <div className="absolute left-[65%] top-[28%] h-1 w-1 rounded-full bg-white/60" />
      <div className="absolute right-[25%] top-[45%] h-1.5 w-1.5 rounded-full bg-white/60" />
    </div>
  );
}