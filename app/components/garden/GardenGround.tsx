export default function GardenGround() {
  return (
    <>
      {/* Back grass layer */}
      <div
        className="absolute bottom-8 h-8 w-[115%] rounded-[50%] bg-[#87ad6d]"
        aria-hidden="true"
      />

      {/* Main ground */}
      <div
        className="absolute bottom-0 h-12 w-full bg-[#6f9b58]"
        aria-hidden="true"
      />

      {/* Foreground grass */}
      <div
        className="absolute bottom-8 left-0 h-2 w-full bg-[#789f61]"
        aria-hidden="true"
      />
    </>
  );
}