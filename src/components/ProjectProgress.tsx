
import { useState, useEffect } from 'react';
import { CheckCircle, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectProgress = () => {
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

    const element = document.getElementById('progress');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const progressItems = [
    "Sub Structure - Excavation",
    "Sub Structure - Concrete Work",
    "Sub Structure - Sawn Formwork",
    "Sub Structure - Expansion Joint",
    "Sub Structure - Walling",
    "Super Structure - Reinforced Concrete Frame",
    "Staircase and Ramps",
    "Walling",
    "Roofing and Rainwater Disposal",
    "Doors and Windows",
    "Fittings",
    "Finishes"
  ];

  const testimonials = [
    {
      name: "Sarah Mwangi",
      business: "Equity Afya Branch Manager",
      rating: 5,
      review: "Leiyan Mall provides the perfect location for our medical services. The foot traffic is excellent and the facilities are top-notch. Our patients love the convenient location."
    },
    {
      name: "James Kiprotich",
      business: "Jaza Supermarket Owner",
      rating: 5,
      review: "The strategic location at the heart of Great Wall Gardens has been incredible for our business. The constant flow of residents makes this the ideal spot for retail."
    },
    {
      name: "Mary Wanjiku",
      business: "One Wash Laundry Services",
      rating: 5,
      review: "Leiyan Realtors delivered exactly what they promised. Professional management, excellent security, and a thriving business environment. Highly recommended!"
    },
    {
      name: "David Ochieng",
      business: "Jajemelo Limited",
      rating: 5,
      review: "The modern fittings and reliable utilities make operations smooth. The management is responsive and the location brings in customers from all the surrounding estates."
    },
    {
      name: "Grace Mutua",
      business: "Pharmacy Owner",
      rating: 5,
      review: "Perfect location for healthcare services. The high population density and young families in the area create consistent demand for our services."
    },
    {
      name: "Peter Kamau",
      business: "M-Pesa Outlet",
      rating: 5,
      review: "The 24/7 security and reliable electricity are crucial for our financial services. Leiyan Mall is professionally managed and customer-focused."
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <section id="progress" className="py-12 md:py-20 bg-gradient-to-br from-white to-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4 md:mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Project Complete
          </h2>
          <p className={`text-lg md:text-xl text-amber-700 max-w-3xl mx-auto px-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Leiyan Mall is 100% complete and operational since April 2024
          </p>
        </div>

        {/* Completion Status */}
        <div className={`text-center mb-8 md:mb-12 px-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 md:gap-3 bg-green-100 text-green-800 px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
            <span>100% COMPLETE</span>
          </div>
          <p className="text-amber-700 mt-3 md:mt-4 text-base md:text-lg">Operational since April 2024</p>
        </div>

        {/* Progress Checklist */}
        <div className="mb-12 md:mb-16">
          <h3 className={`text-xl md:text-2xl font-bold text-amber-900 mb-6 md:mb-8 text-center px-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Construction Phases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 px-4">
            {progressItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-3 p-3 md:p-4 bg-white rounded-lg border border-amber-200 hover:shadow-md transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                <span className="text-amber-800 font-medium text-sm md:text-base">{item}</span>
                <span className="ml-auto text-green-600 font-bold text-xs md:text-sm">100%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="px-4">
          <h3 className={`text-2xl md:text-3xl font-bold text-amber-900 mb-6 md:mb-8 text-center transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`border-amber-200 hover:shadow-xl transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="w-6 h-6 md:w-8 md:h-8 text-amber-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <StarRating rating={testimonial.rating} />
                      <p className="text-amber-800 mt-2 md:mt-3 text-sm md:text-base leading-relaxed">
                        "{testimonial.review}"
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-amber-100 pt-3 md:pt-4">
                    <p className="font-bold text-amber-900 text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-amber-700 text-xs md:text-sm mt-1">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectProgress;
