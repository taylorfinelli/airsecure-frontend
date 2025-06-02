import BeforeAndAfter from "@/app/home/before-and-after";
import DidYouKnow from "@/app/home/did-you-know";
import FAQ from "@/app/home/faq";
import Hero from "@/app/home/hero";
import Why from "@/app/home/why";
import Certified from "@/app/home/certified";
import Footer from "@/app/home/footer";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Why />
      <BeforeAndAfter />
      <DidYouKnow />
      <FAQ />
      <Certified />
      <Footer />
    </div>
  );
}
