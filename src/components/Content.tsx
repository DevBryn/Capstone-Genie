import React from "react";

//icons
import { Box } from "lucide-react";

//components
import IndustrySelection from "./IndustrySelection";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Difficulty from "./Difficulty";

function Content() {
  return (
    <div className="flex items-start gap-4">
      <div className="p-4 rounded-md bg-white shadow-md max-w-md">
        {/* header */}
        <div className="flex items-center gap-4 mb-6">
          <Box className="p-2 rounded-sm border size-10 border-gray-400 text-blue-500" />
          <div className="flex flex-col items-start gap-0">
            <p className="font-primary font-semibold text-gray-700">
              Describe Your Dream Capstone Title
            </p>
            <p className="font-primary text-gray-400 text-sm">
              Guide the Genie by sharing your capstone vision.
            </p>
          </div>
        </div>

        {/* inputs */}
        <div className="flex flex-col gap-6 items-center">
          <IndustrySelection />
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="text" className="text-gray-400">
              Target Audience:
            </Label>
            <Input
              type="text"
              id="target-audience"
              placeholder="Ex. Students"
              className="font-medium"
            />
          </div>
          <Difficulty />
        </div>
      </div>

      {/* generated titles */}
      <div className="p-4 rounded-md bg-white shadow-md flex flex-grow">
        <div className="rounded-md border border-dashed p-4">Test</div>
      </div>
    </div>
  );
}

export default Content;
