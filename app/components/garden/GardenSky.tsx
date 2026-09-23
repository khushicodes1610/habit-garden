import TimeOfDay from "./TimeOfDay";

type Weather = "sunny" | "cloudy" | "rainy" | "snowy";

type GardenSkyProps = {
  weather?: Weather;
  isDay?: boolean;
};

const rainDrops = Array.from({ length: 28 }, (_, i) => i);
const snowFlakes = Array.from({ length: 18 }, (_, i) => i);

export default function GardenSky({
  weather = "sunny",
  isDay = true,
}: GardenSkyProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 🌅 DAY / NIGHT ATMOSPHERE */}
      {isDay ? (
        <>
          {/* Soft daytime glow */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-200/30 via-transparent to-transparent"
            aria-hidden="true"
          />
        </>
      ) : (
        <>
          {/* 🌙 Night overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-950/70 via-indigo-900/35 to-transparent"
            aria-hidden="true"
          />

          {/* 🌙 Moon */}
          <div
            className="absolute right-[13%] top-8 h-12 w-12 rounded-full bg-slate-100 shadow-[0_0_35px_rgba(226,232,240,0.45)]"
            aria-hidden="true"
          />

          {/* ✨ Stars */}
          <div className="absolute left-[18%] top-[18%] text-sm text-white/80">
            ✦
          </div>

          <div className="absolute left-[32%] top-[30%] text-xs text-white/70">
            ✦
          </div>

          <div className="absolute right-[32%] top-[25%] text-sm text-white/80">
            ✦
          </div>

          <div className="absolute right-[22%] top-[42%] text-xs text-white/60">
            ✦
          </div>

          <div className="absolute left-[55%] top-[15%] text-xs text-white/70">
            ✦
          </div>
        </>
      )}

      {/* ☀️ SUN */}
      {weather === "sunny" && isDay && (
        <div
          className="absolute right-[12%] top-8 h-14 w-14 rounded-full bg-yellow-200/80 shadow-[0_0_45px_rgba(253,224,71,0.55)] animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* ☁️ CLOUDS */}
      {(weather === "cloudy" || weather === "rainy") && (
        <>
          {/* Cloud 1 */}
          <div
            className={`garden-cloud garden-cloud-slow absolute left-[5%] top-10 ${
              isDay ? "" : "opacity-60"
            }`}
            aria-hidden="true"
          >
            <span className="cloud-part cloud-main" />
            <span className="cloud-part cloud-small-left" />
            <span className="cloud-part cloud-small-right" />
          </div>

          {/* Cloud 2 */}
          <div
            className={`garden-cloud garden-cloud-fast absolute right-[8%] top-20 scale-75 ${
              isDay ? "" : "opacity-60"
            }`}
            aria-hidden="true"
          >
            <span className="cloud-part cloud-main" />
            <span className="cloud-part cloud-small-left" />
            <span className="cloud-part cloud-small-right" />
          </div>

          {/* Extra rain cloud */}
          {weather === "rainy" && (
            <div
              className={`garden-cloud absolute left-[38%] top-8 scale-90 ${
                isDay ? "" : "opacity-60"
              }`}
              aria-hidden="true"
            >
              <span className="cloud-part cloud-main" />
              <span className="cloud-part cloud-small-left" />
              <span className="cloud-part cloud-small-right" />
            </div>
          )}
        </>
      )}

      {/* 🌧️ RAIN */}
      {weather === "rainy" && (
        <div
          className="pointer-events-none absolute inset-0 z-10"
          aria-hidden="true"
        >
          {rainDrops.map((drop) => (
            <span
              key={drop}
              className="garden-raindrop"
              style={{
                left: `${(drop * 37) % 100}%`,
                animationDelay: `${(drop % 9) * 0.18}s`,
                animationDuration: `${0.7 + (drop % 5) * 0.12}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* ❄️ SNOW */}
      {weather === "snowy" && (
        <div
          className="pointer-events-none absolute inset-0 z-10"
          aria-hidden="true"
        >
          {snowFlakes.map((flake) => (
            <span
              key={flake}
              className="garden-snowflake"
              style={{
                left: `${(flake * 47) % 100}%`,
                animationDelay: `${(flake % 8) * 0.45}s`,
                animationDuration: `${3 + (flake % 4)}s`,
                width: `${4 + (flake % 4)}px`,
                height: `${4 + (flake % 4)}px`,
              }}
            />
          ))}
        </div>
      )}

      {/* ✨ Garden atmosphere particles */}
      {weather !== "rainy" && weather !== "snowy" && isDay && (
        <>
          <div className="absolute left-[25%] top-[35%] h-1.5 w-1.5 rounded-full bg-white/70" />

          <div className="absolute left-[65%] top-[28%] h-1 w-1 rounded-full bg-white/60" />

          <div className="absolute right-[25%] top-[45%] h-1.5 w-1.5 rounded-full bg-white/60" />
        </>
      )}

      {/* ✨ Tiny garden sparkles */}
      {isDay && (
        <>
          <div className="absolute left-[45%] top-[22%] text-xs opacity-50">
            ✦
          </div>

          <div className="absolute right-[38%] top-[38%] text-xs opacity-40">
            ✦
          </div>
        </>
      )}
    </div>
  );
}