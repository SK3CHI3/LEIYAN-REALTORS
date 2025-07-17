
import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Building, Users, Shield, Zap, Wifi, Car, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import ProjectHighlights from '@/components/ProjectHighlights';
import LocationSection from '@/components/LocationSection';
import ProjectProgress from '@/components/ProjectProgress';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-100">
      <Hero />
      <ProjectHighlights />
      <LocationSection />
      <ProjectProgress />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
