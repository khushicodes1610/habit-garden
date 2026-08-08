export default function Tree() {
  return (
    <svg
      viewBox="0 0 180 220"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mature garden tree"
      role="img"
    >
      {/* Trunk */}
      <path
        d="M83 198C83 160 87 125 88 102"
        stroke="#795548"
        strokeWidth="18"
        strokeLinecap="round"
      />

      <path
        d="M97 198C97 160 93 125 92 102"
        stroke="#8D624F"
        strokeWidth="14"
        strokeLinecap="round"
      />

      {/* Canopy */}
      <circle cx="90" cy="72" r="54" fill="#6F9D59" />
      <circle cx="48" cy="78" r="34" fill="#7EAA66" />
      <circle cx="132" cy="78" r="34" fill="#83AE6A" />
      <circle cx="67" cy="45" r="32" fill="#91B976" />
      <circle cx="111" cy="44" r="34" fill="#86B16C" />

      {/* Highlight */}
      <circle
        cx="73"
        cy="43"
        r="10"
        fill="#B8D493"
        opacity="0.55"
      />

      {/* Ground */}
      <ellipse
        cx="90"
        cy="199"
        rx="43"
        ry="9"
        fill="#547441"
        opacity="0.2"
      />
    </svg>
  );
}