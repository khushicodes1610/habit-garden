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
      </div>
    </main>
  );
}