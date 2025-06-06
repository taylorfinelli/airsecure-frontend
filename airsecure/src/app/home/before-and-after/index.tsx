"use client";
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

  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6 max-w-screen-2xl flex flex-col items-center gap-y-8">
        <Header text="Still Not Convinced?" variant="dark" center={true} />
        <p className="text-center">
          Take a look at some before-and-after photos to see what might be lingering in your home.
        </p>
        <Carousel opts={{ slidesToScroll: 2 }} setApi={setApi} className="w-5/6">
          <CarouselContent>
            {carouselImagePaths.map((path, i) => (
              <CarouselItem className="basis-1/2" key={i}>
                <img src={path} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-brand-primary text-white border-none hover:bg-brand-primary/80 active:bg-brand-primary/90 hover:text-white" />
          <CarouselNext className="bg-brand-primary text-white border-none hover:bg-brand-primary/80 active:bg-brand-primary/90 hover:text-white" />
        </Carousel>
        <div className="flex items-center gap-x-5">
          {Array.from({ length: Math.ceil(carouselImagePaths.length / 2) }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full ${
                i == current ? "bg-brand-primary" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
