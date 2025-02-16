import BeforeAndAfter from "./before-and-after";
import Hero from "./hero";
import Why from "./why";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Why />
      <BeforeAndAfter />
    </div>
  );
}
