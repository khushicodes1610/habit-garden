import Plant from "./Plant";

export default function GardenPreview() {
  return (
    <section className="relative mt-16 w-full max-w-4xl">
      <div className="relative flex h-64 items-end justify-center overflow-hidden rounded-[2rem] border border-border-soft bg-gradient-to-b from-[#eaf4e7] to-[#dcebd8] shadow-xl shadow-[#31543b]/10">
        
        {/* Clouds */}
        <div
          className="absolute left-[10%] top-10 text-4xl opacity-70"
          aria-hidden="true"
        >
          ☁️
        </div>

        <div
          className="absolute right-[15%] top-14 text-3xl opacity-60"
          aria-hidden="true"
        >
          ☁️
        </div>

        {/* Plants */}
        <div className="relative z-10 mb-10 flex items-end gap-5">
          <Plant type="sprout" size="sm" />
          <Plant type="flower" size="md" />
          <Plant type="tree" size="lg" />
          <Plant type="flower" size="md" />
          <Plant type="sprout" size="sm" />
        </div>

        {/* Ground */}
        <div className="absolute bottom-0 h-12 w-full bg-[#6f9b58]" />
      </div>

      <p className="mt-5 text-center text-sm text-text-muted">
        Every completed habit helps your garden grow. 🌱
      </p>
    </section>
  );
}