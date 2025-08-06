import React from 'react';
import { Plane, Hotel, Car, Camera, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-12 h-12 text-blue-600" />,
      title: "Flight Bookings",
      description: "Best deals on international and domestic flights to UAE and India"
    },
    {
      icon: <Hotel className="w-12 h-12 text-blue-600" />,
      title: "Hotel Reservations",
      description: "Luxury to budget accommodations in prime locations"
    },
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Transportation",
      description: "Airport transfers, car rentals, and guided tours"
    },
    {
      icon: <Camera className="w-12 h-12 text-blue-600" />,
      title: "Tour Packages",
      description: "Customized tour packages for families, couples, and groups"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance for peace of mind"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support during your travels"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive travel services to make your journey seamless and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;