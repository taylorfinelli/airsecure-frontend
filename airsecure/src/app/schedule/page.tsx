"use client";
import ScheduleCard from "./components/schedule-card";
import EstimateCard from "./components/estimate-card";
import { useState } from "react";

export default function ScheduleAndEstimate() {
  const [estimateDetails, setEstimateDetails] = useState("");
  return (
    <div className="w-full flex justify-center mb-40">
      <div className="w-5/6 max-w-screen-2xl flex md:flex-row flex-col-reverse gap-y-8 gap-x-4">
        <ScheduleCard estimateDetails={estimateDetails} />
        <EstimateCard setEstimateDetails={setEstimateDetails} />
      </div>
    </div>
  );
}
