import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/Early Birds Logo.png" 
                alt="Early Birds" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold">Early Birds</h3>
                <p className="text-blue-200">UAE & India Travel Specialists</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Your trusted travel partner for over 15 years, specializing in creating unforgettable experiences across UAE and India. We handle every detail so you can focus on making memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#destinations" className="text-blue-200 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-300 mt-1" />
                <div>
                  <p className="text-blue-100">504321593</p>
                  <p className="text-sm text-blue-300">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-300 mt-1" />
                <div>
                  <p className="text-blue-100">sushmithajps@gmail.com</p>
                  <p className="text-sm text-blue-300">Quick Response</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-1" />
                <div>
                  <p className="text-blue-100">UAE & India</p>
                  <p className="text-sm text-blue-300">Serving Both Destinations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 Early Birds. All rights reserved. | Crafted with ❤️ for amazing travels
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;