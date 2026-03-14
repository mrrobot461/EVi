import { motion } from 'motion/react';

interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
}

export function StatsSection({ stats, title, subtitle }: StatsSectionProps) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-8 text-center hover:border-[#39FF14]/50 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-[#39FF14] mb-3">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-lg mb-2">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-zinc-400 text-sm">
                  {stat.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
