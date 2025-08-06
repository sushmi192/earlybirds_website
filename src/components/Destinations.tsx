import React from 'react';
import { MapPin, Star } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      country: "UAE",
      cities: [
        {
          name: "Dubai",
          image: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlights: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari"]
        },
        {
          name: "Abu Dhabi",
          image: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlights: ["Sheikh Zayed Mosque", "Louvre Abu Dhabi", "Ferrari World", "Yas Island"]
        },
        {
          name: "Sharjah",
          image: "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlights: ["Al Noor Mosque", "Sharjah Art Museum", "Blue Souk", "Al Majaz Waterfront"]
        }
      ]
    },
    {
      country: "India",
      cities: [
        {
          name: "Kerala",
          image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlights: ["Backwaters", "Hill Stations", "Spice Gardens", "Ayurveda Centers"]
        },
        {
          name: "Goa",
          image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlights: ["Beautiful Beaches", "Portuguese Architecture", "Water Sports", "Nightlife"]
        },
        {
          name: "Rajasthan",
          image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800",
          highlights: ["Palaces", "Desert Safari", "Cultural Heritage", "Traditional Crafts"]
        }
      ]
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Popular Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most beautiful and culturally rich destinations in UAE and India
          </p>
        </div>

        {destinations.map((destination, countryIndex) => (
          <div key={countryIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">{destination.country}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destination.cities.map((city, cityIndex) => (
                <div key={cityIndex} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative h-64">
                    <img 
                      src={city.image} 
                      alt={city.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-semibold">{city.name}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">{city.name}</h4>
                    <div className="space-y-2">
                      {city.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                      Explore {city.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;