import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "15+ Years Experience",
      description: "Trusted travel partner with extensive experience in UAE and India tourism"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Team",
      description: "Professional travel consultants who understand your needs"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Network",
      description: "Strong partnerships with hotels, airlines, and local operators"
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Customer First",
      description: "Your satisfaction is our priority, with 24/7 support"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About Early Birds</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in the travel industry, Early Birds has been the trusted choice for travelers seeking authentic experiences in UAE and India. We specialize in creating personalized journeys that showcase the rich culture, stunning landscapes, and warm hospitality of these incredible destinations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced travel consultants works closely with you to design the perfect itinerary, whether you're planning a romantic getaway, family vacation, or business trip. We handle every detail so you can focus on creating memories that last a lifetime.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Travel Experience"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-2">5000+</h3>
              <p className="text-blue-100">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;