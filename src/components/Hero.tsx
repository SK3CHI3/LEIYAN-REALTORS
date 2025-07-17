
import { useState, useEffect } from 'react';
import { MapPin, Building2, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Leiyan Mall",
    subtitle: "Premium Commercial Space in Mavoko Township",
    description: "Strategically located at the heart of Great Wall Gardens, serving over 4,000 apartments with 6,000 additional units under construction",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop",
    stats: {
      size: "3,000",
      unit: "Square Meters",
      floors: "3",
      floorLabel: "Commercial Floors",
      completion: "100%",
      status: "Complete"
    }
  },
  {
    id: 2,
    title: "Great Wall Gardens Phase I",
    subtitle: "Residential Development in Mavoko Township",
    description: "First phase of the landmark Great Wall Gardens development featuring modern residential apartments with premium amenities",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1000&auto=format&fit=crop",
    stats: {
      size: "1,200",
      unit: "Apartments",
      floors: "8",
      floorLabel: "Residential Floors",
      completion: "100%",
      status: "Occupied"
    }
  },
  {
    id: 3,
    title: "Great Wall Gardens Phase II",
    subtitle: "Expanded Residential Complex",
    description: "Second phase expansion with enhanced facilities and modern architectural design for growing families",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1000&auto=format&fit=crop",
    stats: {
      size: "1,500",
      unit: "Apartments",
      floors: "10",
      floorLabel: "Residential Floors",
      completion: "100%",
      status: "Occupied"
    }
  },
  {
    id: 4,
    title: "Great Wall Gardens Phase III",
    subtitle: "Premium Residential Living",
    description: "Third phase featuring luxury apartments with state-of-the-art amenities and modern infrastructure",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=1000&auto=format&fit=crop",
    stats: {
      size: "1,800",
      unit: "Apartments",
      floors: "12",
      floorLabel: "Residential Floors",
      completion: "95%",
      status: "Nearly Complete"
    }
  },
  {
    id: 5,
    title: "Great Wall Gardens Phase IV",
    subtitle: "Future of Modern Living",
    description: "Latest phase with cutting-edge design and sustainable building practices for the next generation",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=1000&auto=format&fit=crop",
    stats: {
      size: "2,200",
      unit: "Apartments",
      floors: "15",
      floorLabel: "Residential Floors",
      completion: "85%",
      status: "Under Construction"
    }
  }
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-scroll through projects with transition
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextProject = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const prevProject = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const project = projects[currentProject];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zooming Animation */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-5000 ease-linear ${
            isTransitioning 
              ? 'scale-110 opacity-80' 
              : 'scale-105 opacity-100'
          }`}
          style={{
            transformOrigin: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-amber-800/30 to-orange-900/40"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-amber-200 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-amber-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-amber-200 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Logo/Brand - Top Left */}
      <div className={`absolute top-4 left-4 md:top-8 md:left-8 z-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200">
          LEIYAN
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-amber-300 font-medium">REALTORS</p>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={prevProject}
          disabled={isTransitioning}
          className="bg-white/15 backdrop-blur-sm border-amber-200/30 text-white hover:bg-amber-600/50 hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={nextProject}
          disabled={isTransitioning}
          className="bg-white/15 backdrop-blur-sm border-amber-200/30 text-white hover:bg-amber-600/50 hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Project Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentProject(index);
                  setIsTransitioning(false);
                }, 500);
              }
            }}
            disabled={isTransitioning}
            className={`transition-all duration-300 ${
              index === currentProject 
                ? 'bg-amber-300 w-8 h-3 rounded-full' 
                : 'bg-white/40 hover:bg-white/60 w-3 h-3 rounded-full'
            } disabled:opacity-50`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className={`mb-6 md:mb-8 transform transition-all duration-1000 delay-300 ${isVisible && !isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-80'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
              {project.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-amber-200 mb-4 md:mb-6">
              {project.subtitle}
            </p>
            <p className="text-base md:text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed px-4">
              {project.description}
            </p>
          </div>

          {/* Key Stats - More Minimal Design */}
          <div className={`mb-8 md:mb-12 px-4 transform transition-all duration-1000 delay-500 ${isVisible && !isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-80'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Building2 className="w-6 h-6 md:w-8 md:h-8 text-amber-300 mx-auto mb-2 md:mb-3" />
                <h3 className="text-xl md:text-2xl font-bold text-white">{project.stats.size}</h3>
                <p className="text-amber-200 text-sm md:text-base">{project.stats.unit}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Building2 className="w-6 h-6 md:w-8 md:h-8 text-amber-300 mx-auto mb-2 md:mb-3" />
                <h3 className="text-xl md:text-2xl font-bold text-white">{project.stats.floors}</h3>
                <p className="text-amber-200 text-sm md:text-base">{project.stats.floorLabel}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-amber-300 mx-auto mb-2 md:mb-3" />
                <h3 className="text-xl md:text-2xl font-bold text-white">{project.stats.completion}</h3>
                <p className="text-amber-200 text-sm md:text-base">{project.stats.status}</p>
              </div>
            </div>
          </div>

          {/* Location Badge */}
          <div className={`mb-6 md:mb-8 px-4 transform transition-all duration-1000 delay-700 ${isVisible && !isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-80'}`}>
            <div className="inline-flex items-center gap-2 bg-amber-600/80 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              <span>Mavoko Township, Machakos County</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 transform transition-all duration-1000 delay-900 ${isVisible && !isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-80'}`}>
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-amber-300 text-amber-100 hover:bg-amber-600 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300"
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
