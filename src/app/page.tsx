//components
import MilestoneBar from "@/components/MilestoneBar";
import Content from "@/components/Content";

//icons
import { WandSparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="bg-blue-500 h-[60px] lg:w-[300px] lg:h-screen w-full">
          <MilestoneBar />
        </div>
        <div className="lg:flex-grow lg:mt-0 p-4 md:p-12 h-screen bg-gray-100">
          {/* header */}
          <div className="flex flex-col mb-6">
            <div className="flex items-center gap-2">
              <h1 className="font-primary md:text-3xl font-bold text-gray-800">
                Capstone Title Generator
              </h1>
              <WandSparkles className="size-4 md:size-6 text-gray-700" />
            </div>
            <p className="font-medium text-gray-500 text-sm md:text-[16px] font-primary">
              Unlock the perfect title in seconds ⚡️
            </p>
          </div>

          {/* contents */}
          <Content />
        </div>
      </div>
    </main>
  );
}
