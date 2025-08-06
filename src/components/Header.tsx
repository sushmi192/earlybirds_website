import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/Early Birds Logo.png" 
              alt="Early Birds" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Early Birds</h1>
              <p className="text-sm text-blue-600">UAE & India Travel Specialists</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-blue-900 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="text-blue-900 hover:text-blue-600 transition-colors">Services</a>
            <a href="#destinations" className="text-blue-900 hover:text-blue-600 transition-colors">Destinations</a>
            <a href="#about" className="text-blue-900 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-blue-900 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-blue-900">
              <Phone className="w-4 h-4" />
              <span className="text-sm">504321593</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-900">
              <Mail className="w-4 h-4" />
              <span className="text-sm">sushmithajps@gmail.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-blue-900 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-blue-900 hover:text-blue-600 transition-colors">Services</a>
              <a href="#destinations" className="text-blue-900 hover:text-blue-600 transition-colors">Destinations</a>
              <a href="#about" className="text-blue-900 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-blue-900 hover:text-blue-600 transition-colors">Contact</a>
              <div className="pt-4 border-t border-blue-100">
                <div className="flex items-center space-x-2 text-blue-900 mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">504321593</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-900">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">sushmithajps@gmail.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;