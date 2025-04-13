import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ScheduleCard from "./components/schedule-card";
import Header from "@/components/text/header";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function ScheduleAndEstimate() {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const packages = [
    {
      id: "whole-home-duct-cleaning",
      serviceName: "Whole-Home Duct Cleaning",
      serviceDescription:
        "Includes inspection and cleaning of all ducts, vents, registers, blower wheel, air handler and indoor coils.",
      servicePrice: 395,
    },
    {
      id: "ventilation-cleaning",
      serviceName: "Ventilation Cleaning",
      serviceDescription: "",
      servicePrice: 225,
    },
    {
      id: "dryer-vent-cleaning",
      serviceName: "Dryer Vent Cleaning",
      serviceDescription: "",
      servicePrice: 135,
    },
    {
      id: "air-conditioner-and-furnace-cleaning",
      serviceName: "Air Conditioner & Furnace Cleaning",
      serviceDescription: "",
      servicePrice: 295,
    },
  ];

  console.log(selectedItems);

  return (
    <div className="w-full flex justify-center mb-40">
      <div className="w-5/6 max-w-screen-2xl flex gap-y-8 gap-x-4">
        <ScheduleCard />
        <Card className="rounded-2xl w-full">
          <CardHeader className="flex flex-col items-center gap-y-4">
            <Header text="Price Estimator" variant="dark" center={true} />
            <Separator />
          </CardHeader>
          <CardContent className="flex flex-col gap-y-4 items-center">
            <div className="w-full">
              <p className="font-semibold text-xl md:text-2xl text-green-secondary">
                Service Packages
              </p>
              <p className="text-green-secondary font-semibold">
                Bundle and save! Purchase multiple packages for greater
                discounts.
              </p>
            </div>
            {packages.map((pkg, index) => (
              <Card
                className="flex w-full items-center gap-x-3 p-4 hover:bg-slate-100 transition-all duration-150 ease-in-out cursor-pointer"
                key={index}
                onClick={() => {
                  if (selectedItems.includes(pkg.id)) {
                    setSelectedItems((prev: any) =>
                      prev.filter((item: any) => item !== pkg.id)
                    );
                  } else {
                    setSelectedItems((prev: any) => [...prev, pkg.id]);
                  }
                }}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    selectedItems.includes(pkg.id)
                      ? "bg-green-secondary"
                      : "border border-slate-500 bg-slate-100"
                  }`}
                />
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between w-full">
                    <p className="text-lg font-semibold text-green-secondary">
                      {pkg.serviceName}
                    </p>
                    <p className="text-lg font-semibold text-green-secondary">
                      ${pkg.servicePrice}
                    </p>
                  </div>
                  {pkg.serviceDescription && (
                    <p className="text-sm text-gray-500">
                      {pkg.serviceDescription}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
