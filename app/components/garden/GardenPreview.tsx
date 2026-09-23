"use client";

import GardenGround from "./GardenGround";
import GardenSky from "./GardenSky";
import Plant from "./Plant";

type Weather = "sunny" | "cloudy" | "rainy" | "snowy";

type GardenPreviewProps = {
  completedHabits: number;
  progress: number;
  weather: Weather;
  isDay: boolean;
};

export default function GardenPreview({
  completedHabits,
  progress,
  weather,
  isDay,
}: GardenPreviewProps) {
  return (
    <section>
      {/* 🌿 Garden scene */}
      <div className="relative h-[420px] overflow-hidden rounded-3xl bg-sky-100 shadow-sm ring-1 ring-black/5">

        {/* 🌅 Sky + weather */}
        <GardenSky
          weather={weather}
          isDay={isDay}
        />

        {/* 🌱 Plants */}
        <div className="absolute inset-x-0 bottom-8 z-20 h-52">

          {/* 🌸 Left flower */}
          {progress >= 25 && (
            <div className="absolute bottom-5 left-[18%]">
              <Plant type="flower" size="md" />
            </div>
          )}

          {/* 🌳 Main tree */}
          {progress >= 50 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <Plant type="tree" size="lg" />
            </div>
          )}

          {/* 🌸 Right flower */}
          {progress >= 75 && (
            <div className="absolute bottom-5 right-[18%]">
              <Plant type="flower" size="md" />
            </div>
          )}

          {/* 🌱 Right sprout */}
          {progress >= 100 && (
            <div className="absolute bottom-5 right-[7%]">
              <Plant type="sprout" size="sm" />
            </div>
          )}

        </div>

        {/* 🌍 Ground */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <GardenGround />
        </div>

      </div>

      {/* Garden message */}
      <p className="mt-5 text-center text-sm text-text-muted">
        Every completed habit helps your garden grow. 🌱
      </p>
    </section>
  );
}