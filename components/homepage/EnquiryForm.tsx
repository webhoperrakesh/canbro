"use client"

import { useForm } from "react-hook-form"
import { FaArrowRight } from "react-icons/fa";

const EnquiryForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        }
    });

    const onSubmit = (data: any) => {
        console.log('Form submitted:', data);
    };

    return (
        <div className="bg-white rounded-2xl relative shadow-2xl p-6 lg:p-8">
            {/* Orange Tab */}
            <div className="mb-6">
                <div className="hidden lg:block absolute -left-[5.5rem] lg:-left-[7.09rem] top-25 -rotate-90 bg-orange-500 text-white px-6 py-3 rounded-t-2xl">
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

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register("firstName", {
                            required: "First name is required",
                            minLength: {
                                value: 2,
                                message: "First name must be at least 2 characters"
                            }
                        })}
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all text-gray-700"
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Last Name"
                        {...register("lastName", {
                            required: "Last name is required",
                            minLength: {
                                value: 2,
                                message: "Last name must be at least 2 characters"
                            }
                        })}
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all text-gray-700"
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all text-gray-700"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9+\-\s()]+$/,
                                message: "Invalid phone number format"
                            },
                            minLength: {
                                value: 10,
                                message: "Phone number must be at least 10 digits"
                            }
                        })}
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all text-gray-700"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                </div>

                <div>
                    <textarea
                        placeholder="Message"
                        rows={4}
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 10,
                                message: "Message must be at least 10 characters"
                            },
                            maxLength: {
                                value: 500,
                                message: "Message cannot exceed 500 characters"
                            }
                        })}
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all resize-none text-gray-700"
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-3 rounded-full flex items-center justify-center gap-2 mt-6 transition-all duration-300 hover:scale-105 hover:cursor-pointer"
                >
                    Submit
                   <FaArrowRight className="" />
                </button>
            </form>
        </div>
    )
}

export default EnquiryForm