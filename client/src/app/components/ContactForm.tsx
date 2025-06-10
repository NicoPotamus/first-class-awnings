"use client";

import { FormEvent, useState } from 'react';

import { sendContactFormMessage } from './mailer';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendContactFormMessage(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name Field */}
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="peer w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-transparent focus:border-blue-500 focus:outline-none text-gray-900"
            placeholder="Name"
          />
          <label
            htmlFor="name"
            className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Name *
          </label>
        </div>

        {/* Phone Field */}
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="peer w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-transparent focus:border-blue-500 focus:outline-none text-gray-900"
            placeholder="Phone"
          />
          <label
            htmlFor="phone"
            className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Phone Number *
          </label>
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="peer w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-transparent focus:border-blue-500 focus:outline-none text-gray-900"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Email *
          </label>
        </div>

        {/* Address Field */}
        <div className="relative">
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="peer w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-transparent focus:border-blue-500 focus:outline-none text-gray-900"
            placeholder="Address"
          />
          <label
            htmlFor="address"
            className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Address *
          </label>
        </div>

        {/* City Field */}
        <div className="relative">
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="peer w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-transparent focus:border-blue-500 focus:outline-none text-gray-900"
            placeholder="City"
          />
          <label
            htmlFor="city"
            className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
          >
            City *
          </label>
        </div>

        {/* Zip Field */}
        <div className="relative">
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
            className="peer w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-transparent focus:border-blue-500 focus:outline-none text-gray-900"
            placeholder="ZIP"
          />
          <label
            htmlFor="zip"
            className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
          >
            ZIP Code *
          </label>
        </div>
      </div>

      {/* Message Field */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="peer w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-transparent focus:border-blue-500 focus:outline-none text-gray-900"
          placeholder="Message"
        ></textarea>
        <label
          htmlFor="message"
          className="absolute -top-2.5 left-4 bg-white px-1 text-sm text-gray-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Message *
        </label>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Message sent successfully! We&apos;ll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">
                Failed to send message. Please try again or contact us directly.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="text-right">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`rounded-md px-8 py-3 font-medium text-white transition-colors ${
            isSubmitting 
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
