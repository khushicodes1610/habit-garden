import GardenGround from "./GardenGround";
import GardenSky from "./GardenSky";
import Plant from "./Plant";

type GardenPreviewProps = {
  completedHabits: number;
  progress: number;
};

export default function GardenPreview({
  completedHabits,
  progress,
}: GardenPreviewProps) {
  return (
    <section className="w-full">
      <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] bg-[#dfead8] shadow-sm ring-1 ring-black/5">
        <GardenSky />

        {/* Plants */}
<div className="absolute inset-x-0 bottom-8 z-10 h-52">
  {/* Left sprout */}
{progress >= 1 && (
  <div className="absolute bottom-2 left-[10%]">
    <Plant type="sprout" size="sm" />
  </div>
)}

{/* Left flower */}
{progress >= 25 && (
  <div className="absolute bottom-1 left-[25%]">
    <Plant type="flower" size="md" />
  </div>
)}

{/* Main tree */}
{progress >= 50 && (
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
    <Plant type="tree" size="lg" />
  </div>
)}

{/* Right flower */}
{progress >= 75 && (
  <div className="absolute bottom-1 right-[25%]">
    <Plant type="flower" size="sm" />
  </div>
)}

{/* Right sprout */}
{progress >= 100 && (
  <div className="absolute bottom-2 right-[10%]">
    <Plant type="sprout" size="md" />
  </div>
)}

  <GardenGround />
</div>
      </div>

      <p className="mt-5 text-center text-sm text-text-muted">
        Every completed habit helps your garden grow. 🌱
      </p>
    </section>
  );
}