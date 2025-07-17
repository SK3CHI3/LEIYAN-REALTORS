
import { useState, useEffect } from 'react';
import { Shield, Zap, Wifi, Car, Droplets, Phone, Building, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectHighlights = () => {
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

    const element = document.getElementById('highlights');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Car,
      title: "Easy Access",
      description: "All cabro paved road from Nairobi-Mombasa Highway to the premise",
      color: "text-amber-600"
    },
    {
      icon: Droplets,
      title: "Permanent Water Supply",
      description: "Borehole on site in addition to County supplies",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Stable Electricity",
      description: "Reliable electricity supply with standby generator",
      color: "text-yellow-600"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round the clock security patrol for peace of mind",
      color: "text-green-600"
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "24 hour bandwidth internet connection and cable TV",
      color: "text-purple-600"
    },
    {
      icon: Phone,
      title: "Telephone Service",
      description: "Telephone service line and distribution through duct cabling",
      color: "text-red-600"
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-amber-900 mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Premium Amenities
          </h2>
          <p className={`text-xl text-amber-700 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Modern facilities and services designed to provide the ultimate commercial experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 border-amber-200 hover:border-amber-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 transition-all duration-300">
                <div className="mb-6">
                  <highlight.icon className={`w-12 h-12 mx-auto ${highlight.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-4 group-hover:text-amber-800 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-amber-700 leading-relaxed group-hover:text-amber-600 transition-colors">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Building className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">10,000</h3>
              <p className="text-amber-100">Total Planned Units</p>
            </div>
            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">50,000+</h3>
              <p className="text-amber-100">Projected Population Density</p>
            </div>
            <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">2024</h3>
              <p className="text-amber-100">Operational Since April</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
