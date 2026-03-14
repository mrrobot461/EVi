import { ArrowRight, Zap, Gauge, Battery } from 'lucide-react';

const vehicles = [
  {
    brand: 'Tesla',
    model: 'Model 3',
    image: 'https://images.unsplash.com/photo-1669625383124-751e3649255b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUZXNsYSUyME1vZGVsJTIwMyUyMHNsZWVrJTIwYmxhY2t8ZW58MXx8fHwxNzczMjAwNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    range: '358 mi',
    acceleration: '3.1s',
    topSpeed: '162 mph',
    description: 'Premium sedan with autopilot capabilities and cutting-edge technology'
  },
  {
    brand: 'BYD',
    model: 'Seal',
    image: 'https://images.unsplash.com/photo-1772631259381-dfdc38dec2da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCWUQlMjBlbGVjdHJpYyUyMHZlaGljbGUlMjBtb2Rlcm58ZW58MXx8fHwxNzczMjAwNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    range: '323 mi',
    acceleration: '3.8s',
    topSpeed: '112 mph',
    description: 'Advanced blade battery technology with exceptional efficiency'
  },
  {
    brand: 'Volkswagen',
    model: 'ID.4',
    image: 'https://images.unsplash.com/photo-1742811704243-2df916647bd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWb2xrc3dhZ2VuJTIwSUQlMjBlbGVjdHJpYyUyMGNhcnxlbnwxfHx8fDE3NzMyMDA0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    range: '275 mi',
    acceleration: '5.8s',
    topSpeed: '99 mph',
    description: 'Spacious SUV combining German engineering with electric innovation'
  },
  {
    brand: 'Tesla',
    model: 'Model Y',
    image: 'https://images.unsplash.com/photo-1767304609110-eba3cb643c6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUZXNsYSUyME1vZGVsJTIwWSUyMHByZW1pdW18ZW58MXx8fHwxNzczMjAwNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    range: '330 mi',
    acceleration: '3.5s',
    topSpeed: '155 mph',
    description: 'Versatile crossover with maximum utility and performance'
  }
];

export function VehicleShowcase() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full px-6 py-2 mb-6">
            <span className="text-[#39FF14] text-sm font-semibold uppercase tracking-wider">Featured Models</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience Premium <span className="text-[#39FF14]">Electric Vehicles</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Discover the latest EV technology from world-leading manufacturers, 
            fully supported by our charging infrastructure
          </p>
        </div>

        {/* Vehicles grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {vehicles.map((vehicle, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#39FF14]/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-zinc-900">
                <img 
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Brand badge */}
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm border border-[#39FF14]/30 rounded-lg px-4 py-2">
                  <span className="text-[#39FF14] font-semibold">{vehicle.brand}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {vehicle.model}
                </h3>
                
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {vehicle.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
                    <Battery className="w-5 h-5 text-[#39FF14] mx-auto mb-2" />
                    <div className="text-white font-bold">{vehicle.range}</div>
                    <div className="text-zinc-500 text-xs mt-1">Range</div>
                  </div>
                  
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
                    <Zap className="w-5 h-5 text-[#39FF14] mx-auto mb-2" />
                    <div className="text-white font-bold">{vehicle.acceleration}</div>
                    <div className="text-zinc-500 text-xs mt-1">0-60 mph</div>
                  </div>
                  
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 text-center">
                    <Gauge className="w-5 h-5 text-[#39FF14] mx-auto mb-2" />
                    <div className="text-white font-bold">{vehicle.topSpeed}</div>
                    <div className="text-zinc-500 text-xs mt-1">Top Speed</div>
                  </div>
                </div>

                {/* CTA */}
                <button className="group/btn w-full border-2 border-[#39FF14] text-[#39FF14] px-6 py-3 rounded-lg font-semibold hover:bg-[#39FF14] hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-6 text-lg">
            Ready to make the switch to electric?
          </p>
          <button className="bg-gradient-to-r from-[#39FF14] to-[#2de00f] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-[#39FF14]/20 transition-all duration-300">
            View All Models
          </button>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent"></div>
    </section>
  );
}
