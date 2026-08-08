type PlantProps = {
  type: "sprout" | "flower" | "tree";
  size?: "sm" | "md" | "lg";
};

const plantSizes = {
  sm: "text-4xl",
  md: "text-6xl",
  lg: "text-8xl",
};

const plantTypes = {
  sprout: "🌱",
  flower: "🌷",
  tree: "🌳",
};

export default function Plant({
  type,
  size = "md",
}: PlantProps) {
  return (
    <span
      className={`plant-sway inline-block ${plantSizes[size]} transition-transform duration-300 hover:scale-105`}
      role="img"
      aria-label={`${type} plant`}
    >
      {plantTypes[type]}
    </span>
  );
}