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
      className={`pointer-events-none absolute inset-0 transition-all duration-1000 ${
        timeOfDay === "dawn"
          ? "bg-orange-200/20"
          : timeOfDay === "day"
            ? "bg-transparent"
            : timeOfDay === "sunset"
              ? "bg-orange-400/20"
              : "bg-indigo-950/45"
      }`}
      aria-hidden="true"
    />
  );
}