import BeforeAndAfter from "@/app/home/before-and-after";
import DidYouKnow from "@/app/home/did-you-know";
import FAQ from "@/app/home/faq";
import Hero from "@/app/home/hero";
import Why from "@/app/home/why";

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
