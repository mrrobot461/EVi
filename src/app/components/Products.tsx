import { ArrowRight } from 'lucide-react';
import chargingStation from '@/assets/a4e4426874c5c51a6910114e7c20c567de05e777.png';
import homeCharger from '@/assets/c7d8e04da982de6e6365abd32d8d72fad36f01ad.png';
import accessories from '@/assets/8ba3c02f8075d84124395f2a96fa3e0d9bb95d12.png';

const products = [
  {
    name: 'Commercial Charging Station',
    image: chargingStation,
    specs: 'Fast DC charging • Multi-vehicle support • Smart monitoring',
    description: 'Professional-grade charging infrastructure for commercial and public installations'
  },
  {
    name: 'Home Charging Solution',
    image: homeCharger,
    specs: 'AC Level 2 • Wall-mounted • App control',
    description: 'Convenient residential charging solution with intelligent features'
  },
  {
    name: 'EV Accessories',
    image: accessories,
    specs: 'Premium quality • International standards • Complete portfolio',
    description: 'Comprehensive range of accessories to enhance your EV experience'
  }
];

export function Products() {
  return (
    <section className="relative py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#39FF14]">Solutions</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Premium charging infrastructure and accessories designed for reliability and performance
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#39FF14]/50 transition-all duration-300"
            >
              {/* Image container */}
              <div className="relative h-80 bg-zinc-900 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {product.name}
                </h3>
                
                <p className="text-[#39FF14] text-sm font-semibold mb-4 tracking-wide">
                  {product.specs}
                </p>
                
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <button className="group/btn flex items-center gap-2 text-[#39FF14] font-semibold hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
