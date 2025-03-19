import React from "react";

//icons
import { Moon } from "lucide-react";

//components
import Faqs from "./Faqs";

function MilestoneBar() {
  return (
    <div className="p-4 md:px-6 lg:px-6 lg:py-12 flex flex-col gap-4 h-full min-h-screen">
      {/* header */}
      <div className="flex items-center justify-between">
        <h2 className="font-primary text-white font-bold">CapstoneGenie</h2>
        <Moon className="icon" />
      </div>

      {/* on this page */}
      <div className="hidden lg:flex flex-grow">
        <Faqs />
      </div>

      {/* footer */}
      <div className="hidden lg:flex">
        <p className="text-white/50 text-sm">Footer</p>
      </div>
    </div>
  );
}

export default MilestoneBar;
