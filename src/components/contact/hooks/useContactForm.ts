import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface SubmitStatus {
  type: 'success' | 'error';
  message: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbz7MLOpSL63oKE2g3-NmpFGKOOmVY96Gmjyw9Xmv7BiG1ycyf3a-iWEcwKV_Cky_bBB/exec', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for reaching out! We\'ll get back to you soon.'
      });

      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitStatus
  };
}