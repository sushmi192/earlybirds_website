import React from 'react';
import { MapPin, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Magic of
            <span className="block text-yellow-300">UAE & India</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Your trusted travel partner for unforgettable journeys across two incredible destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105">
              Plan Your Journey
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all">
              View Packages
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-3xl font-bold mb-2">5000+</h3>
              <p className="text-blue-200">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-blue-200">Destinations</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-blue-200">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;