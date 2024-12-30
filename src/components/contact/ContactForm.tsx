import React from 'react';
import { useContactForm } from './hooks/useContactForm';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';

export function ContactForm() {
  const { formData, handleChange, handleSubmit, isSubmitting, submitStatus } = useContactForm();

  return (
    <div className="bg-white rounded-xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <h3 className="text-2xl font-semibold text-black mb-6">Send us a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <FormInput
          label="Name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
        />
        
        <FormTextarea
          label="Message"
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <p className="text-sm text-gray-400">
          We respect your privacy. Your information will only be used to respond to your inquiry.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00B5E2] text-white rounded-full py-3 px-8
            hover:bg-[#0095BD] transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus && (
          <div className={`p-4 rounded-lg text-center ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 text-green-800' 
              : 'bg-red-50 text-red-800'
          }`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}