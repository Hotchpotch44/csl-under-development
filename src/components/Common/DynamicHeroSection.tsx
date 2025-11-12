// components/HeroSection.tsx
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

const DynamicHeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section
      className="relative w-full overflow-hidden h-[45vh]"
    >
      {/* Gradient + overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, var(--primary), var(--secondary))',
        }}
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div
          className="text-center text-white px-[4vw] w-full"
          style={{ maxWidth: '1200px' }} // Prevent ultra-wide text on large screens
        >
          <motion.h1
            initial={{ opacity: 0, y: '2vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='md:text-[5vw] text-4xl'
            style={{
             
              lineHeight: 1.1,
              marginBottom: 'clamp(0.8rem, 2vw, 1.5rem)', // ~12px → 24px
              fontWeight: 800,
            }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: '2vh' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className='md:text-[2vw]'
              style={{
                
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DynamicHeroSection;