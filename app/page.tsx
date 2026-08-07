export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] text-[#183a24]">
      {/* Navigation */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🌱</span>

          <span className="text-xl font-semibold tracking-tight">
            Habit Garden
          </span>
        </div>

        <nav className="flex items-center gap-3">
          <button className="rounded-full px-5 py-2.5 text-sm font-medium text-[#31543b] transition hover:bg-white">
            Log in
          </button>

          <button className="rounded-full bg-[#183a24] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#285536]">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-10 text-center lg:px-8">
        <div className="mb-6 rounded-full border border-[#d5e2d1] bg-white/70 px-4 py-2 text-sm font-medium text-[#49664f] shadow-sm backdrop-blur">
          🌿 Grow a better version of yourself
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Plant habits.
          <br />
          <span className="text-[#3f7d4a]">Harvest success.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#617365] sm:text-xl">
          Turn your daily habits into a living virtual garden. Stay
          consistent, grow your plants, and watch your progress bloom.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-full bg-[#183a24] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#183a24]/15 transition hover:-translate-y-0.5 hover:bg-[#285536]">
            Start Growing 🌱
          </button>

          <button className="rounded-full border border-[#cddac9] bg-white px-7 py-3.5 text-base font-semibold text-[#31543b] transition hover:-translate-y-0.5 hover:bg-[#f9fbf8]">
            See How It Works
          </button>
        </div>

        {/* Garden Preview */}
        <div className="relative mt-16 flex h-48 w-full max-w-3xl items-end justify-center overflow-hidden rounded-[2rem] border border-[#dce7d9] bg-gradient-to-b from-[#eaf4e7] to-[#dcebd8] shadow-xl shadow-[#31543b]/10">
          <div className="absolute left-12 top-10 text-4xl opacity-70">☁️</div>
          <div className="absolute right-16 top-14 text-3xl opacity-60">☁️</div>

          <div className="mb-10 flex items-end gap-5 text-5xl">
            <span>🌱</span>
            <span className="text-6xl">🌿</span>
            <span>🌷</span>
            <span className="text-7xl">🌳</span>
            <span>🌻</span>
            <span className="text-6xl">🌿</span>
            <span>🌱</span>
          </div>

          <div className="absolute bottom-0 h-10 w-full bg-[#6f9b58]" />
        </div>

        <p className="mt-5 text-sm text-[#718174]">
          Every completed habit helps your garden grow.
        </p>
      </section>
    </main>
  );
}