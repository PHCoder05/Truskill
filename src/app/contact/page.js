'use client'
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[1-9]\d{9,11}$/.test(formData.phone.replace(/\s+/g, ''))) 
      newErrors.phone = 'Please enter a valid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const InputField = ({ label, name, type = 'text', placeholder, error }) => (
    <div>
      <label className="block text-sm mb-1 text-gray-600" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-200'} 
          rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300
          transition-colors ${loading ? 'bg-gray-50' : 'bg-white'}`}
        disabled={loading}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-normal mb-3">Contact us</h1>
        <p className="text-lg text-gray-600">"Feel Free to Reach Out and Connect with Us"</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Thank you for reaching out!</h3>
              <p className="text-gray-600 mb-6">We'll get back to you as soon as possible.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="First Name"
                  name="firstName"
                  placeholder="Enter your First Name"
                  error={errors.firstName}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  placeholder="Enter your Last Name"
                  error={errors.lastName}
                />
              </div>

              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your Email Address"
                error={errors.email}
              />

              <InputField
                label="Phone no"
                name="phone"
                type="tel"
                placeholder="+91"
                error={errors.phone}
              />

              <div>
                <label className="block text-sm mb-1 text-gray-600">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Leave us a Message..."
                  className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-200'} 
                    rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-100 
                    focus:border-blue-300 transition-colors ${loading ? 'bg-gray-50' : 'bg-white'}`}
                  disabled={loading}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button 
                type="submit"
                disabled={loading}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-md text-white
                  ${loading ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'} 
                  transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                  flex items-center justify-center`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium mb-4">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                <Phone className="w-5 h-5" />
                <a href="tel:+919082574346" className="hover:underline">+91 9082574346</a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@truskill.in" className="hover:underline">info@truskill.in</a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>Andheri, Mumbai.</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <blockquote className="text-gray-600 italic text-lg">
              "Being a student is easy. Learning requires actual work."
            </blockquote>
            <p className="text-sm text-gray-500 mt-3">- William Crawford</p>
          </div>
        </div>
      </div>
    </div>
  );
}