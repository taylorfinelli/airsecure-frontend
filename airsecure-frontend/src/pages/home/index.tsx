import BeforeAndAfter from "./before-and-after";
import DidYouKnow from "./did-you-know";
import FAQ from "./faq";
import Hero from "./hero";
import Why from "./why";
import Certified from "./certified";
import Footer from "./footer";

export default function Home() {
  return (
    // removed mb-40 from div as it left whitespace under footer
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
