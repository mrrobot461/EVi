import { Link } from 'react-router';
import { ArrowRight, Zap, Radio, Gauge, Shield, MapPin, Fuel } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Zap,
    title: 'EV Charging Stations',
    description: 'Fast charging infrastructure with AI-powered optimization. Charge 1km per second, full battery in 15 minutes.',
    features: ['Fast DC Charging', 'AI Battery Analysis', 'Multi-vehicle Support', 'Smart Monitoring'],
    image: 'https://images.unsplash.com/photo-1692052664566-477579a08e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBmYXN0JTIwY2hhcmdpbmclMjBzdGF0aW9ufGVufDF8fHx8MTc3MzMzNDk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/ev-charging',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Radio,
    title: 'GPS Vehicle Tracking',
    description: 'Real-time vehicle monitoring, theft prevention, and complete fleet management through your smartphone.',
    features: ['24/7 Real-time Tracking', 'Theft Alerts', 'Remote Engine Lock', 'Geofencing'],
    image: 'https://images.unsplash.com/photo-1655286352480-e38fe0845e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHUFMlMjB0cmFja2luZyUyMGRldmljZSUyMGNhciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNDA5NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/gps-tracking',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Fuel,
    title: 'Fuel Monitoring System',
    description: 'Advanced telemetry system tracking fuel levels, consumption, theft detection, and efficiency metrics.',
    features: ['Live Fuel Levels', 'Theft Detection', 'Efficiency Reports', 'Refueling Alerts'],
    image: 'https://images.unsplash.com/photo-1758411898158-213a318e2442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWVsJTIwbW9uaXRvcmluZyUyMHN5c3RlbSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzM0MDk2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/fuel-monitoring',
    gradient: 'from-orange-500/20 to-red-500/20'
  }
];

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black"></div>
        
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1768385957497-85ab9f9b802b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBzbGVlayUyMG1vZGVybiUyMGJsYWNrfGVufDF8fHx8MTc3MzIwMDA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Electric Vehicle"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full px-6 py-2 mb-8">
              <span className="text-[#39FF14] text-sm font-semibold uppercase tracking-wider">
                Advanced Automotive Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block text-[#39FF14] mt-2">Fleet Management</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
              From EV charging infrastructure to GPS tracking and fuel monitoring — 
              comprehensive solutions for modern vehicle management in Ethiopia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="group bg-[#39FF14] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2de00f] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#39FF14]/20"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/about"
                className="border-2 border-[#39FF14] text-[#39FF14] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#39FF14]/10 transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#39FF14]">Solutions</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Cutting-edge technology for electric vehicles and traditional fleet management
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={service.link}
                  className={`group block bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#39FF14]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#39FF14]/10`}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-96 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent lg:bg-gradient-to-r"></div>
                    </div>

                    {/* Content */}
                    <div className="p-12 flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-black border border-[#39FF14]/30 flex items-center justify-center mb-6 group-hover:border-[#39FF14] transition-colors duration-300">
                        <service.icon className="w-8 h-8 text-[#39FF14]" strokeWidth={1.5} />
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {service.title}
                      </h3>

                      <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                            <span className="text-zinc-400 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-[#39FF14] font-semibold group-hover:gap-3 transition-all duration-300">
                        Explore This Solution
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose <span className="text-[#39FF14]">EVI Charging</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trusted Technology',
                description: 'Industry-leading solutions with proven reliability and performance'
              },
              {
                icon: MapPin,
                title: 'Local Expertise',
                description: 'Based in Addis Ababa, serving all of Ethiopia with dedicated support'
              },
              {
                icon: Gauge,
                title: 'Fast Installation',
                description: 'Quick professional installation with minimal downtime'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-[#39FF14] mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
