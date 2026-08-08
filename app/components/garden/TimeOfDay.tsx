"use client";

import { useEffect, useState } from "react";

type TimeOfDay = "dawn" | "day" | "sunset" | "night";

function getTimeOfDay(): TimeOfDay {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 8) {
    return "dawn";
  }

  if (hour >= 8 && hour < 17) {
    return "day";
  }

  if (hour >= 17 && hour < 19) {
    return "sunset";
  }

  return "night";
}

export default function TimeOfDay() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");

  useEffect(() => {
    const updateTime = () => {
      setTimeOfDay(getTimeOfDay());
    };

    updateTime();

    const interval = setInterval(updateTime, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden transition-all duration-1000 ${
        timeOfDay === "dawn"
          ? "bg-gradient-to-b from-orange-200/40 via-yellow-100/15 to-transparent"
          : timeOfDay === "day"
            ? "bg-transparent"
            : timeOfDay === "sunset"
              ? "bg-gradient-to-b from-orange-400/35 via-pink-300/15 to-transparent"
              : "bg-gradient-to-b from-indigo-950/65 via-indigo-900/40 to-indigo-950/25"
      }`}
      aria-hidden="true"
    >
      {/* Dawn */}
      {timeOfDay === "dawn" && (
        <div className="absolute left-[15%] top-[15%] h-20 w-20 rounded-full bg-yellow-200/50 blur-2xl" />
      )}

      {/* Sunset */}
      {timeOfDay === "sunset" && (
        <div className="absolute right-[18%] top-[20%] h-24 w-24 rounded-full bg-orange-300/50 blur-2xl" />
      )}

      {/* Night moon */}
      {timeOfDay === "night" && (
        <>
          <div className="absolute right-[15%] top-[12%] h-12 w-12 rounded-full bg-yellow-100/90 shadow-[0_0_30px_rgba(255,255,220,0.5)]" />

          {/* Stars */}
          <div className="absolute left-[18%] top-[18%] text-xs text-white/80">
            ✦
          </div>

          <div className="absolute left-[35%] top-[30%] text-sm text-white/70">
            ✦
          </div>

          <div className="absolute right-[35%] top-[25%] text-xs text-white/80">
            ✦
          </div>

          <div className="absolute right-[25%] top-[40%] text-sm text-white/60">
            ✦
          </div>

          <div className="absolute left-[55%] top-[15%] text-xs text-white/70">
            ✦
          </div>
        </>
      )}
    </div>
  );
}