
import { useState, useEffect } from 'react';
import { MapPin, Building2, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-amber-800 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-amber-700 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-amber-600 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-amber-800 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 bg-clip-text text-transparent">
              LEIYAN
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 font-medium mt-2">REALTORS</p>
          </div>

          {/* Main Headline */}
          <div className={`mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4">
              Leiyan Mall
            </h2>
            <p className="text-xl md:text-2xl text-amber-700 mb-6">
              Premium Commercial Space in Mavoko Township
            </p>
            <p className="text-lg text-amber-600 max-w-2xl mx-auto leading-relaxed">
              Strategically located at the heart of Great Wall Gardens, serving over 4,000 apartments 
              with 6,000 additional units under construction
            </p>
          </div>

          {/* Key Stats */}
          <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Building2 className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-amber-900">3,000</h3>
                <p className="text-amber-700">Square Meters</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Building2 className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-amber-900">3</h3>
                <p className="text-amber-700">Commercial Floors</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Calendar className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-amber-900">100%</h3>
                <p className="text-amber-700">Complete</p>
              </div>
            </div>
          </div>

          {/* Location Badge */}
          <div className={`mb-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-semibold">
              <MapPin className="w-5 h-5" />
              <span>Mavoko Township, Machakos County</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
