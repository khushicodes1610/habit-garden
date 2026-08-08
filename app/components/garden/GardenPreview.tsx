export default function GardenPreview() {
  return (
    <div className="relative mt-16 flex h-48 w-full max-w-3xl items-end justify-center overflow-hidden rounded-[2rem] border border-border-soft bg-gradient-to-b from-[#eaf4e7] to-[#dcebd8] shadow-xl shadow-[#31543b]/10">
      <div
        className="absolute left-12 top-10 text-4xl opacity-70"
        aria-hidden="true"
      >
        ☁️
      </div>

      <div
        className="absolute right-16 top-14 text-3xl opacity-60"
        aria-hidden="true"
      >
        ☁️
      </div>

      <div
        className="mb-10 flex items-end gap-5 text-5xl"
        aria-label="Garden preview"
      >
        <span>🌱</span>
        <span className="text-6xl">🌿</span>
        <span>🌷</span>
        <span className="text-7xl">🌳</span>
        <span>🌻</span>
        <span className="text-6xl">🌿</span>
        <span>🌱</span>
      </div>

      <div className="absolute bottom-0 h-10 w-full bg-[#6f9b58]" />
    </div>
  );
}