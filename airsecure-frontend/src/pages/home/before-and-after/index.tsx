import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { carouselImagePaths } from "./utils";
import { useEffect, useState } from "react";
import Header from "@/components/text/header";

export default function BeforeAndAfter() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  console.log(current);

  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6 max-w-screen-2xl flex flex-col items-center gap-y-8">
        <Header text="Still Not Convinced?" variant="dark" center={true} />
        <p className="text-center">
          Take a look at some before-and-after photos to see what might be
          lingering in your home.
        </p>
        <Carousel setApi={setApi} className="w-5/6">
          <CarouselContent>
            {carouselImagePaths.map((path, i) => (
              <CarouselItem key={i}>
                <img src={path} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-green-primary text-white border-none hover:bg-green-primary/80 active:bg-green-primary/90 hover:text-white" />
          <CarouselNext className="bg-green-primary text-white border-none hover:bg-green-primary/80 active:bg-green-primary/90 hover:text-white" />
        </Carousel>
        <div className="flex items-center gap-x-5">
          {carouselImagePaths.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full ${
                i == current ? "bg-green-primary" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
