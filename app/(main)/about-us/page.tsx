import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import { LuHeart, LuShield, LuUser, LuAward } from 'react-icons/lu'

const coreValues = [
    {
      icon: <LuHeart className="w-6 h-6" />,
      title: "Patient-Centered Care",
      description: "Every decision we make prioritizes the health and well-being of our patients.",
    },
    {
      icon: <LuShield className="w-6 h-6" />,
      title: "Quality & Safety",
      description: "We maintain the highest standards of quality and safety in all our operations.",
    },
    {
      icon: <LuUser className="w-6 h-6" />,
      title: "Transparency",
      description: "We believe in open communication and transparency in all our interactions.",
    },
    {
      icon: <LuAward className="w-6 h-6" />,
      title: "Innovation",
      description: "We continuously seek innovative solutions to improve healthcare outcomes.",
    },
  ]

const AboutUsPage = () => {
  return (
    <>
      <Breadcrumbs title="About Us" bgImage="/images/slider-bg-1.png" />
      <section id='about-us'>
        <div className='container mx-auto px-4 py-12 md:py-15'>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>
            <div className='md:col-span-5 relative'>
              <Image
                src="https://placehold.co/800x800.png?text=No\nImage"
                width={500}
                height={500}
                className='w-full h-auto object-cover'
                alt='About Us'
                priority
              />
              <div className="hidden md:block absolute -bottom-6 -right-6 bg-[#ff6900] text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">7+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            <div className='md:col-span-7 md:pl-0 lg:pl-10'>

              <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-4'>
                <span className='text-[#212088]'>Company</span> Profile
              </h2>
              <div className='mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-medium leading-[1.8rem] lg:mb-12'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[url(/images/certificate-bg.png)] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%]' id='our-certificate'>
          <div className='container mx-auto px-4 py-12 md:py-15'>
            <div className='flex flex-col justify-center items-center gap-4'>
              <h2 className='text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold capitalize leading-12'>
                Our <span className='text-[#38A0A7]'>Vision</span>
              </h2>
              <p className="text-xl text-white font-semibold italic">
                "To be one of the world's most advanced companies in healthcare innovation"
              </p>
              <p className="max-w-5xl text-center mx-auto text-sm md:text-[16px] font-medium text-white leading-[1.8rem]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>


        <div className='container mx-auto px-4 py-12 md:py-15'>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>

            <div className='md:col-span-7 md:pl-0 lg:pl-10'>

              <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-4'>
                <span className='text-[#212088]'>Our</span> Mission
              </h2>
              <div className='mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-medium leading-[1.8rem] lg:mb-12'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium.
                </p>
              </div>
            </div>
            <div className='md:col-span-5'>
              <Image
                src="https://placehold.co/800x800.png?text=No\nImage"
                width={500}
                height={500}
                className='w-full h-auto object-cover'
                alt='About Us'
                priority
              />
            </div>
          </div>
        </div>


        <div className="bg-[#f6f6f6]">
        <div className='container mx-auto px-4 py-12 md:py-15'>
          <div className="text-center mb-16">
             <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-4'>
                <span className='text-[#212088]'>Core</span> Values
              </h2>
            <p className="text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. These values guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 inline-flex items-center justify-center bg-[#38A0A7] rounded-full mb-4 text-white">
                  {value.icon}
                </div>
                
                <h3 className="text-[#19065f] text-[18px] font-bold text-xl mb-3">{value.title}</h3>
                <p className="leading-relaxed text-sm lg:text-[16px] font-medium text-gray-600 mb-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      </section>
    </>
  )
}

export default AboutUsPage