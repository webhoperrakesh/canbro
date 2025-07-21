import Image from "next/image";
import HeroSection from "@/components/homepage/HeroSection"
import About from "@/components/homepage/About";
import Whoweare from "@/components/homepage/Whoweare";

export default function Home() {
  return (
   <>
   <HeroSection />
   <About />
   <Whoweare />
   </>
  );
}
