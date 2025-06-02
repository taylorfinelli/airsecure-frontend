import BeforeAndAfter from "./before-and-after";
import DidYouKnow from "./did-you-know";
import FAQ from "./faq";
import Hero from "./hero";
import Why from "./why";
import Footer from "./footer";
import Certified from "./certified";

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
