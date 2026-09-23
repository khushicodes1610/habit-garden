import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const latitude = searchParams.get("latitude");
  const longitude = searchParams.get("longitude");

  if (!latitude || !longitude) {
    return NextResponse.json(
      { error: "Latitude and longitude are required." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,is_day&timezone=auto`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Weather service failed.");
    }

    const data = await response.json();

    return NextResponse.json({
      temperature: data.current.temperature_2m,
      weatherCode: data.current.weather_code,
      isDay: data.current.is_day === 1,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch weather." },
      { status: 500 }
    );
  }
}