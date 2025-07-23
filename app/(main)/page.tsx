import HeroSection from "@/components/homepage/HeroSection"
import About from "@/components/homepage/About";
import Whoweare from "@/components/homepage/Whoweare";
import FeatureProducts from '@/components/homepage/FeatureProducts'
import OurCertification from "@/components/homepage/OurCertification"
import OurCommitment from "@/components/homepage/OurCommitment"
import PharmaDivision from "@/components/homepage/PharmaDivision"
import EnquirySection from "@/components/homepage/EnquirySection"
import BlogsSection from "@/components/homepage/BlogsSection";
import AmplurCVSlider from "@/components/homepage/VisualAidsSection"
import SpecilizationSection from "@/components/homepage/SpecilizationSection";

export default function Home() {
  return (
   <>
   <HeroSection />
   <About />
   <SpecilizationSection />
   <Whoweare />
   <FeatureProducts />
   <OurCertification />
   <AmplurCVSlider />
   <OurCommitment />
   <EnquirySection />
   <BlogsSection />
   <PharmaDivision />
   </>
  );
}
