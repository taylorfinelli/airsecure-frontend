export default function Header({
  text,
  variant,
  center = false,
  size = "4xl",
}: {
  text: string;
  variant: "light" | "dark";
  center?: boolean;
  size?: "4xl" | "2xl" | "xl" | "lg";
}) {
  return (
    <p
      className={`md:text-${size} font-bold text-2xl ${
        variant === "light" ? "text-white" : "text-brand-secondary"
      } ${center ? "text-center" : ""}`}
    >
      {text}
    </p>
  );
}
