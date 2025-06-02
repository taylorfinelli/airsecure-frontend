import { ShieldCheck } from "lucide-react";

export default function Certified() {
  return (
    <div className="bg-brand-primary w-full flex justify-center">
      <div className="flex flex-col items-center py-16 my-8 w-5/6 max-w-screen-2xl">
        <div className="pb-4">
          <ShieldCheck className="h-12 w-12 text-white" />
        </div>
        <div>
          <p className="md:text-4xl font-semibold text-center text-3xl text-white mb-8">
            Certified, Licensed, Insured
          </p>
        </div>
        <div className="max-w-3xl w-full">
          <p className="text-center text-white">
            We're fully certified and insured, ensuring top-quality service and your peace of mind.
            Trust our trained team to clean your ducts safely and effectively.
          </p>
        </div>
      </div>
    </div>
  );
}
