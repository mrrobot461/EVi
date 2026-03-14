import { Calendar, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router';

export function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-black to-zinc-950"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="inline-block bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full px-4 py-2 mb-6">
                <span className="text-[#39FF14] text-sm font-semibold">Get Started Today</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Go <span className="text-[#39FF14]">Electric?</span>
              </h2>
              
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Join the sustainable mobility revolution. Schedule a consultation with our experts 
                and discover how we can power your electric future.
              </p>

              {/* Contact info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-zinc-400">
                  <Phone className="w-5 h-5 text-[#39FF14]" />
                  <span>+251 940 101055 / +251 972 172034</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <Mail className="w-5 h-5 text-[#39FF14]" />
                  <span>info@evielectric.et</span>
                </div>
              </div>

              <Link to="/contact" className="group bg-[#39FF14] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2de00f] transition-all duration-300 flex items-center gap-3 shadow-lg shadow-[#39FF14]/20">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </Link>
            </div>

            {/* Right image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1623596240012-63ab3432fa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzczMjAwMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="EV Charging"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-black border border-[#39FF14]/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#39FF14] mb-1">Fast</div>
                <div className="text-zinc-400 text-sm">Installation Process</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
