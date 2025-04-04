import Header from "@/components/text/header";

export default function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-96 w-full bg-green-primary flex flex-row">
        <div className="h-full lg:block w-full overflow-hidden">
          <img
            src="/assets/0V15-01.jpg"
            className="object-cover object-right w-full h-full opacity-30"
          />
        </div>
      </div>
      <div className="absolute flex justify-center max-w-screen-2xl w-5/6">
        <div className="w-full">
          <div className="flex flex-row">
            <div className="w-full h-full p-4">
              <Header text="Duct and Vent Cleaning" variant="light" />
              <p className="text-white lg:text-lg pt-12 text-justify md:text-left">
                Welcome to AirSecure, your trusted experts in duct and vent
                cleaning. We specialize in improving indoor air quality by
                removing dust, allergens, and buildup from your HVAC system. Our
                professional team uses the latest home equipment and techniques
                to ensure your home or business stays clean, efficient, and most
                importantly: healthy!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
