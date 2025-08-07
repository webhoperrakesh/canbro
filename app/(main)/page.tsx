import NewHeroSlider from "@/components/homepage/NewHeroSlider"
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


export default async function Home() {

  const homepageData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blocks`, {
    next: { revalidate: 3600 },
  });
  const blockData = await homepageData.json();

  const data = blockData.data || {};

  return (
    <>
      {data.heroslider && <NewHeroSlider sliderData={data.heroslider} />}
      {data.homeaboutus &&<About AboutUsData = {data.homeaboutus} /> }
      <SpecilizationSection />
      {data.whoweare &&<Whoweare WhoWeAreData = {data.whoweare} /> }
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
