// src/components/kys/kys6.js
import React from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Amol Singh',
    role: 'Product Manager - Intuit',
    content: 'Being a successful PM needs a wide variety of skills and its incredibly difficult to assess yourself on these skills. Know Your Self Test solves this problem. You can use this to test yourself on core skills needed to be a great Product Manager.',
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Deeptanshu Baranwal',
    role: 'Director of Product Management - PharmEasy',
    content: 'Self-awareness is step one of building a great PM career. You can start by taking the Know Your Self Self test if you are someone who wants to get into a PM role, for understanding your own strengths, and upskill yourself in the right areas.',
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Vaibhav Tomar',
    role: 'Associate Product Manager - PhonePe',
    content: 'There was no scientific way to figure out if product management was the right fit for me, until I stumbled upon the Know Your Self test by Upraised.',
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Mohammad Sarosh',
    role: 'Product Manager',
    content: "The KYS Test doesn't test for theory but instead gives you mini-cases to solve, that mimic the day-to-day job of a PM. From making the right strategic choices given a situation to deducing the right inferences given a set of data points, the questions are well-rounded to test the different aspects of being a PM.",
    avatar: '/api/placeholder/40/40'
  }
]

export default function KYS6() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="text-[#0B5E41] font-bold text-sm mb-3">
          Hear From Everyone
        </div>
        <h1 className="text-[32px] leading-tight font-semibold">
          More than <span className="text-[#0B5E41]">30,000 Students</span>
          <br />
          assessed their true potential
        </h1>
      </div>

      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 rounded-xl p-6 relative min-h-[280px] flex flex-col"
          >
            {/* Quote mark */}
            <div className="absolute left-0 top-6 text-gray-200">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor">
                <path d="M31.087 0C29.13 7.668 28.151 15.42 28.151 23.256H19.695C19.776 14.332 21.864 6.996 25.959 1.248L31.087 0ZM11.471 0C9.514 7.668 8.535 15.42 8.535 23.256H0.079C0.16 14.332 2.248 6.996 6.343 1.248L11.471 0Z"/>
              </svg>
            </div>

            {/* Content */}
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              {testimonial.content}
            </p>

            {/* Author - pushed to bottom */}
            <div className="mt-auto flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-sm">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 text-xs mt-0.5">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}