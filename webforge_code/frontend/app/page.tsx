import { Navbar } from "@/components/Navbar";
import NeuralBackground from "@/components/ui/flow-field-background";
import { AiChat } from "@/components/ui/v0-ai-chat";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-screen">
      <NeuralBackground 
            color="#818cf8" // Indigo-400
            scale={1}
            trailOpacity={0.1} // Lower = longer trails
            speed={0.8}
        />
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
    <div className="pointer-events-auto">
      <AiChat />
    </div>
  </div>
    </div>
    </div>
  );
}
