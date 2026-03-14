import { MapPin, Building2, Home, Zap } from 'lucide-react';

const locations = [
  { name: 'Commercial Districts', count: 25, icon: Building2 },
  { name: 'Residential Areas', count: 40, icon: Home },
  { name: 'Public Stations', count: 35, icon: Zap }
];

export function ChargingNetwork() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #39FF14 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Charging <span className="text-[#39FF14]">Network</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Expanding EV infrastructure across Addis Ababa and throughout Ethiopia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 aspect-square flex items-center justify-center">
              {/* Stylized map */}
              <div className="relative w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1771495604385-0945b2330541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYSUyMGFkZGlzJTIwYWJhYmElMjBjaXR5c2NhcGUlMjBtb2Rlcm58ZW58MXx8fHwxNzczMjAwMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Addis Ababa"
                  className="w-full h-full object-cover rounded-xl opacity-30"
                />
                
                {/* Map pins */}
                <div className="absolute inset-0">
                  {[
                    { top: '20%', left: '30%' },
                    { top: '35%', left: '60%' },
                    { top: '50%', left: '25%' },
                    { top: '60%', left: '70%' },
                    { top: '70%', left: '45%' },
                    { top: '40%', left: '50%' },
                  ].map((position, index) => (
                    <div
                      key={index}
                      className="absolute animate-pulse"
                      style={{ top: position.top, left: position.left }}
                    >
                      <div className="relative">
                        <MapPin className="w-8 h-8 text-[#39FF14] fill-[#39FF14]/20" />
                        <div className="absolute inset-0 w-8 h-8 bg-[#39FF14] rounded-full blur-xl opacity-50 animate-ping"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Network stats */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Growing Coverage Across Ethiopia
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Our charging network spans residential, commercial, and public sectors, 
                providing reliable infrastructure that supports the transition to sustainable 
                transportation throughout Ethiopia.
              </p>
            </div>

            {locations.map((location, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-[#39FF14]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-black border border-[#39FF14]/30 flex items-center justify-center">
                      <location.icon className="w-6 h-6 text-[#39FF14]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        {location.name}
                      </h4>
                      <p className="text-zinc-500 text-sm">Active installations</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#39FF14]">
                      {location.count}+
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <button className="w-full bg-gradient-to-r from-[#39FF14] to-[#2de00f] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-[#39FF14]/20 transition-all duration-300">
                View Full Network Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
