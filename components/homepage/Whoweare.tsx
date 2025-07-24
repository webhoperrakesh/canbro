import React from 'react'
import Image from 'next/image'

const Whoweare = () => {
  return (
    <section className='bg-[url(/images/whoweare-bg.png)] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%]' id='who-we-are' >
                <div className='container mx-auto px-4 py-12 md:py-15'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>
                        <div className='md:col-span-5'>
                            <Image
                                src="/images/who-we-are.png"
                                width={500}
                                height={500}
                                className='w-full h-auto object-cover'
                                alt='Who We Are'
                                priority
                            />
                        </div>
                        <div className='md:col-span-7 md:pl-0 lg:pl-10'>
                            <p className="text-sm text-white uppercase bg-orange-500 rounded-full w-max py-2 px-6 mb-4">
                                who we are
                            </p>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold capitalize mb-4 leading-12'>
                                Best <span className='text-[#38A0A7]'>Nephrology & Urology</span><br />PCD franchise Healthcare
                            </h2>
                            <p className="text-sm md:text-[16px] font-medium text-white leading-[1.8rem] lg:mb-12">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s . only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Whoweare