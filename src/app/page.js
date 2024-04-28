import Image from "next/image";
import SideBar from "./components/SideBar";
import GeminiAiBody from "./components/GeminiAiBody";

export default function Home() {
  return (
    <div className="w-full h-full flex contain">
      <SideBar />
      <GeminiAiBody />
    </div>
  );
}
