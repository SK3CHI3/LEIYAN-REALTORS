
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-amber-200 mb-2">LEIYAN REALTORS</h3>
            <p className="text-amber-300">Premium Real Estate Solutions</p>
          </div>

          {/* Quick Contact */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-amber-200 mb-4">Quick Contact</h4>
            <div className="space-y-2">
              <a href="tel:0798170170" className="flex items-center justify-center gap-2 text-amber-100 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>0798 170 170</span>
              </a>
              <a href="mailto:leiyanrealtorsltd@gmail.com" className="flex items-center justify-center gap-2 text-amber-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-amber-200 mb-4">Location</h4>
            <div className="flex items-center justify-center md:justify-end gap-2 text-amber-100">
              <MapPin className="w-4 h-4" />
              <span>Mavoko Township, Machakos County</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-amber-700 pt-6 text-center">
          <p className="text-amber-300">
            © 2024 Leiyan Realtors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
