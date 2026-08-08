import GardenGround from "./GardenGround";
import GardenSky from "./GardenSky";
import Plant from "./Plant";

export default function GardenPreview() {
  return (
    <section className="relative mt-16 w-full max-w-4xl">
      <div className="relative h-72 overflow-hidden rounded-[2rem] border border-border-soft bg-gradient-to-b from-[#dff0db] via-[#eaf4e7] to-[#d4e7ce] shadow-xl shadow-[#31543b]/10">
        <GardenSky />

        {/* Plants */}
        <div className="absolute inset-x-0 bottom-8 z-10 flex items-end justify-center gap-5 sm:gap-7">
          <Plant type="sprout" size="sm" />
          <Plant type="flower" size="md" />
          <Plant type="tree" size="lg" />
          <Plant type="flower" size="md" />
          <Plant type="sprout" size="sm" />
        </div>

        <GardenGround />
      </div>

      <p className="mt-5 text-center text-sm text-text-muted">
        Every completed habit helps your garden grow. 🌱
      </p>
    </section>
  );
}