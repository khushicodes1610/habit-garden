import GardenGround from "./GardenGround";
import GardenSky from "./GardenSky";
import Plant from "./Plant";

export default function GardenPreview() {
  return (
    <section className="relative mt-16 w-full max-w-4xl">
      <div className="relative h-72 overflow-hidden rounded-[2rem] border border-border-soft bg-gradient-to-b from-[#dff0db] via-[#eaf4e7] to-[#d4e7ce] shadow-xl shadow-[#31543b]/10">
        <GardenSky />

        {/* Plants */}
        <div className="absolute inset-x-0 bottom-8 z-10 h-52">
  {/* Left sprout */}
  <div className="absolute bottom-0 left-[4%] sm:left-[12%]">
    <Plant type="sprout" size="sm" />
  </div>

  {/* Left flower */}
  <div className="absolute bottom-0 left-[20%] sm:left-[28%]">
    <Plant type="flower" size="md" />
  </div>

  {/* Main tree */}
<div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2">
    <Plant type="tree" size="lg" />
  </div>

  {/* Right flower */}
  <div className="absolute bottom-0 right-[20%] sm:right-[28%]">
    <Plant type="flower" size="md" />
  </div>

  {/* Right sprout */}
  <div className="absolute bottom-0 right-[4%] sm:right-[12%]">
    <Plant type="sprout" size="sm" />
  </div>
</div>

        <GardenGround />
      </div>

      <p className="mt-5 text-center text-sm text-text-muted">
        Every completed habit helps your garden grow. 🌱
      </p>
    </section>
  );
}