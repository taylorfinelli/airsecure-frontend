import Schedule from "@/components/schedule";
import { AirVent, SprayCan, ThermometerSunIcon } from "lucide-react";

export default function Why() {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-col w-5/6 gap-y-8 mb-8">
        <p className="md:text-4xl font-semibold text-center text-2xl">
          Why You Should Clean Your Air Ducts
        </p>

        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
          <div className="flex lg:w-1/2 w-full items-center gap-x-8 lg:justify-start justify-center">
            <ThermometerSunIcon className="h-12 w-12" />
            <p className="md:text-3xl font-semibold text-xl">Improved System Efficiency</p>
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="text-justify md:text-left">
              By reducing the strain on the HVAC system caused by clogged ducts, you're helping
              prevent unnecessary wear and tear. This can extend the lifespan of your system, saving
              you money on repairs or replacements in the long run.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
          <div className="flex lg:w-1/2 w-full items-center gap-x-8 lg:justify-start justify-center">
            <SprayCan className="h-12 w-12" />
            <p className="md:text-3xl font-semibold text-xl">Reduce Odors</p>
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="text-justify md:text-left">
              Over time, stale air, pet odors, cooking smells, or mold can accumulate in your ducts,
              which can lead to unpleasant smells circulating throughout your home. Cleaning the
              ducts helps eliminate these odors, leaving your home smelling fresher and more
              comfortable.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
          <div className="flex lg:w-1/2 w-full items-center gap-x-8 lg:justify-start justify-center">
            <AirVent className="h-12 w-12" />
            <p className="md:text-3xl font-semibold text-xl">Decrease Dust and Allergens</p>
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="text-justify md:text-left">
              As air circulates through dirty ducts, dust and allergens can spread throughout the
              home, settling on furniture, floors, and other surfaces. Cleaning the ducts reduces
              the amount of dust and allergens in the air, which not only improves your home's air
              quality but also means you'll spend less time dusting and cleaning overall.
            </p>
          </div>
        </div>
      </div>
      <Schedule />
    </div>
  );
}
