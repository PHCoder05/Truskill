'use client'
import React from 'react';
import { Linkedin, Instagram, Twitter, Youtube, GraduationCap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-emerald-500 mb-4">
              <GraduationCap size={32} />
              <span className="text-xl font-semibold">TruSkill</span>
            </div>
            <p className="text-sm mb-4">© {currentYear} Truskill Academy</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Courses Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Soft Skills</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Aptitude Content</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Courses</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Truskill Placements</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Truskill Reviews</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;