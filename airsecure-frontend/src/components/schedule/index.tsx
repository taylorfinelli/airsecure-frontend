import { Button } from "../ui/button";

export default function Schedule({ variant = "primary" }) {
  return (
    <Button
      className={
        variant === "secondary"
          ? "bg-white text-green-primary hover:bg-neutral-100/90 active:bg-neutral-100/80"
          : "bg-green-primary text-white"
      }
      onClick={() => {
        window.location.href = "/schedule";
      }}
    >
      SCHEDULE SERVICE
    </Button>
  );
}
