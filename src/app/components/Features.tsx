import { Zap, Gauge, Battery, Cpu } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Zero Emissions',
    description: 'Drive clean with 100% electric power, reducing carbon footprint and promoting environmental sustainability.'
  },
  {
    icon: Gauge,
    title: 'Instant Torque',
    description: 'Experience immediate acceleration and superior performance with electric motor technology.'
  },
  {
    icon: Battery,
    title: 'Fast Charging',
    description: 'Advanced charging infrastructure ensuring quick, reliable, and convenient charging solutions.'
  },
  {
    icon: Cpu,
    title: 'Smart Technology',
    description: 'Integrated IoT solutions for real-time monitoring, diagnostics, and optimized charging efficiency.'
  }
];

export function Features() {
  return (
    <section className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-[#39FF14]">Electric</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Advanced technology meeting sustainable solutions for the future of mobility
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#39FF14]/10"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#39FF14]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-black border border-[#39FF14]/30 flex items-center justify-center mb-6 group-hover:border-[#39FF14] transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#39FF14]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
