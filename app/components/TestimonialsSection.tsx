"use client";

import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner, Eaton Fire',
      quote: 'After losing our home in the Eaton fire, we were devastated and had no idea how to navigate our insurance claim. Michael and his team guided us through every step, and we received a settlement far beyond what the insurance company initially offered.',
    },
    {
      id: 2,
      name: 'David Martinez',
      role: 'Restaurant Owner, Alta Dena',
      quote: 'When my restaurant was damaged in the Alta Dena fire, I thought my business was finished. Jim Dicks helped me recover not just property damages but also lost income. Their expertise in business loss claims was invaluable.',
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Landscaper, Palisades',
      quote: 'I suffered severe burns while working near the Palisades fire. LA Fire Recovery Law fought for my rights and secured compensation for my medical bills, lost wages, and pain and suffering. I couldn\'t have gotten through this without them.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-medium tracking-wide uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Success Stories</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto opacity-70 mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from real clients who have successfully recovered from fire-related losses with our help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className={`relative bg-white rounded-xl shadow-xl overflow-hidden transition-opacity duration-500 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}
          >
            <div className="p-12 md:p-16">
              <div className="text-primary-500 mb-6">
                <FaQuoteLeft className="h-12 w-12 opacity-20" />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-10 font-light leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center mt-auto">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl mr-4">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-primary-600 font-medium">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-primary-600' 
                      : 'w-2.5 bg-gray-300 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/90 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors shadow-md"
                aria-label="Previous testimonial"
                disabled={isAnimating}
              >
                <FaChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/90 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors shadow-md"
                aria-label="Next testimonial"
                disabled={isAnimating}
              >
                <FaChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 