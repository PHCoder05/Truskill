'use client'
import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Experience the Difference', href: '/about' },
    { title: 'KYS', href: '/kys' },
    { title: 'Prepare', href: '/courses' },
    { title: 'Learn for free', href: '/resource' },
    { title: 'Apply for job', href: '/job' },
    { title: 'Contact us', href: '/contact' },
  ];

  return (
    <nav className="bg-white  fixed w-full top-0 z-50 font-poppins font-regular text-gray-800 px-4 py-2 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-semibold text-emerald-600">TruSkill</span>
              <span className="text-xs text-gray-500 mt-1">Academy</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              Dashboard
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors">
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
            >
              {link.title}
            </a>
          ))}
          <div className="mt-4 space-y-2">
            <button   className="w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              Dashboard
            </button>
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors">
              Log In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;