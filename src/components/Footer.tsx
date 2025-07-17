
import { Phone, Mail, MapPin, Home, Users, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-amber-200 mb-2">LEIYAN REALTORS</h3>
            <p className="text-amber-300 mb-4">Premium Real Estate Solutions</p>
            <p className="text-amber-100 text-sm">
              Your trusted partner in finding the perfect home in Mavoko Township and beyond.
            </p>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-amber-200 mb-4">Our Services</h4>
            <ul className="space-y-2 text-amber-100">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Home className="w-4 h-4" />
                <span>Property Sales</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Users className="w-4 h-4" />
                <span>Real Estate Consultation</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Shield className="w-4 h-4" />
                <span>Property Management</span>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">Investment Advisory</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-amber-200 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-amber-100">
              <li><a href="#projects" className="hover:text-white transition-colors">Our Projects</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              <li><a href="#progress" className="hover:text-white transition-colors">Project Progress</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-amber-200 mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a href="tel:0798170170" className="flex items-center justify-center md:justify-end gap-2 text-amber-100 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>0798 170 170</span>
              </a>
              <a href="mailto:leiyanrealtorsltd@gmail.com" className="flex items-center justify-center md:justify-end gap-2 text-amber-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>leiyanrealtorsltd@gmail.com</span>
              </a>
              <div className="flex items-center justify-center md:justify-end gap-2 text-amber-100">
                <MapPin className="w-4 h-4" />
                <span>Mavoko Township, Machakos County</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center">
            <p className="text-amber-300 mb-2 md:mb-0">
              © {currentYear} Leiyan Realtors Ltd. All rights reserved.
            </p>
            <div className="flex gap-4 text-amber-100 text-sm">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
