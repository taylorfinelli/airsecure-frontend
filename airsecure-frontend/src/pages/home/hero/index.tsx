export default function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-96 w-full bg-green-primary flex flex-row">
        <div className="lg:w-1/2 h-full lg:block w-full overflow-hidden">
          <img
            src="/assets/cleaner.jpg"
            className="object-cover object-right w-full h-full lg:opacity-100 opacity-15"
          />
        </div>
      </div>
      <div className="absolute flex justify-center max-w-screen-2xl">
        <div className="flex flex-row justify-end">
          <div className="lg:w-1/2 w-full h-full p-4">
            <p className="text-white md:text-4xl font-semibold lg:text-left text-center text-2xl">
              Duct and Vent Cleaning
            </p>
            <p className="text-white lg:text-lg pt-12 text-justify md:text-left">
              Welcome to AirSecure, your trusted experts in duct and vent cleaning. We specialize in
              improving indoor air quality by removing dust, allergens, and buildup from your HVAC
              system. Our professional team uses the latest home equipment and techniques to ensure
              your home or business stays clean, efficient, and most importantly: healthy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
