import Hero from "@/components/Hero";
import { FloatingNavDemo } from "@/components/ui/FloatingNavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden  sm:px-10 px-5">
      <div className="max-w-7xl w-screen">
        <FloatingNavDemo navItems={[

        ]} />
        <Hero />
      </div>
    </main>
  );
}
