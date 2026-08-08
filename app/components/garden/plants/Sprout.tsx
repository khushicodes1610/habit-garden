export default function Sprout() {
  return (
    <svg
      viewBox="0 0 120 140"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Growing sprout"
      role="img"
    >
      {/* Stem */}
      <path
        d="M60 125C60 125 58 95 61 72"
        stroke="#4F7D45"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Left leaf */}
      <path
        d="M60 82C38 82 23 70 25 50C45 49 59 61 60 82Z"
        fill="#7FAF68"
      />

      {/* Right leaf */}
      <path
        d="M61 70C61 48 75 33 96 34C98 55 84 70 61 70Z"
        fill="#94BE78"
      />

      {/* Ground */}
      <ellipse
        cx="60"
        cy="126"
        rx="28"
        ry="7"
        fill="#547441"
        opacity="0.2"
      />
    </svg>
  );
}