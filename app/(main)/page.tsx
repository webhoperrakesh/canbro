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
import { generateSeoMetadata } from "@/utils/generateSeoMetadata"
import { getAbsoluteUrl } from "@/utils/helper"
import Accordion from "@/components/Accordion"
import WhyChooseUs from "@/components/homepage/WhyChooseUs"
import Advantages from "@/components/homepage/Advantages"

export const generateMetadata = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homepagemeta`);
  const meta = await res.json();
  
  const pageUrl = getAbsoluteUrl("/");

  return generateSeoMetadata(meta.MetaData, pageUrl, "website");
};


export default async function Home() {

  const homepageData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blocks`, {
    next: { revalidate: 600 },
  });
  const blockData = await homepageData.json();

  const data = blockData.data || {};

  console.log(data)

  return (
    <>
      {data.heroslider &&
        <NewHeroSlider sliderData={data.heroslider} />
      }
      {data.homeaboutus &&
        <About AboutUsData={data.homeaboutus} />
      }
      <SpecilizationSection />
      {data.whoweare &&
        <Whoweare WhoWeAreData={data.whoweare} />
      }
      <ProductSlider showText ShowSlider={false} />
      {data.ourcertification &&
        <OurCertification OurCertificationData={data.ourcertification} />
      }
      <AmplurCVSlider />
      {data.ourcommitment &&
        <OurCommitment CommitmentData={data.ourcommitment} />
      }

      {data.homewhychooseus &&
        <WhyChooseUs ChooseUsData = {data.homewhychooseus} />
      }

      {data.homeadvantages &&
        <Advantages AdvantagesData = {data.homeadvantages} />
      }

      <EnquirySection />
      <BlogsSection />
      {data.homefaqs &&
      <Accordion faqItems = {data.homefaqs} />
      } 
      {data.pharmadivisions &&
        <PharmaDivision DivisionsData={data.pharmadivisions} />
      }
    </>
  );
}
