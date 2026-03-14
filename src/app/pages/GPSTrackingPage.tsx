import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Radio, MapPin, Shield, Smartphone, Lock, Bell, Route, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: '24/7 Real-Time Tracking',
    description: 'Monitor your vehicle\'s exact location at any moment through your smartphone. Live updates every second with precise GPS coordinates.'
  },
  {
    icon: Shield,
    title: 'Theft Prevention & Alerts',
    description: 'Instant phone alerts if your vehicle moves without permission. Immediate notifications help recover stolen vehicles quickly.'
  },
  {
    icon: Lock,
    title: 'Remote Engine Control',
    description: 'Lock or unlock your vehicle\'s engine remotely via mobile app. Complete control from anywhere in the world.'
  },
  {
    icon: Route,
    title: 'Complete Travel History',
    description: 'Detailed records of daily routes, distances traveled, and time stamps. Perfect for fleet management and personal tracking.'
  },
  {
    icon: Bell,
    title: 'Geofencing Alerts',
    description: 'Set virtual boundaries and receive instant alerts when your vehicle enters or exits predefined zones.'
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Access',
    description: 'Monitor and control your vehicle through dedicated mobile app or web dashboard. Available on iOS and Android.'
  }
];

const benefits = [
  'Real-time GPS tracking with 1-second updates',
  'Instant theft alerts and notifications',
  'Remote engine immobilization',
  'Comprehensive trip history reports',
  'Multiple vehicle management',
  'Geofencing with custom zones',
  'Speed monitoring and alerts',
  '24/7 customer support',
  'Low power consumption',
  'Easy installation process',
  'SIM card included',
  'Mobile and web platforms'
];

const useCases = [
  {
    title: 'Personal Vehicles',
    description: 'Protect your family car with advanced tracking and theft prevention',
    icon: '🚗'
  },
  {
    title: 'Fleet Management',
    description: 'Monitor entire commercial fleet with comprehensive reporting',
    icon: '🚚'
  },
  {
    title: 'Rental Services',
    description: 'Track rental vehicles and ensure proper usage',
    icon: '🔑'
  },
  {
    title: 'Corporate Vehicles',
    description: 'Manage company cars and optimize routes',
    icon: '🏢'
  }
];

export function GPSTrackingPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black"></div>
        
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1655286352480-e38fe0845e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHUFMlMjB0cmFja2luZyUyMGRldmljZSUyMGNhciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNDA5NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="GPS Tracking"
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
                GPS Vehicle Tracking
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Never Lose Track of Your <span className="text-[#39FF14]">Vehicle</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl leading-relaxed">
              Advanced GPS tracking system with real-time monitoring, theft prevention, 
              and complete fleet management through your smartphone.
            </p>

            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-4xl font-bold text-[#39FF14]">24/7</div>
                <div className="text-zinc-400">Live Tracking</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#39FF14]">Instant</div>
                <div className="text-zinc-400">Theft Alerts</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#39FF14]">Remote</div>
                <div className="text-zinc-400">Engine Lock</div>
              </div>
            </div>
            
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#39FF14] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2de00f] transition-all duration-300 shadow-lg shadow-[#39FF14]/20"
            >
              Install GPS Tracking
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
              Powerful <span className="text-[#39FF14]">Features</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Everything you need to track, monitor, and protect your vehicle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How It <span className="text-[#39FF14]">Works</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Professional Installation',
                description: 'Our technicians install the GPS tracker in your vehicle. Hidden placement for security. Takes about 1 hour.'
              },
              {
                step: '02',
                title: 'Download the App',
                description: 'Install our mobile app on your smartphone. Available for both iOS and Android. Simple setup process.'
              },
              {
                step: '03',
                title: 'Start Tracking',
                description: 'Monitor your vehicle 24/7 from anywhere. Receive alerts, view history, and control remotely.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all duration-300">
                  <div className="text-6xl font-bold text-[#39FF14]/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#39FF14]/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Perfect For <span className="text-[#39FF14]">Every Need</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-zinc-900/50 to-black border border-zinc-800 rounded-2xl p-8 text-center hover:border-[#39FF14]/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-zinc-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-zinc-800"
            >
              <img
                src="https://images.unsplash.com/photo-1758411898049-4de9588be514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlJTIwdHJhY2tpbmclMjBzbWFydHBob25lJTIwYXBwfGVufDF8fHx8MTc3MzQwOTYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="GPS Tracking App"
                className="w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Vehicle <span className="text-[#39FF14]">Security</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Our GPS tracking system provides comprehensive protection and monitoring 
                capabilities for your vehicle, giving you peace of mind.
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Protect Your Vehicle Today
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              Contact us to install GPS tracking and ensure your vehicle's security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#39FF14] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2de00f] transition-all duration-300 shadow-lg shadow-[#39FF14]/20"
              >
                Get GPS Tracking
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
