
import { useState, useEffect } from 'react';
import { CheckCircle, Building, Calendar, Users } from 'lucide-react';
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

  const currentTenants = [
    "Equity Afya Branch",
    "Jajemelo Limited",
    "Jaza Supermarket",
    "One Wash Laundry",
    "Pharmacy",
    "Perfume Store",
    "M-Pesa Outlet"
  ];

  const comingSoon = [
    "Co-working Space",
    "Water Bottling Plant",
    "Carpet Washing Store"
  ];

  return (
    <section id="progress" className="py-20 bg-gradient-to-br from-white to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-amber-900 mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Project Complete
          </h2>
          <p className={`text-xl text-amber-700 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Leiyan Mall is 100% complete and operational since April 2024
          </p>
        </div>

        {/* Completion Status */}
        <div className={`text-center mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-8 py-4 rounded-full font-bold text-lg">
            <CheckCircle className="w-6 h-6" />
            <span>100% COMPLETE</span>
          </div>
          <p className="text-amber-700 mt-4 text-lg">Operational since April 2024</p>
        </div>

        {/* Progress Checklist */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-amber-900 mb-8 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Construction Phases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {progressItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-3 p-4 bg-white rounded-lg border border-amber-200 hover:shadow-md transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-amber-800 font-medium">{item}</span>
                <span className="ml-auto text-green-600 font-bold text-sm">100%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Tenants & Coming Soon */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className={`border-amber-200 hover:shadow-xl transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-bold text-amber-900">Current Tenants</h3>
              </div>
              <div className="space-y-3">
                {currentTenants.map((tenant, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-amber-800 font-medium">{tenant}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className={`border-amber-200 hover:shadow-xl transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-bold text-amber-900">Coming Soon</h3>
              </div>
              <div className="space-y-3">
                {comingSoon.map((future, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <span className="text-amber-800 font-medium">{future}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectProgress;
