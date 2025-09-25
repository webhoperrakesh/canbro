import { PiPhoneCallFill } from "react-icons/pi";
import { IoMailSharp } from "react-icons/io5";
import { RiMapPin2Fill } from "react-icons/ri";
import Link from "next/link";
import ContactForm from "../ContactForm";
import getIconComponent from "@/utils/getIconComponent";

const [contactInfo, socialLinks] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`, {
        next: { revalidate: 600 },
    }).then((res) => res.json()),

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/menus/social`, {
        next: { revalidate: 600 },
    }).then((res) => res.json()),
]);

const cssColor: any = {
    0: 'bg-blue-600',
    1: 'bg-blue-700',
    2: 'bg-red-500',
    3: 'bg-black',
    4: 'bg-red-500',
    5: 'bg-pink-500',
}


const EnquirySection = () => {
    return (
        <section className='bg-[#38A0A7] lg:mb-35' id='who-we-are' >
            <div className='container mx-auto px-4 pt-16 md:pt-25 pb-16 md:pb-16'>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">

                    {/* Left Side - Company Information */}
                    <div className="lg:w-1/2 text-white">
                        <div className="mb-8">
                            <h1 className="text-2xl lg:text-[28px] font-semibold mb-4 leading-tight">
                                For Pharma Solutions, Support & Business Enquiries
                            </h1>
                            <p className="text-sm lg:text-[16px] leading-relaxed">
                                We're here to answer your queries related to contract manufacturing,
                                formulations, and product availability. Reach out to us for detailed
                                information, pricing, or partnership opportunities.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4 mb-8 flex gap-[12px] flex-col">

                            {contactInfo.settings.phone_2 &&
                            <div className="flex items-center gap-3">
                                <PiPhoneCallFill className="w-8 h-8 flex-shrink-0" />
                                <div className="text-sm lg:text-[16px]">
                                    <div>
                                        <Link href={`tel:${contactInfo?.settings?.phone_2.split(',')[0].replace(/-/g, "")}`}>{contactInfo?.settings?.phone_2.split(',')[0]}</Link>,{' '}
                                        <Link href={`tel:${contactInfo?.settings?.phone_2.split(',')[1].replace(/-/g, "")}`}>{contactInfo?.settings?.phone_2.split(',')[1]}</Link>
                                    </div>
                                </div>
                            </div>
                            }

                            {(contactInfo.settings.contact_email || contactInfo.settings.contact_email_2) && (
                                <div className="flex items-center gap-3">
                                    <IoMailSharp className="w-8 h-8 flex-shrink-0" />
                                    <div className="text-sm lg:text-[16px]">
                                        <div>
                                            <Link href={`mailto:${contactInfo.settings.contact_email}`}>
                                                {contactInfo.settings.contact_email}
                                            </Link>,{' '}
                                            <Link href={`mailto:${contactInfo.settings.contact_email_2}`}>
                                                {contactInfo.settings.contact_email_2}
                                            </Link> 
                                        </div>
                                    </div>
                                </div>
                            )}

                            {contactInfo.settings.address && (
                                <div className="flex items-center gap-3">
                                    <RiMapPin2Fill className="w-8 h-8 flex-shrink-0" />
                                    <div className="text-sm lg:text-[16px]">
                                        <div>{contactInfo.settings.address}</div>
                                    </div>
                                </div>
                            )}

                           {contactInfo.settings.phone && (
                            <div className="flex items-center gap-3">
                                <RiMapPin2Fill className="w-8 h-8 flex-shrink-0" />
                                <div className="text-sm lg:text-[16px] flex gap-[8px]">
                                    <div className="font-semibold">PCD Pharma Franchise :</div>
                                    <div>
                                        <Link href={`tel:${contactInfo?.settings?.phone.split(',')[0].replace(/-/g, "")}`}>{contactInfo?.settings?.phone.split(',')[0]}</Link>,{' '}
                                        <Link href={`tel:${contactInfo?.settings?.phone.split(',')[1].replace(/-/g, "")}`}>{contactInfo?.settings?.phone.split(',')[1]}</Link>
                                    </div>
                                </div>
                            </div>
                           )}

                        </div>

                        {/* Social Media */}
                        {socialLinks.items.length > 0 &&
                            <div className="pl-[44px]">
                                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                                <div className="flex gap-3">

                                    {socialLinks.items.map((item: any, index: number) => {
                                        const Icon = getIconComponent(item.icon);
                                        const itemCssClass = cssColor[index] || 'bg-gray-500';
                                        return (
                                            <Link
                                                key={index}
                                                href={item.url}
                                                target="_blank"
                                                className={`w-10 h-10 text-white ${itemCssClass} rounded-full flex items-center justify-center transition-colors cursor-pointer`}
                                            >
                                                {Icon && (
                                                    <span className="text-white">
                                                        <Icon size={20} />
                                                    </span>
                                                )}
                                            </Link>
                                        );
                                    })}

                                </div>
                            </div>
                        }

                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="lg:w-1/2 lg:relative">
                        <div className="relatine w-full lg:absolute">

                            {/* Orange Tab */}
                            <div className="bg-white rounded-2xl relative shadow-2xl p-6 lg:p-8">
                                <div className="mb-6">
                                    <div className="hidden lg:block absolute -left-[5.5rem] lg:-left-[8.12rem] top-30 -rotate-90 bg-orange-500 text-white px-10 py-3 rounded-t-3xl">
                                        <div className="text-xs lg:text-[18px] font-semibold uppercase">ENQUIRY FORM</div>
                                    </div>
                                    <div className="pt-4">
                                        <h2 className="text-xl lg:text-[26px] font-bold text-[#EF7F1B] mb-2">
                                            Get Enquiry About PCD Pharma
                                        </h2>
                                        <p className="text-[#3C3C3C] text-sm lg:text-[16px]">
                                            We Would like to hear from you
                                        </p>
                                    </div>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EnquirySection