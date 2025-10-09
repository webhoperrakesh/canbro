"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

type AccordionItem = {
  heading: string;
  content: string;
};

type BlockData = {
  heading: string;
  repeater_fields: AccordionItem[] | string;
};

type AccordionProps = {
  faqItems: BlockData;
};

const Accordion = ({ faqItems }: AccordionProps) => {

   const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };


  const items = JSON.parse(faqItems.repeater_fields as string);

  console.log(faqItems.heading);
  return (
    <section id='latest-blogs'>
      <div className='container mx-auto px-4 py-10 md:py-10 lg:py-0 mb-6'>
        {/* Header Section */}
        <div className="text-center lg:text-left mb-8">
          <p className="mx-auto lg:mx-0 text-sm lg:font-[16px] font-medium text-white bg-[#38A0A7] rounded-full w-fit py-2 px-4 mb-4">
            FAQs
          </p>
          {faqItems.heading &&
            <h4 className='text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#212088] capitalize mb-6 custom-heading-color-light' dangerouslySetInnerHTML={{ __html: faqItems.heading ?? '' }} />
          }
        </div>

        {items.map((item: any, index: any) => (
          <div key={index} className="accordion-shadow rounded-2xl overflow-hidden">
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center pt-4 pb-4 text-left focus:outline-none transition hover:cursor-pointer"
            >
              <span className="text-sm lg:text-[20px] font-semibold text-[#212088]">{item.heading}</span>
              <span className="ml-2">{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-normal leading-[1.8rem] lg:mb-12 transition-all duration-300">
                {item.content}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  )
}

export default Accordion