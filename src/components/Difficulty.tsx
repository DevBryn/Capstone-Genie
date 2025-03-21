"use client";
import React, { useState } from "react";

import { Label } from "./ui/label";

function Difficulty() {
  // State to store selected value
  const [selectedOption, setSelectedOption] = useState("DeliveryStandard");

  // Handle radio change with proper type annotation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <Label htmlFor="text" className="text-gray-400">
        Select Difficulty:
      </Label>
      <fieldset className="flex flex-col lg:flex-row items-center gap-4 w-full">
        {/* Easy */}
        <div className="w-full">
          <label
            htmlFor="DeliveryStandard"
            className={`flex cursor-pointer justify-between gap-4 rounded-lg border ${
              selectedOption === "DeliveryStandard"
                ? "border-blue-500 ring-1 ring-blue-500"
                : "border-gray-100"
            } bg-white p-4 text-sm font-medium shadow-xs hover:border-gray-200`}
          >
            <div>
              <p className="text-gray-700">Easy</p>
            </div>

            <input
              type="radio"
              name="DeliveryOption"
              value="DeliveryStandard"
              id="DeliveryStandard"
              className="size-5 border-gray-300 text-blue-500"
              checked={selectedOption === "DeliveryStandard"}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Intermediate */}
        <div className="w-full">
          <label
            htmlFor="DeliveryPriority"
            className={`flex cursor-pointer justify-between gap-4 rounded-lg border ${
              selectedOption === "DeliveryPriority"
                ? "border-blue-500 ring-1 ring-blue-500"
                : "border-gray-100"
            } bg-white p-4 text-sm font-medium shadow-xs hover:border-gray-200`}
          >
            <div>
              <p className="text-gray-700">Intermediate</p>
            </div>

            <input
              type="radio"
              name="DeliveryOption"
              value="DeliveryPriority"
              id="DeliveryPriority"
              className="size-5 border-gray-300 text-blue-500"
              checked={selectedOption === "DeliveryPriority"}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Advance */}
        <div className="w-full">
          <label
            htmlFor="DeliveryAdvance"
            className={`flex cursor-pointer justify-between gap-4 rounded-lg border ${
              selectedOption === "DeliveryAdvance"
                ? "border-blue-500 ring-1 ring-blue-500"
                : "border-gray-100"
            } bg-white p-4 text-sm font-medium shadow-xs hover:border-gray-200`}
          >
            <div>
              <p className="text-gray-700">Advance</p>
            </div>

            <input
              type="radio"
              name="DeliveryOption"
              value="DeliveryAdvance"
              id="DeliveryAdvance"
              className="size-5 border-gray-300 text-blue-500"
              checked={selectedOption === "DeliveryAdvance"}
              onChange={handleChange}
            />
          </label>
        </div>
      </fieldset>
    </div>
  );
}

export default Difficulty;
