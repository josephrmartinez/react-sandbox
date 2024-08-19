import clsx from "clsx";

interface CardProps {
  children?: React.ReactNode;
  color?: "teal" | "gray" | "blue";
  size: "sm" | "md" | "lg";
  className?: string;
}

export default function Card({
  children,
  color,
  size,
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={clsx(className, "border bg-gray-50", {
        "bg-gray-600": color === "gray",
        "bg-teal-500": color === "teal",
        "bg-blue-400": color === "blue",
        "h-12 w-24": size === "sm",
        "h-24 w-48": size === "md",
        "h-48 w-64": size === "lg",
      })}
    >
      {children}
    </div>
  );
}
