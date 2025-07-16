
import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Building, Users, Shield, Zap, Wifi, Car, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import ProjectHighlights from '@/components/ProjectHighlights';
import LocationSection from '@/components/LocationSection';
import ProjectProgress from '@/components/ProjectProgress';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Hero />
      <ProjectHighlights />
      <LocationSection />
      <ProjectProgress />
      <ContactSection />
    </div>
  );
};

export default Index;
