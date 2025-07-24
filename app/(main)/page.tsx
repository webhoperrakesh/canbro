import HeroSlider from "@/components/homepage/HeroSlider"
import About from "@/components/homepage/About"
import SpecilizationSection from "@/components/homepage/SpecilizationSection"
import Whoweare from "@/components/homepage/Whoweare"
import OurCertification from "@/components/homepage/OurCertification"
import AmplurCVSlider from "@/components/homepage/VisualAidsSection"
import OurCommitment from "@/components/homepage/OurCommitment"
import EnquirySection from "@/components/homepage/EnquirySection"
import BlogsSection from "@/components/homepage/BlogsSection"
import PharmaDivision from "@/components/homepage/PharmaDivision"
import ProductSlider from "@/components/homepage/ProductSlider"


export default function Home() {
  return (
   <>
   <HeroSlider />
   <About />
   <SpecilizationSection />
   <Whoweare />
   <ProductSlider />
   <OurCertification />
   <AmplurCVSlider />
   <OurCommitment />
   <EnquirySection />
   <BlogsSection />
   <PharmaDivision />
   </>
  );
}
