import { ShieldCheck } from "lucide-react";

export default function Certified() {
  return (
    <div className="flex flex-col items-center py-16 my-8 bg-green-primary">
      <div className="pb-4">
        <ShieldCheck className="h-12 w-12 text-white"/>
      </div>
      <div>
        <p className="md:text-4xl font-semibold text-center text-3xl text-white mb-8">
          Certified, Licensed, Insured
        </p>
      </div>
      <div className="lg:w-1/4 w-full">
        <p className="text-center text-white">
          We're fully certified and insured, ensuring top-quality service and your peace of mind. Trust our trained team to clean your ducts safely and effectively.
        </p>
      </div>
    </div>
  );
}