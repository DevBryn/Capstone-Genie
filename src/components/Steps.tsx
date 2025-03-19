import React from "react";

//icons
import { Factory, PanelsTopLeft, AlignVerticalJustifyEnd } from "lucide-react";
import IndustrySelection from "./IndustrySelection";
import { Button } from "./ui/button";

function Steps() {
  return (
    <div>
      <h2 className="sr-only">Steps</h2>

      <div>
        <ol className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden border border-gray-100 text-sm text-gray-500 sm:grid-cols-3">
          <li className="flex items-center justify-center p-4 gap-2 border-blue-500 border-2">
            <Factory className="text-gray-600" />
            <p className="leading-none">
              <strong className="block font-semibold text-gray-600">
                {" "}
                Choose Industry{" "}
              </strong>
              <small className="mt-1 text-gray-600">
                {" "}
                Select your industry.{" "}
              </small>
            </p>
          </li>

          <li className="relative flex items-center justify-center gap-2 p-4">
            <PanelsTopLeft className=" text-gray-600" />

            <p className="leading-none">
              <strong className="block font-semibold"> Project Type </strong>
              <small className="mt-1"> Mobile or web? </small>
            </p>
          </li>

          <li className="flex items-center justify-center gap-2 p-4">
            <AlignVerticalJustifyEnd className="text-gray-600" />

            <p className="leading-none">
              <strong className="block font-semibold">
                {" "}
                Select Difficulty{" "}
              </strong>
              <small className="mt-1"> Choose base on your skill. </small>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Steps;
