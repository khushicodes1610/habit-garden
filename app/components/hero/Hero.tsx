export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-10 text-center lg:px-8">
      <div className="mb-6 rounded-full border border-[#d5e2d1] bg-white/70 px-4 py-2 text-sm font-medium text-[#49664f] shadow-sm backdrop-blur">
        🌿 Grow a better version of yourself
      </div>

      <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-garden-deep sm:text-6xl lg:text-7xl">
        Plant habits.
        <br />
        <span className="text-garden-green">Harvest success.</span>
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
        Turn your daily habits into a living virtual garden. Stay consistent,
        grow your plants, and watch your progress bloom.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="rounded-full bg-garden-deep px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#183a24]/15 transition hover:-translate-y-0.5 hover:bg-[#285536]"
        >
          Start Growing 🌱
        </button>

        <button
          type="button"
          className="rounded-full border border-border-soft bg-white px-7 py-3.5 text-base font-semibold text-[#31543b] transition hover:-translate-y-0.5 hover:bg-[#f9fbf8]"
        >
          See How It Works
        </button>
      </div>
    </section>
  );
}