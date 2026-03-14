import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import logo from '@/assets/777eea1f0806b6bf9784cf92dcd935ac3fc576df.png';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="EVI Electric" className="h-12 mb-4" />
            <p className="text-zinc-400 leading-relaxed mb-6">
              Advancing sustainable transportation through strategic EV charging infrastructure across Ethiopia.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ev-charging" className="text-zinc-400 hover:text-[#39FF14] transition-colors duration-300">
                  EV Charging Stations
                </Link>
              </li>
              <li>
                <Link to="/gps-tracking" className="text-zinc-400 hover:text-[#39FF14] transition-colors duration-300">
                  GPS Tracking
                </Link>
              </li>
              <li>
                <Link to="/fuel-monitoring" className="text-zinc-400 hover:text-[#39FF14] transition-colors duration-300">
                  Fuel Monitoring
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-zinc-400 hover:text-[#39FF14] transition-colors duration-300">
                  All Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-[#39FF14] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-zinc-400 hover:text-[#39FF14] transition-colors duration-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-[#39FF14] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                <span className="text-zinc-400">
                  Tulip Hotel, Meskel Flower<br />
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                <div className="text-zinc-400">
                  <div>evielectric251@gmail.com</div>
                  <div className="mt-2">+251 940 101055</div>
                  <div>+251 972 172034</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © 2026 EVI Electric. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/contact" className="text-zinc-500 hover:text-[#39FF14] text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-zinc-500 hover:text-[#39FF14] text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-zinc-500 hover:text-[#39FF14] text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}