import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import logo from '@/assets/777eea1f0806b6bf9784cf92dcd935ac3fc576df.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'EV Charging', href: '/ev-charging' },
    { name: 'GPS Tracking', href: '/gps-tracking' },
    { name: 'Fuel Monitoring', href: '/fuel-monitoring' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="EVI Electric" className="h-10" />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg">EVI Charging</div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Mail className="w-3 h-3" />
                <span>evielectric251@gmail.com</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-all duration-300 font-medium px-3 py-2 rounded-lg ${
                  isActive(item.href)
                    ? 'text-[#39FF14] bg-[#39FF14]/10'
                    : 'text-zinc-300 hover:text-[#39FF14] hover:bg-[#39FF14]/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact"
              className="bg-[#39FF14] text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-[#2de00f] transition-all duration-300 shadow-lg shadow-[#39FF14]/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-[#39FF14] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-zinc-900 bg-black/95 backdrop-blur-lg">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block transition-all duration-300 font-medium py-3 px-4 rounded-lg ${
                  isActive(item.href)
                    ? 'text-[#39FF14] bg-[#39FF14]/10'
                    : 'text-zinc-300 hover:text-[#39FF14] hover:bg-[#39FF14]/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full bg-[#39FF14] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#2de00f] transition-all duration-300 mt-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}