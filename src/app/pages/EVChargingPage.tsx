import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Zap, Clock, Cpu, Battery, Building2, Home, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Ultra-Fast Charging',
    description: '1 kilometer of range per second of charging. Full battery charge in just 15 minutes with our advanced DC fast charging technology.'
  },
  {
    icon: Cpu,
    title: 'AI-Powered Optimization',
    description: 'Artificial Intelligence analyzes battery health, customer demand, and vehicle capabilities to optimize charging speed and safety.'
  },
  {
    icon: Battery,
    title: 'Battery Safety Analysis',
    description: 'Real-time battery condition monitoring ensures safe charging cycles and extends battery lifespan.'
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    description: 'AI predicts and manages charging schedules based on demand patterns and grid availability.'
  }
];

const installations = [
  {
    icon: Building2,
    title: 'Commercial & Hotels',
    description: 'High-capacity charging solutions for hotels, shopping centers, and commercial properties',
    image: 'https://images.unsplash.com/photo-1692052664566-477579a08e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBmYXN0JTIwY2hhcmdpbmclMjBzdGF0aW9ufGVufDF8fHx8MTc3MzMzNDk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: MapPin,
    title: 'Public Charging Stations',
    description: 'Strategic placement in high-traffic areas for maximum accessibility',
    image: 'https://images.unsplash.com/photo-1768906730401-596a5156aa11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGNoYXJnaW5nJTIwcG9ydCUyMGNsb3NlfGVufDF8fHx8MTc3MzQwOTYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Home,
    title: 'Residential Solutions',
    description: 'Convenient home charging installations for private vehicle owners',
    image: 'https://images.unsplash.com/photo-1623596240012-63ab3432fa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzczMjAwMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

const benefits = [
  'Fast installation with minimal disruption',
  '24/7 technical support and maintenance',
  'Mobile app for monitoring and payments',
  'Multi-vehicle compatibility',
  'Energy consumption analytics',
  'Remote monitoring and diagnostics',
  'Scalable infrastructure',
  'Future-proof technology'
];

export function EVChargingPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black"></div>
        
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1692052664566-477579a08e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBmYXN0JTIwY2hhcmdpbmclMjBzdGF0aW9ufGVufDF8fHx8MTc3MzMzNDk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="EV Charging"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full px-6 py-2 mb-8">
              <span className="text-[#39FF14] text-sm font-semibold uppercase tracking-wider">
                EV Charging Infrastructure
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Lightning-Fast EV <span className="text-[#39FF14]">Charging</span> Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl leading-relaxed">
              Revolutionary charging infrastructure across Addis Ababa and regional cities. 
              Powered by AI, optimized for speed, built for the future.
            </p>

            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-4xl font-bold text-[#39FF14]">15 min</div>
                <div className="text-zinc-400">Full Charge</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#39FF14]">1km/sec</div>
                <div className="text-zinc-400">Charging Speed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#39FF14]">100%</div>
                <div className="text-zinc-400">AI Optimized</div>
              </div>
            </div>
            
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#39FF14] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2de00f] transition-all duration-300 shadow-lg shadow-[#39FF14]/20"
            >
              Request Installation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Advanced <span className="text-[#39FF14]">Technology</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              AI-powered charging infrastructure that's smart, safe, and incredibly fast
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-black border border-[#39FF14]/30 flex items-center justify-center mb-6 group-hover:border-[#39FF14] transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#39FF14]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Types */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Installation <span className="text-[#39FF14]">Locations</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Comprehensive charging solutions for every need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {installations.map((installation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#39FF14]/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={installation.image}
                    alt={installation.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <installation.icon className="w-10 h-10 text-[#39FF14] mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-white mb-3">{installation.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{installation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete <span className="text-[#39FF14]">Peace of Mind</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Our comprehensive EV charging solutions are designed to provide reliable, 
                efficient, and future-ready infrastructure for your electric vehicle needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0" />
                    <span className="text-zinc-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1768906730401-596a5156aa11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGNoYXJnaW5nJTIwcG9ydCUyMGNsb3NlfGVufDF8fHx8MTc3MzQwOTYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="EV Charging Station"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Install EV Charging?
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              Contact us today to discuss your EV charging infrastructure needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#39FF14] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2de00f] transition-all duration-300 shadow-lg shadow-[#39FF14]/20"
              >
                Request a Quote
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-[#39FF14] text-[#39FF14] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#39FF14]/10 transition-all duration-300"
              >
                View All Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
