import EnquiryForm from "./EnquiryForm"
import { FaFacebookF, FaYoutube , FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMailSharp } from "react-icons/io5";
import { RiMapPin2Fill } from "react-icons/ri";


const socialIcons = [
    {
        icon: <FaFacebookF className="w-5 h-5" />,
        bgColor: "bg-blue-600",
        hoverColor: "hover:bg-blue-700",
    },
    {
        icon: <FaYoutube className="w-5 h-5" />,
        bgColor: "bg-red-500",
        hoverColor: "hover:bg-red-600",
    },
    {
        icon: <FaXTwitter className="w-5 h-5" />,
        bgColor: "bg-black",
        hoverColor: "hover:bg-gray-800",
    },
    {
        icon: <FaInstagram className="w-5 h-5" />,
        bgColor: "bg-pink-500",
        hoverColor: "hover:bg-pink-600",
    },
    {
        icon: <FaLinkedinIn className="w-5 h-5" />,
        bgColor: "bg-blue-700",
        hoverColor: "hover:bg-blue-800",
    },
];


const EnquirySection = () => {
    return (
        <section className='bg-[#38A0A7] lg:mb-22' id='who-we-are' >
            <div className='container mx-auto px-4 py-16 md:py-16'>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">

                    {/* Left Side - Company Information */}
                    <div className="lg:w-1/2 text-white">
                        <div className="mb-8">
                            <h1 className="text-2xl lg:text-[28px] font-semibold mb-4 leading-tight">
                                For Pharma Solutions, Support & Business Enquiries
                            </h1>
                            <p className="text-sm lg:text-base leading-relaxed">
                                We're here to answer your queries related to contract manufacturing,
                                formulations, and product availability. Reach out to us for detailed
                                information, pricing, or partnership opportunities.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <PiPhoneCallFill className="w-5 h-5 flex-shrink-0" />
                                <div className="text-sm">
                                    <div>+91 93001 12364, +91 99922 22158</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <IoMailSharp className="w-5 h-5 flex-shrink-0" />
                                <div className="text-sm">
                                    <div>contact@gmail.com, info@centralhealtcare.com</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <RiMapPin2Fill className="w-5 h-5 flex-shrink-0" />
                                <div className="text-sm">
                                    <div>NH1 Karnal-132001 State - Haryana Country - India</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <RiMapPin2Fill className="w-5 h-5 flex-shrink-0" />
                                <div className="text-sm">
                                    <div className="font-semibold">PCD Pharma Franchise :</div>
                                    <div>+91 9306012364, +91 9992222158</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="flex gap-3">
                                {socialIcons.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center ${item.hoverColor} transition-colors cursor-pointer`}
                                    >
                                        {item.icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="lg:w-1/2 lg:relative">
                       <div className="relatine w-full lg:absolute">
                        <EnquiryForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EnquirySection