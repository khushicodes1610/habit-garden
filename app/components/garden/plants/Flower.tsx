export default function Flower() {
  return (
    <svg
      viewBox="0 0 140 170"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flowering plant"
      role="img"
    >
      {/* Stem */}
      <path
        d="M70 155C70 155 68 110 70 78"
        stroke="#4F7D45"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Leaves */}
      <path
        d="M69 118C48 120 35 109 34 94C52 92 66 101 69 118Z"
        fill="#719D59"
      />

      <path
        d="M70 105C87 104 101 94 102 80C86 79 73 89 70 105Z"
        fill="#87AE68"
      />

      {/* Flower petals */}
      <circle cx="70" cy="48" r="25" fill="#E9A7B8" />
      <circle cx="46" cy="57" r="20" fill="#E9A7B8" />
      <circle cx="94" cy="57" r="20" fill="#E9A7B8" />
      <circle cx="55" cy="34" r="20" fill="#F0B8C7" />
      <circle cx="85" cy="34" r="20" fill="#F0B8C7" />

      {/* Flower center */}
      <circle cx="70" cy="48" r="13" fill="#E7C65C" />

      {/* Ground shadow */}
      <ellipse
        cx="70"
        cy="155"
        rx="32"
        ry="7"
        fill="#547441"
        opacity="0.2"
      />
    </svg>
  );
}