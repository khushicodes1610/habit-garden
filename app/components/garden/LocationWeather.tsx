"use client";

import { useEffect, useState } from "react";

type Location = {
  latitude: number;
  longitude: number;
};

export type Weather = "sunny" | "cloudy" | "rainy" | "snowy";

type WeatherData = {
  temperature: number;
  weatherCode: number;
  isDay: boolean;
};

type LocationWeatherProps = {
  onWeatherChange: (weather: Weather, isDay: boolean) => void;
};

function getGardenWeather(code: number): Weather {
  // Clear
  if (code === 0) {
    return "sunny";
  }

  // Mainly clear / partly cloudy / overcast
  if ([1, 2, 3].includes(code)) {
    return "cloudy";
  }

  // Fog
  if ([45, 48].includes(code)) {
    return "cloudy";
  }

  // Drizzle / rain
  if (
    [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(
      code
    )
  ) {
    return "rainy";
  }

  // Snow
  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return "snowy";
  }

  // Thunderstorm
  if ([95, 96, 99].includes(code)) {
    return "rainy";
  }

  return "cloudy";
}

export default function LocationWeather({
  onWeatherChange,
}: LocationWeatherProps) {
  const [location, setLocation] = useState<Location | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Location is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocation({
          latitude,
          longitude,
        });

        try {
          const response = await fetch(
            `/api/weather?latitude=${latitude}&longitude=${longitude}`
          );

          if (!response.ok) {
            throw new Error("Weather request failed.");
          }

          const data: WeatherData = await response.json();

          setWeather(data);
        } catch {
          setError("Unable to get the current weather.");
        }
      },
      () => {
        setError("Location permission was not granted.");
      }
    );
  }, []);

  // Send detected weather to Dashboard
  useEffect(() => {
  if (weather) {
    const gardenWeather = getGardenWeather(weather.weatherCode);

    onWeatherChange(gardenWeather, weather.isDay);
  }
}, [weather, onWeatherChange]);
  if (error) {
    return (
      <p className="text-sm text-red-500">
        {error}
      </p>
    );
  }

  if (!location) {
    return (
      <p className="text-sm text-[#7b887d]">
        Finding your garden location… 📍
      </p>
    );
  }

  if (!weather) {
    return (
      <p className="text-sm text-[#7b887d]">
        Checking the weather… 🌦️
      </p>
    );
  }

  const gardenWeather = getGardenWeather(weather.weatherCode);

  return (
    <div className="mt-2 space-y-1 text-sm text-[#718075]">
      <p>📍 Garden location detected</p>

      <p>
        🌡️ {Math.round(weather.temperature)}°C
      </p>

      <p>
        🌦️ Garden weather: {gardenWeather}
      </p>
    </div>
  );
}