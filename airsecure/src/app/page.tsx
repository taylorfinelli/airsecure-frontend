import BeforeAndAfter from "@/pages/home/before-and-after";
import DidYouKnow from "@/pages/home/did-you-know";
import FAQ from "@/pages/home/faq";
import Hero from "@/pages/home/hero";
import Why from "@/pages/home/why";

export default function Home() {
  return (
    <div className="w-full mb-40">
      <Hero />
      <Why />
      <BeforeAndAfter />
      <DidYouKnow />
      <FAQ />
    </div>
  );
}
