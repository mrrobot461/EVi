import { motion } from 'motion/react';
import { Target, Users, Award, Zap, Shield, TrendingUp } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full px-6 py-2 mb-8">
              <span className="text-[#39FF14] text-sm font-semibold uppercase tracking-wider">
                About EVI Charging
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Powering Ethiopia's <span className="text-[#39FF14]">Future</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
              EVI Electric is a forward-thinking company based in Addis Ababa, Ethiopia, 
              committed to advancing the future of sustainable transportation through 
              strategic and scalable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-12"
            >
              <Target className="w-16 h-16 text-[#39FF14] mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                To accelerate Ethiopia's transition to clean energy by making EV infrastructure 
                accessible and financially viable for businesses and consumers alike. We build 
                a robust EV ecosystem that creates new economic opportunities and promotes 
                environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-12"
            >
              <Zap className="w-16 h-16 text-[#39FF14] mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                To be the leading provider of electric vehicle infrastructure and automotive 
                technology solutions in Ethiopia, enabling a cleaner, smarter, and more 
                competitive future through innovation and operational excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We <span className="text-[#39FF14]">Do</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">EV Charging Infrastructure</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                We specialize in the installation of electric vehicle charging stations, 
                delivering reliable, efficient, and cost-effective infrastructure for residential, 
                commercial, and public sector clients. Our team of skilled professionals ensures 
                that each installation is optimized for performance, safety, and long-term value.
              </p>
              <div className="bg-black border border-zinc-800 rounded-xl p-6">
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                    Fast DC charging stations
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                    AI-powered optimization
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                    15-minute full charge capability
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Vehicle Monitoring Solutions</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                We offer advanced GPS tracking and fuel monitoring systems that provide complete 
                vehicle management capabilities. From real-time location tracking to fuel theft 
                prevention, our solutions help businesses and individuals protect their assets 
                and optimize operations.
              </p>
              <div className="bg-black border border-zinc-800 rounded-xl p-6">
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                    24/7 real-time GPS tracking
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                    Advanced fuel monitoring
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                    Theft prevention & alerts
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Premium EV Accessories</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We offer a comprehensive portfolio of premium EV accessories designed to improve 
              vehicle efficiency, enhance user experience, and support the evolving needs of 
              electric mobility. Our products are carefully selected to meet the highest 
              international standards, providing our clients with quality they can trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="text-[#39FF14]">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Reliability',
                description: 'Delivering consistent, high-quality solutions that our clients can depend on for years to come.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Committed to operational excellence and the highest international standards in every installation.'
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'Staying ahead through strategic collaboration and cutting-edge technology adoption.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-[#39FF14] mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Users className="w-16 h-16 text-[#39FF14] mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expert <span className="text-[#39FF14]">Team</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Our team of skilled professionals brings together expertise in electrical 
              engineering, automotive technology, and sustainable energy systems. With deep 
              knowledge of the local market and international best practices, we ensure every 
              project exceeds expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Based in <span className="text-[#39FF14]">Addis Ababa</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-6">
                Tulip Hotel, Meskel Flower, Addis Ababa, Ethiopia
              </p>
              <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Strategically located in Ethiopia's capital, we serve clients across 
                the country, bringing world-class EV infrastructure and vehicle monitoring 
                solutions to businesses and consumers nationwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
