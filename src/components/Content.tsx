"use client";
import React from "react";

//icons
import { Box, Wand } from "lucide-react";

//components
import IndustrySelection from "./IndustrySelection";
import ProjectType from "./ProjectType";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Difficulty from "./Difficulty";
import { Button } from "./ui/button";

function Content() {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8">
      <div className="p-4 rounded-md bg-white shadow-md w-full lg:w-[450px]">
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
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="text" className="text-gray-400">
              Industry:
            </Label>
            <IndustrySelection />
          </div>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="text" className="text-gray-400">
              Application Type:
            </Label>
            <ProjectType />
          </div>
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
          <Button className="w-full font-semibold">
            Summon My Title <Wand />
          </Button>
        </div>
      </div>

      {/* generated titles */}
      <div className="p-4 rounded-md bg-white shadow-md w-full lg:flex-grow min-h-[200px]">
        <div className="flex items-center justify-center rounded-md border-2 border-dashed p-4 w-full min-h-[450px]">
          <p className="font-primary font-bold text-xl text-gray-300">
            Title will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
