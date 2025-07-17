
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
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

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["0798 170 170", "0751 170 170"],
      color: "text-green-600",
      action: "tel"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["leiyanrealtorsltd@gmail.com"],
      color: "text-blue-600",
      action: "mailto"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Mavoko Township", "Machakos County", "67075, 00200"],
      color: "text-red-600",
      action: null
    },
    {
      icon: Clock,
      title: "Availability",
      details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 4PM"],
      color: "text-purple-600",
      action: null
    }
  ];

  const handleContactClick = (action: string | null, detail: string) => {
    if (action === "tel") {
      window.open(`tel:${detail.replace(/\s/g, '')}`, '_self');
    } else if (action === "mailto") {
      window.open(`mailto:${detail}`, '_self');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-amber-900 mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Get In Touch
          </h2>
          <p className={`text-xl text-amber-700 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Ready to explore premium commercial opportunities? Contact our team today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 border-amber-200 hover:border-amber-300 bg-white/80 backdrop-blur-sm transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center hover:bg-gradient-to-br hover:from-white hover:to-amber-50 transition-all duration-300">
                <div className="mb-4">
                  <info.icon className={`w-10 h-10 mx-auto ${info.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-3 group-hover:text-amber-800 transition-colors">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p 
                      key={idx} 
                      className={`text-amber-700 group-hover:text-amber-600 transition-colors ${
                        info.action ? 'cursor-pointer hover:underline' : ''
                      }`}
                      onClick={() => handleContactClick(info.action, detail)}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-12 text-white text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join Leiyan Mall?
          </h3>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Discover premium commercial spaces in Mavoko Township's fastest-growing commercial hub. 
            Perfect for businesses looking to tap into a thriving market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Schedule a Visit</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              onClick={() => window.open('mailto:leiyanrealtorsltd@gmail.com', '_self')}
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
