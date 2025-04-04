export default function Header({
  text,
  variant,
  center = false,
}: {
  text: string;
  variant: "light" | "dark";
  center?: boolean;
}) {
  return (
    <p
      className={`md:text-4xl font-bold text-2xl ${
        variant === "light" ? "text-white" : "text-green-secondary"
      } ${center ? "text-center" : ""}`}
    >
      {text}
    </p>
  );
}
