import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-engineering-blue text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8" />
                <span className="font-bold text-xl">Monomorium Minimum</span>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Precision engineering and innovative solutions for tomorrow's infrastructure. 
                Building excellence through attention to detail and technical expertise.
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <p>Licensed Professional Engineers</p>
                <p>Certified in Structural & Civil Engineering</p>
                <p>Member of ASCE & Local Engineering Society</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Structural Design</li>
                <li>Project Management</li>
                <li>Infrastructure Development</li>
                <li>Safety & Compliance</li>
                <li>Engineering Analysis</li>
                <li>Consulting Services</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@monomoriumminimum.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>123 Engineering Plaza<br />Tech District<br />Metropolitan City, MC 12345</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>&copy; {currentYear} Monomorium Minimum. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Professional Standards</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;