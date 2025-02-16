import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselImagePaths } from "./utils";

export default function BeforeAndAfter() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6 max-w-screen-2xl flex flex-col items-center gap-y-8">
        <p className="md:text-4xl font-semibold text-center text-2xl text-green-secondary">
          Still Not Convinced?
        </p>
        <p className="text-center text-green-secondary">
          Take a look at some before-and-after photos to see what might be lingering in your home.
        </p>
        <Carousel className="w-5/6">
          <CarouselContent>
            {carouselImagePaths.map((path) => (
              <CarouselItem>
                <img src={path} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-green-primary text-white border-none hover:bg-green-primary/80 active:bg-green-primary/90 hover:text-white" />
          <CarouselNext className="bg-green-primary text-white border-none hover:bg-green-primary/80 active:bg-green-primary/90 hover:text-white" />
        </Carousel>
      </div>
    </div>
  );
}
