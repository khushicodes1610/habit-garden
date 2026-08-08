export default function GardenGround() {
  return (
    <>
      {/* Back grass layer */}
      <div
        className="absolute bottom-10 h-8 w-full rounded-[50%] bg-[#789f61]"
        aria-hidden="true"
      />

      {/* Main ground */}
      <div
        className="absolute bottom-0 h-12 w-full rounded-t-[50%] bg-[#6f9b58]"
        aria-hidden="true"
      />

      {/* Foreground grass */}
      <div
        className="absolute bottom-8 left-0 h-2 w-full bg-[#789f61]"
        aria-hidden="true"
      />

      {/* Small grass details */}
      <div className="absolute bottom-11 left-[8%] text-sm opacity-70">
        🌿
      </div>

      <div className="absolute bottom-10 left-[42%] text-xs opacity-60">
        🌱
      </div>

      <div className="absolute bottom-11 right-[12%] text-sm opacity-70">
        🌿
      </div>
    </>
  );
}