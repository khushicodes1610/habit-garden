import HabitCard from "./components/habits/HabitCard";
import Navbar from "./components/navigation/Navbar";
import Hero from "./components/hero/Hero";
import GardenPreview from "./components/garden/GardenPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-garden-pale text-garden-deep">
      <Navbar />

      <Hero />

      <div className="mx-auto flex w-full max-w-7xl justify-center px-6 pb-20 lg:px-8">
        <GardenPreview />
        <section className="mx-auto mt-20 w-full max-w-4xl px-6 pb-20">
  <div className="mb-8">
    <p className="text-sm font-semibold uppercase tracking-wider text-[#6f9b58]">
      Your habits
    </p>

    <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary">
      Grow through consistency.
    </h2>

    <p className="mt-2 max-w-xl text-text-muted">
      Complete your habits, build streaks, and watch your garden grow.
    </p>
  </div>

  <div className="grid gap-5 md:grid-cols-2">
    <HabitCard
      name="Morning Walk"
      description="Start the day with 20 minutes of movement."
      streak={7}
      progress={75}
      icon="🏃"
    />

    <HabitCard
      name="Read 20 Pages"
      description="Spend a little time learning every day."
      streak={12}
      progress={85}
      icon="📚"
    />

    <HabitCard
      name="Drink Water"
      description="Stay hydrated throughout the day."
      streak={5}
      progress={60}
      icon="💧"
    />

    <HabitCard
      name="Practice Coding"
      description="Keep improving your technical skills."
      streak={9}
      progress={90}
      icon="💻"
    />
  </div>
</section>
      </div>
    </main>
  );
}