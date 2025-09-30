"use client"

import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';


type ContactFormValues = {
  name: string
  email: string
  contact: string
  city: string
  message: string
  drugLicense: "yes" | "no"
  gstNo: "yes" | "no"
}

interface ContactFormProps {
  downloadOnSuccess?: boolean; // ✅ optional flag
}

const ContactForm: React.FC<ContactFormProps> = ({ downloadOnSuccess = false }) => {

  const [response, setResponse] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha(); // 👈 use reCAPTCHA

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      city: "",
      message: "",
      drugLicense: "no",
      gstNo: "no",
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    setLoading(true); // Show loading state
    setResponse(null);
    try {
     
      if (!executeRecaptcha) {
        setResponse("reCAPTCHA not ready. Please try again.");
        return;
      }

      // 🔑 Get token from Google
      const token = await executeRecaptcha("contact_form");
      console.log(token);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.contact,
          city: values.city,
          message: values.message,
          drugLicense: values.drugLicense,
          gstNo: values.gstNo,
          recaptcha_token: token,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setResponse('Message sent successfully!');
        form.reset();

        setTimeout(() => {
          if (downloadOnSuccess) {
            // Trigger PDF download
            const link = document.createElement("a");
            link.href = "/pdf/NEPHROLOGY-&-UROLOGY-GLOSSARY.pdf";
            link.download = "NEPHROLOGY-&-UROLOGY-GLOSSARY.pdf";
            link.click();
          }

          // Redirect in both cases
          window.location.href = "/thank-you";
        }, 2000);

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
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 custom-grid-cols">
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
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 custom-grid-cols">
        <div className="space-y-2">
          {/* <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
            Contact Number
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
            City
          </label> */}
          <Controller
            control={form.control}
            name="city"
            rules={{
              required: "City is required",
              minLength: {
                value: 2,
                message: "City must be at least 2 characters",
              },
            }}
            render={({ field }) => (
              <input
                id="city"
                type="text"
                placeholder="Your city"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all text-gray-700"
                {...field}
              />
            )}
          />
          {form.formState.errors.city && (
            <p className="text-red-500 text-sm">{form.formState.errors.city.message}</p>
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
          rules={{
            required: "Message is required",
            minLength: {
              value: 3,
              message: "Message must be at least 3 characters",
            },
          }}
          render={({ field }) => (
            <textarea
              id="message"
              placeholder="Message"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Do you have Drug License?</label>
          <Controller
            control={form.control}
            name="drugLicense"
            rules={{
              required: "Please select an option",
            }}
            render={({ field }) => (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    id="drug-license-yes"
                    type="radio"
                    value="yes"
                    checked={field.value === "yes"}
                    onChange={field.onChange}
                    className="h-4 w-4 text-canbroTeal focus:ring-canbroTeal border-gray-300"
                  />
                  <label htmlFor="drug-license-yes" className="text-sm text-gray-700">
                    Yes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="drug-license-no"
                    type="radio"
                    value="no"
                    checked={field.value === "no"}
                    onChange={field.onChange}
                    className="h-4 w-4 text-canbroTeal focus:ring-canbroTeal border-gray-300"
                  />
                  <label htmlFor="drug-license-no" className="text-sm text-gray-700">
                    No
                  </label>
                </div>
              </div>
            )}
          />
          {form.formState.errors.drugLicense && (
            <p className="text-red-500 text-sm">{form.formState.errors.drugLicense.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Do you have GST No.?</label>
          <Controller
            control={form.control}
            name="gstNo"
            rules={{
              required: "Please select an option",
            }}
            render={({ field }) => (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    id="gst-yes"
                    type="radio"
                    value="yes"
                    checked={field.value === "yes"}
                    onChange={field.onChange}
                    className="h-4 w-4 text-canbroTeal focus:ring-canbroTeal border-gray-300"
                  />
                  <label htmlFor="gst-yes" className="text-sm text-gray-700">
                    Yes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="gst-no"
                    type="radio"
                    value="no"
                    checked={field.value === "no"}
                    onChange={field.onChange}
                    className="h-4 w-4 text-canbroTeal focus:ring-canbroTeal border-gray-300"
                  />
                  <label htmlFor="gst-no" className="text-sm text-gray-700">
                    No
                  </label>
                </div>
              </div>
            )}
          />
          {form.formState.errors.gstNo && (
            <p className="text-red-500 text-sm">{form.formState.errors.gstNo.message}</p>
          )}
        </div>
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
  )
}

export default ContactForm