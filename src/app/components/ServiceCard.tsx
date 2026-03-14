import { Link } from 'react-router';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, image, link, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Link
        to={link}
        className="group block bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#39FF14]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#39FF14]/10 h-full"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Icon badge */}
          <div className="absolute top-6 left-6 w-14 h-14 rounded-xl bg-black/80 backdrop-blur-sm border border-[#39FF14]/30 flex items-center justify-center group-hover:border-[#39FF14] transition-colors duration-300">
            <Icon className="w-7 h-7 text-[#39FF14]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#39FF14] transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-zinc-400 leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex items-center gap-2 text-[#39FF14] font-semibold group-hover:gap-3 transition-all duration-300">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
