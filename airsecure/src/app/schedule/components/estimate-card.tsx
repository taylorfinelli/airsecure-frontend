import Header from "@/components/text/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useMemo, useState } from "react";

interface Package {
  id: string;
  serviceName: string;
  serviceDescription: string;
  servicePrice: number;
}

export default function EstimateCard({ setEstimateDetails }: { setEstimateDetails: Function }) {
  const [selectedItems, setSelectedItems] = useState<Package[]>([]);

  const packages: Package[] = [
    {
      id: "whole-home-duct-cleaning",
      serviceName: "Whole-Home Duct Cleaning",
      serviceDescription:
        "Includes inspection and cleaning of all ducts, vents, registers, blower wheel, air handler and indoor coils.",
      servicePrice: 395,
    },
    {
      id: "air-conditioner-and-furnace-cleaning",
      serviceName: "Air Conditioner & Furnace Cleaning",
      serviceDescription: "",
      servicePrice: 295,
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
  ];

  const highestPrice = useMemo(() => {
    if (selectedItems.length === 0) return 0;
    return Math.max(...selectedItems.map((item: any) => item.servicePrice || 0));
  }, [selectedItems]);

  const totalPrice = useMemo(() => {
    if (selectedItems.length === 0) return 0;
    return selectedItems.reduce((acc: number, item: any) => {
      const isDiscounted = item.servicePrice < highestPrice && selectedItems.length > 1;
      const price = isDiscounted ? item.servicePrice - 50 : item.servicePrice;
      return acc + price;
    }, 0);
  }, [selectedItems, highestPrice]);

  const handleClick = () => {
    setEstimateDetails(
      "[Added from estimator]\n" +
        selectedItems.map((item) => item.serviceName).join(", ") +
        "\nEstimated price: $" +
        totalPrice
    );
  };

  return (
    <div>
      <Card className="rounded-2xl w-full">
        <CardHeader className="flex flex-col items-center gap-y-4">
          <Header text="Price Estimator" variant="dark" center={true} />
          <Separator className="border-0" />
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4 items-center">
          <div className="w-full">
            <p className="font-semibold text-xl md:text-2xl text-brand-secondary">
              Service Packages
            </p>
            <p className="text-brand-secondary font-semibold">
              Bundle and save! Purchase multiple packages for greater discounts.
            </p>
          </div>
          <CardDescription>
            <strong>Disclaimer:</strong> These prices are purely <em>estimates</em> and may vary
            based on the size, complexity, and condition of your system. Final pricing will be
            provided after an on-site inspection.
          </CardDescription>
          {packages.map((pkg, index) => {
            const isSelected = selectedItems.some((item: any) => item.id === pkg.id);
            const shouldDiscount = selectedItems.length > 0 && pkg.servicePrice < highestPrice;

            const displayedPrice = shouldDiscount ? pkg.servicePrice - 50 : pkg.servicePrice;

            return (
              <Card
                className="flex w-full items-center gap-x-3 p-4 hover:bg-slate-100 transition-all duration-150 ease-in-out cursor-pointer"
                key={index}
                onClick={() => {
                  if (isSelected) {
                    setSelectedItems((prev: any) => prev.filter((item: any) => item.id !== pkg.id));
                  } else {
                    setSelectedItems((prev: any) => [...prev, pkg]);
                  }
                }}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    isSelected ? "bg-brand-secondary" : "border border-slate-500 bg-slate-100"
                  }`}
                />
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between w-full">
                    <p className="text-lg font-semibold text-brand-secondary">{pkg.serviceName}</p>
                    <p className="text-lg font-semibold text-brand-secondary flex gap-2 items-center">
                      {shouldDiscount && (
                        <span className="text-red-500 line-through">${pkg.servicePrice}</span>
                      )}
                      <span>${displayedPrice}</span>
                    </p>
                  </div>
                  {pkg.serviceDescription && (
                    <p className="text-sm text-gray-500">{pkg.serviceDescription}</p>
                  )}
                </div>
              </Card>
            );
          })}

          <Separator />
          <div className="w-full flex justify-end text-brand-secondary font-semibold text-lg">
            Estimated Total: ${totalPrice}
          </div>
          <Button onClick={handleClick} className="w-full">
            Add to Schedule Form
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
