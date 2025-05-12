export default function Logo() {
  return (
    <img
      src="/assets/Logo.png"
      onClick={() => {
        window.location.href = "/";
      }}
      className="object-contain w-32 cursor-pointer"
    />
  );
}
