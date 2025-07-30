import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import ContactForm from '../contact/ContactForm';
import { BiCheckCircle } from 'react-icons/bi';
import { LuAward } from "react-icons/lu";

const services = [
    {
        title: "Lorem Service",
        image: "https://placehold.co/600x400.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
        title: "Ipsum Service",
        image: "https://placehold.co/600x400.png",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
        title: "Dolor Service",
        image: "https://placehold.co/600x400.png",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    },
];

const featureList = [
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet consectetur",
];

const PharmaFranchise = () => {
    return (
        <>
            <Breadcrumbs title='PCD Pharma Franchise' bgImage='/images/slider-bg-1.png' />
            <section id='about'>

                <div className='container mx-auto px-4 py-12 md:py-15'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>
                        <div className='md:col-span-7 md:pr-0 lg:pr-10'>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-4'>
                                <span className='text-[#212088]'>PCD Pharma</span> Franchise
                            </h2>
                            <div className="mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-medium leading-[1.8rem] lg:mb-12">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                </p>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                    sunt explicabo.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-5 relative">
                            <Image
                                src="https://placehold.co/800x800.png?text=No\nImage"
                                alt="Business Meeting"
                                width={500}
                                height={500}
                                className='rounded-lg w-full h-auto object-cover'
                            />
                            {/* <div className="absolute -bottom-6 -left-6 bg-[#ff6900] text-white p-4 rounded-lg">
                                <div className="text-2xl font-bold">15+</div>
                                <div className="text-sm">Years Experience</div>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="bg-[#F6F6F6]">
                    <div className='container mx-auto px-4 py-12 md:py-15'>
                        <h2 className='text-2xl text-center md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-8'>
                            <span className='text-[#212088]'>Our</span> Services
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden hover:shadow-lg transition-shadow bg-white shadow-lg border border-gray-100 rounded-xl"
                                >
                                    <div className="relative h-60">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={400}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" /> */}
                                        <h3 className="absolute bottom-4 left-4 text-sm lg:font-[16px] font-medium text-white uppercase bg-orange-500 rounded-full w-max py-2 px-6">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm md:text-[16px] font-medium leading-relaxed text-gray-600 ">{service.description}</p>
                                        {/* Optional Button if needed:
                                        <Button variant="outline" className="w-full bg-transparent">
                                        Learn More
                                        </Button> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='bg-[#38a0a7]'>
                    <div className='container mx-auto px-4 py-12 md:py-15'>
                        <div className="flex items-center justify-center">
                            {/* Empty column for spacing on left */}
                            {/* Form in the middle column */}
                            <div className="lg:col-span-1 bg-white shadow-lg border border-gray-100 rounded-xl p-8 md:p-10">
                                <div className="pb-6 text-center">
                                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#EF7F1B] capitalize mb-4'>
                                        Send Us a Message
                                    </h2>
                                    <p className="text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90">Have a question or need assistance? Fill out the form below.</p>
                                </div>
                                <div className="pt-6">
                                    <ContactForm />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className='bg-white'>
                <div className='container mx-auto px-4 py-12 md:py-15'>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-4'>
                                <span className='text-[#212088]'>Why</span> Choose Us
                            </h2>
                            <div className="space-y-4">
                                {featureList.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <BiCheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-[#3C3C3C] md:text-[16px] font-medium">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                                    <div className="text-center text-white">
                                        <div className="text-4xl font-bold mb-2">100%</div>
                                        <div className="text-sm uppercase tracking-wide">Satisfaction</div>
                                        <div className="text-sm uppercase tracking-wide">Guarantee</div>
                                    </div>
                                </div>
                                <LuAward className="absolute -top-4 -right-4 h-12 w-12 text-yellow-500" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </section>
        </>

    )
}

export default PharmaFranchise