import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import logo from '@/assets/777eea1f0806b6bf9784cf92dcd935ac3fc576df.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black"></div>
      
      {/* Hero image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1768385957497-85ab9f9b802b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBzbGVlayUyMG1vZGVybiUyMGJsYWNrfGVufDF8fHx8MTc3MzIwMDA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Electric Vehicle"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Logo */}
          <img src={logo} alt="EVI Electric" className="h-16 mb-12" />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Powering Ethiopia's
            <span className="block text-[#39FF14] mt-2">Electric Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed max-w-2xl">
            Strategic EV charging infrastructure and premium accessories for sustainable transportation. 
            Building a cleaner, smarter, and more competitive future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/solutions" className="group bg-[#39FF14] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2de00f] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#39FF14]/20">
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link to="/contact" className="border-2 border-[#39FF14] text-[#39FF14] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#39FF14]/10 transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-zinc-800">
            <div>
              <div className="text-4xl font-bold text-[#39FF14]">100+</div>
              <div className="text-zinc-400 mt-2">Installations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#39FF14]">24/7</div>
              <div className="text-zinc-400 mt-2">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#39FF14]">100%</div>
              <div className="text-zinc-400 mt-2">Clean Energy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#39FF14] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#39FF14] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
