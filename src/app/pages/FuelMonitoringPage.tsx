import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Fuel, Droplet, TrendingDown, Bell, BarChart3, Shield, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';

const features = [
  {
    icon: Droplet,
    title: 'Real-Time Fuel Levels',
    description: 'See exactly how many liters of fuel are in your tank at any moment via your smartphone. Accurate to 0.1 liter precision.'
  },
  {
    icon: TrendingDown,
    title: 'Fuel Efficiency Tracking',
    description: 'Monitor kilometers per liter performance. Identify fuel-wasting behaviors and optimize vehicle efficiency.'
  },
  {
    icon: AlertTriangle,
    title: 'Theft Detection & Alerts',
    description: 'Instant notifications when fuel is stolen from your vehicle, showing exactly how many liters were taken and when.'
  },
  {
    icon: Bell,
    title: 'Refueling Notifications',
    description: 'Get alerts when fuel is added to the tank, with precise measurements of liters added and timestamp.'
  },
  {
    icon: BarChart3,
    title: 'Comprehensive Reports',
    description: 'Detailed analytics on fuel consumption patterns, costs, and efficiency over time. Export reports for accounting.'
  },
  {
    icon: Shield,
    title: 'Tamper Protection',
    description: 'Advanced sensors detect any tampering with fuel tank or monitoring equipment. Immediate security alerts.'
  }
];

const benefits = [
  'Precise fuel level monitoring (±0.1L accuracy)',
  'Real-time theft detection and alerts',
  'Kilometers per liter calculations',
  'Refueling history and reports',
  'Fuel cost tracking and analysis',
  'Driver behavior analysis',
  'Abnormal consumption alerts',
  'Integration with GPS tracking',
  'Mobile and web dashboards',
  'Multi-vehicle fleet monitoring',
  'Customizable alert thresholds',
  'Data export capabilities'
];

const metrics = [
  {
    icon: Droplet,
    value: '±0.1L',
    label: 'Accuracy',
    description: 'Precise measurement'
  },
  {
    icon: Shield,
    value: 'Instant',
    label: 'Theft Alerts',
    description: 'Real-time notifications'
  },
  {
    icon: BarChart3,
    value: '100%',
    label: 'Coverage',
    description: 'Complete monitoring'
  },
  {
    icon: TrendingDown,
    value: '30%',
    label: 'Savings',
    description: 'Average reduction'
  }
];

export function FuelMonitoringPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black"></div>
        
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1758411898158-213a318e2442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWVsJTIwbW9uaXRvcmluZyUyMHN5c3RlbSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzM0MDk2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fuel Monitoring"
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
                Fuel Monitoring & Telemetry
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Stop Fuel Theft. <span className="text-[#39FF14]">Save Money.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl leading-relaxed">
              Advanced fuel telemetry system with real-time monitoring, theft detection, 
              and comprehensive efficiency analytics. Know exactly where every liter goes.
            </p>

            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-4xl font-bold text-[#39FF14]">±0.1L</div>
                <div className="text-zinc-400">Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#39FF14]">Live</div>
                <div className="text-zinc-400">Monitoring</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#39FF14]">30%</div>
                <div className="text-zinc-400">Cost Savings</div>
              </div>
            </div>
            
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#39FF14] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2de00f] transition-all duration-300 shadow-lg shadow-[#39FF14]/20"
            >
              Install Fuel Monitoring
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
              Advanced <span className="text-[#39FF14]">Monitoring</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Complete fuel management system with precision tracking and intelligent analytics
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

      {/* How It Saves Money */}
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
              How It <span className="text-[#39FF14]">Saves Money</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {[
                  {
                    title: 'Prevent Fuel Theft',
                    description: 'Immediate alerts when fuel is stolen, with exact amounts. Most thefts are stopped within minutes of detection.',
                    savings: 'Save up to 20% annually'
                  },
                  {
                    title: 'Optimize Efficiency',
                    description: 'Identify wasteful driving patterns and route inefficiencies. Improve kilometers per liter performance.',
                    savings: 'Reduce consumption by 15%'
                  },
                  {
                    title: 'Accurate Accounting',
                    description: 'Eliminate fuel receipt fraud and unauthorized refueling. Complete audit trail of all fuel transactions.',
                    savings: 'Stop fraud losses'
                  },
                  {
                    title: 'Predictive Maintenance',
                    description: 'Detect abnormal fuel consumption that indicates mechanical issues before they become expensive repairs.',
                    savings: 'Prevent costly breakdowns'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-zinc-900/50 to-black border border-zinc-800 rounded-xl p-6 hover:border-[#39FF14]/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-[#39FF14] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400 mb-2">{item.description}</p>
                        <div className="text-[#39FF14] font-semibold">{item.savings}</div>
                      </div>
                    </div>
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
                  src="https://images.unsplash.com/photo-1665491641078-1f8b275c8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNDA5NjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vehicle Technology"
                  className="w-full"
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 bg-black border border-[#39FF14]/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-[#39FF14] mb-2">30%</div>
                <div className="text-white font-semibold">Average Savings</div>
                <div className="text-zinc-400 text-sm">On fuel costs annually</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-8 text-center hover:border-[#39FF14]/50 transition-all duration-300"
              >
                <metric.icon className="w-12 h-12 text-[#39FF14] mx-auto mb-4" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-[#39FF14] font-semibold mb-1">{metric.label}</div>
                <div className="text-zinc-400 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
                src="https://images.unsplash.com/photo-1543465077-db45d34b88a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBmbGVldCUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzczNDA5NjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fleet Management"
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
                Complete Fuel <span className="text-[#39FF14]">Intelligence</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Our advanced telemetry system provides comprehensive fuel management, 
                helping you eliminate waste and maximize efficiency.
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
              Start Saving on Fuel Today
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              Contact us to install fuel monitoring and take control of your fuel expenses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#39FF14] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2de00f] transition-all duration-300 shadow-lg shadow-[#39FF14]/20"
              >
                Get Fuel Monitoring
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
