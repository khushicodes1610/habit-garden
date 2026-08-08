export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <div className="flex items-center gap-2">
        <span className="text-3xl" aria-hidden="true">
          🌱
        </span>

        <span className="text-xl font-semibold tracking-tight text-garden-deep">
          Habit Garden
        </span>
      </div>

      <nav className="flex items-center gap-3" aria-label="Main navigation">
        <button
          type="button"
          className="rounded-full px-5 py-2.5 text-sm font-medium text-[#31543b] transition hover:bg-white"
        >
          Log in
        </button>

        <button
          type="button"
          className="rounded-full bg-garden-deep px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#285536]"
        >
          Get Started
        </button>
      </nav>
    </header>
  );
}