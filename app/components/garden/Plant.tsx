import Sprout from "./plants/Sprout";
import Flower from "./plants/Flower";
import Tree from "./plants/Tree";

type PlantProps = {
  type: "sprout" | "flower" | "tree";
  size?: "sm" | "md" | "lg";
};

const plantSizes = {
  sm: "h-16 w-16",
  md: "h-24 w-24",
  lg: "h-36 w-36",
};

export default function Plant({
  type,
  size = "md",
}: PlantProps) {
  const plant = {
    sprout: <Sprout />,
    flower: <Flower />,
    tree: <Tree />,
  }[type];

  return (
    <div
      className={`plant-sway ${plantSizes[size]} transition-transform duration-300 hover:scale-105`}
    >
      {plant}
    </div>
  );
}