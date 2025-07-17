
import { useState, useEffect } from 'react';
import { MapPin, Navigation, School, Home, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LocationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('location');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const locationFeatures = [
    {
      icon: Building2,
      title: "Great Wall Gardens",
      description: "4,000 built apartments with 6,000 additional units under construction",
      highlight: "Prime Location"
    },
    {
      icon: School,
      title: "Educational Facilities",
      description: "Walking distance to Kitengela International Schools and Nova Pioneer Athi River",
      highlight: "Family Friendly"
    },
    {
      icon: Home,
      title: "Residential Estates",
      description: "Surrounded by Wema Villas, River Park Estate, Paradise Park, and more",
      highlight: "Growing Community"
    },
    {
      icon: Navigation,
      title: "Strategic Access",
      description: "Direct access from Nairobi-Mombasa Highway with improved connectivity",
      highlight: "Easy Commute"
    }
  ];

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-amber-900 mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Prime Location
          </h2>
          <p className={`text-xl text-amber-700 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Strategically positioned in Mavoko Township, one of Kenya's fastest-growing municipalities
          </p>
        </div>

        {/* GPS Coordinates */}
        <div className={`text-center mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-semibold">
            <MapPin className="w-5 h-5" />
            <span>GPS: -1.424788°S, 36.978631°E | Altitude: 1544m</span>
          </div>
        </div>

        {/* Location Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {locationFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 border-amber-200 hover:border-amber-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 hover:bg-gradient-to-br hover:from-white hover:to-amber-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-12 h-12 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-amber-900 group-hover:text-amber-800 transition-colors">
                        {feature.title}
                      </h3>
                      <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-amber-700 leading-relaxed group-hover:text-amber-600 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Population Growth Stats */}
        <div className={`bg-gradient-to-r from-amber-800 to-amber-900 rounded-2xl p-8 md:p-12 text-white transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Mavoko Municipality Growth</h3>
            <p className="text-amber-100 text-lg">One of Kenya's fastest-growing municipalities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold mb-2">322,499</h4>
              <p className="text-amber-200">2019 Population</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">593,182</h4>
              <p className="text-amber-200">2030 Projection</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">379</h4>
              <p className="text-amber-200">Persons per km²</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
