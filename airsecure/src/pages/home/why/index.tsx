"use client";
import Schedule from "@/components/schedule";
import { AirVent, SprayCan, ThermometerSunIcon } from "lucide-react";
import WhyCard from "./components/why-card";
import Header from "@/components/text/header";

export default function Why() {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-col w-5/6 gap-y-8 mb-8 max-w-screen-2xl">
        <p className="md:text-4xl font-bold text-center text-2xl text-green-secondary">
          Top Benefits of Air Duct Cleaning
        </p>

        <div className="flex lg:flex-row flex-col gap-8">
          <WhyCard
            header="Improved System Efficiency"
            paragraph="By reducing the strain on the HVAC system caused by clogged
                ducts, you're helping prevent unnecessary wear and tear. This
                can extend the lifespan of your system, saving you money on
                repairs or replacements in the long run."
            icon={<ThermometerSunIcon className="h-8 w-8 text-green-secondary" />}
          />

          <WhyCard
            header="Reduce Odors"
            paragraph="Over time, stale air, pet odors, cooking smells, or mold can
                accumulate in your ducts, which can lead to unpleasant smells
                circulating throughout your home. Cleaning the ducts helps
                eliminate these odors, leaving your home smelling fresher and
                more comfortable."
            icon={<SprayCan className="h-8 w-8 text-green-secondary" />}
          />

          <WhyCard
            header="Decrease Dust and Allergens"
            paragraph="As air circulates through dirty ducts, dust and allergens can
                spread throughout the home, settling on furniture, floors, and
                other surfaces. Cleaning the ducts reduces the amount of dust
                and allergens in the air, which not only improves your home's
                air quality but also means you'll spend less time dusting and
                cleaning overall."
            icon={<AirVent className="h-8 w-8 text-green-secondary" />}
          />
        </div>
      </div>
      <div className="bg-brand-primary w-full flex justify-center">
        <div className="w-5/6 gap-x-8 max-w-screen-2xl flex gap-y-8 py-8 justify-center md:justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-x-8">
            <Header text="Let us help!" variant="light" />
            <p className="text-xl text-white text-center md:text-left">
              Schedule your service today and breathe easier tomorrow.
            </p>
          </div>
          <div className="hidden md:block">
            <Schedule variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
