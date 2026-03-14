import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                Get In Touch
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Let's Start Your <span className="text-[#39FF14]">Journey</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
              Ready to transform your fleet or install EV infrastructure? Contact us today 
              and our team will help you find the perfect solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Contact <span className="text-[#39FF14]">Information</span>
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Phone</h3>
                    <p className="text-zinc-400">+251 940 101055</p>
                    <p className="text-zinc-400">+251 972 172034</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <p className="text-zinc-400">evielectric251@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Location</h3>
                    <p className="text-zinc-400">Tulip Hotel, Meskel Flower</p>
                    <p className="text-zinc-400">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Business Hours</h3>
                    <p className="text-zinc-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-zinc-400">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-zinc-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                    Fast professional installation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                    24/7 technical support
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                    International quality standards
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                    Competitive pricing
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
                    Local expertise
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-[#39FF14] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-[#39FF14] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-[#39FF14] focus:outline-none transition-colors"
                      placeholder="+251 900 000000"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-white font-semibold mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-[#39FF14] focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ev-charging">EV Charging Installation</option>
                      <option value="gps-tracking">GPS Vehicle Tracking</option>
                      <option value="fuel-monitoring">Fuel Monitoring System</option>
                      <option value="ev-accessories">EV Accessories</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-[#39FF14] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#39FF14] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2de00f] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#39FF14]/20"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our <span className="text-[#39FF14]">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'EV Charging', link: '/ev-charging' },
              { name: 'GPS Tracking', link: '/gps-tracking' },
              { name: 'Fuel Monitoring', link: '/fuel-monitoring' }
            ].map((service, index) => (
              <motion.a
                key={index}
                href={service.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-zinc-900/50 to-black border border-zinc-800 rounded-xl p-8 text-center hover:border-[#39FF14]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-[#39FF14] transition-colors">
                  {service.name}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
