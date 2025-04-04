import Header from "@/components/text/header";

export default function DidYouKnow() {
  return (
    <div className="flex flex-col items-center py-16 my-8 bg-green-primary gap-y-8">
      <Header text="Did You Know?" variant="light" center={true} />
      <div className="flex md:flex-row flex-col w-5/6 gap-x-8 max-w-screen-2xl">
        <div className="flex flex-col md:gap-y-4 mb-6 md:mb-0">
          <p className="text-white text-center font-bold md:text-2xl text-lg">
            Indoor air can be 2-5x more polluted than outdoor air.
          </p>
          <p className="text-white text-center">
            The leading causes of this are household chemicals, furniture, and
            poor ventilation. Dirty ducts just recirculate these pollutants.
          </p>
        </div>

        <div className="flex flex-col md:gap-y-4 mb-6 md:mb-0">
          <p className="text-white text-center font-bold md:text-2xl text-lg">
            The average American spends 90% of their time indoors
          </p>
          <p className="text-white text-center">
            This makes indoor air quality even more important, as it's essential
            to create healthy and comfortable environments for daily living.
          </p>
        </div>

        <div className="flex flex-col md:gap-y-4 mb-6 md:mb-0">
          <p className="text-white text-center font-bold md:text-2xl text-lg">
            A six room home can accumulate up to 40 pounds of dust yearly
          </p>
          <p className="text-white text-center">
            And it's made up of skin cells, pet dander, and other particles.
            Regular cleaning is key to reducing allergens and improving air
            quality.
          </p>
        </div>
      </div>
    </div>
  );
}
