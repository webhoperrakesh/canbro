"use client"
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form"
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type EnquiryFormValues = {
    name: string
    email: string
    contact: string
    subject: string
    message: string
}

type SubjectProps = {
    subject: string;
}

const SendEnquiry = ({ subject }: SubjectProps) => {
    const [showform, setShowForm] = useState(false);
    const [response, setResponse] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(false);

    const form = useForm<EnquiryFormValues>({
        defaultValues: {
            name: "",
            email: "",
            contact: "",
            subject: "",
            message: ""
        },
    })

    // Set subject when form is opened
    useEffect(() => {
        if (showform) {
            form.setValue('subject', `Enquiry About ${subject}`);
        }
    }, [showform, form, subject]);

    const onSubmit = async (values: EnquiryFormValues) => {
        setLoading(true); // Show loading state
        setResponse(null);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/inquiry`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    phone: values.contact,
                    subject: values.subject,
                    message: values.message || '',
                }),
            });

            const result = await res.json();

            if (res.ok) {
                setResponse('Message sent successfully!');
                form.reset();
                setTimeout(() => {
                  setShowForm(false);
                  setResponse(null);
                },2000)
            } else {
                setResponse(result.message || 'Submission failed');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setResponse('An error occurred. Please try again.');
        }
        finally {
            setLoading(false); // Reset loading state
        }
    }

    return (
        <>
            {showform &&
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50">
                    <div className="relative bg-white w-full max-w-xl p-6 rounded-lg shadow-lg">
                        <IoMdClose size={30} color='gray-700'
                            className='absolute right-4 top-2 z-10 hover:cursor-pointer'
                            onClick={() => {
                                setShowForm(false);
                                form.reset(); // This properly resets all form fields
                            }}
                        />
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                <div className="space-y-2">
                                    {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label> */}
                                    <Controller
                                        control={form.control}
                                        name="name"
                                        rules={{
                                            required: "Name is required",
                                            minLength: {
                                                value: 2,
                                                message: "Name must be at least 2 characters",
                                            },
                                        }}
                                        render={({ field }) => (
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all text-gray-700"
                                                {...field}
                                            />
                                        )}
                                    />
                                    {form.formState.errors.name && (
                                        <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label> */}
                                    <Controller
                                        control={form.control}
                                        name="email"
                                        rules={{
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address",
                                            },
                                        }}
                                        render={({ field }) => (
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="Email address"
                                                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all text-gray-700"
                                                {...field}
                                            />
                                        )}
                                    />
                                    {form.formState.errors.email && (
                                        <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                <div className="space-y-2">
                                    {/* <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label> */}
                                    <Controller
                                        control={form.control}
                                        name="contact"
                                        rules={{
                                            required: "Phone number is required",
                                            minLength: {
                                                value: 10,
                                                message: "Contact number must be at least 10 digits",
                                            },
                                            pattern: {
                                                value: /^[0-9+\-\s()]+$/,
                                                message: "Invalid contact number format",
                                            },
                                        }}
                                        render={({ field }) => (
                                            <input
                                                id="contact"
                                                type="tel"
                                                placeholder="Phone number"
                                                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all text-gray-700"
                                                {...field}
                                            />
                                        )}
                                    />
                                    {form.formState.errors.contact && (
                                        <p className="text-red-500 text-sm">{form.formState.errors.contact.message}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    {/* <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        Subject
                                    </label> */}
                                    <Controller
                                        control={form.control}
                                        name="subject"
                                        rules={{
                                            required: "Subject is required",
                                            minLength: {
                                                value: 2,
                                                message: "Subject must be at least 2 characters",
                                            },
                                        }}
                                        render={({ field }) => (
                                            <input
                                                id="subject"
                                                type="text"
                                                placeholder="Enter subject"
                                                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all text-gray-700"
                                                {...field}
                                            />
                                        )}
                                    />
                                    {form.formState.errors.subject && (
                                        <p className="text-red-500 text-sm">{form.formState.errors.subject.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                {/* <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label> */}
                                <Controller
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <textarea
                                            id="message"
                                            placeholder="Enter your message"
                                            rows={3}
                                            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all text-gray-700 resize-vertical"
                                            {...field}
                                        />
                                    )}
                                />
                                {form.formState.errors.message && (
                                    <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'} text-white font-semibold px-10 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:cursor-pointer`}
                            >
                                {loading ? 'Please wait...' : 'Submit'}
                                <FaArrowRight className="" />
                            </button>
                            {response && <p className="mt-4">{response}</p>}
                        </form>
                    </div>

                </div>
            }

            <button className="text-blue-500 hover:underline hover:cursor-pointer text-sm md:text-[16px]" onClick={() => window.history.back()}>
                ← Back
            </button>

            <button
                onClick={() => setShowForm(true)}
                className="inline-block text-sm md:text-[16px] bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-3 transition-all duration-300 hover:scale-105 hover:cursor-pointer">
                Send An Enquiry
            </button>
        </>
    )
}

export default SendEnquiry