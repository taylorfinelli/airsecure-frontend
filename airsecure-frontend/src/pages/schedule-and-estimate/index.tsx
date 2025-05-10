import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import ScheduleCard from "./components/schedule-card";
import Header from "@/components/text/header";
import { Separator } from "@/components/ui/separator";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import EstimateCard from "./components/estimate-card";

export default function ScheduleAndEstimate() {
  

  return (
    <div className="w-full flex justify-center mb-40">
      <div className="w-5/6 max-w-screen-2xl flex md:flex-row flex-col-reverse gap-y-8 gap-x-4">
        <ScheduleCard />
        <EstimateCard />
      </div>
    </div>
  );
}
