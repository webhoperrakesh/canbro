import HeroSection from "@/components/homepage/HeroSection"
import About from "@/components/homepage/About";
import Whoweare from "@/components/homepage/Whoweare";
import FeatureProducts from '@/components/homepage/FeatureProducts'
import OurCertification from "@/components/homepage/OurCertification"
import OurCommitment from "@/components/homepage/OurCommitment"
import PharmaDivision from "@/components/homepage/PharmaDivision"

export default function Home() {
  return (
   <>
   <HeroSection />
   <About />
   <Whoweare />
   <FeatureProducts />
   <OurCertification />
   <OurCommitment />
   <PharmaDivision />
   </>
  );
}
