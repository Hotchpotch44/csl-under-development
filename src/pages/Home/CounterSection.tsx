import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import FAQSection from './FAQSection';
import { GiChemicalBolt } from 'react-icons/gi';

const CounterSection = () => {
  const [values, setValues] = useState([0, 0, 0, 0]);
  const hasAnimated = useRef(false);

  const stats = [
    {
      number: 36,
      label: "GLOBAL BUSINESS UNITS",
      description: "Chemid operates 36 individual business units across various sectors, including chemicals, oil & gas, and consumer products.",
    },
    {
      number: 85,
      label: "MARKETS WITH A PRESENCE",
      description: "Our products and solutions are available in over 100 countries, supporting a wide range of industries worldwide.",
    },
    {
      number: 15000,
      label: "EMPLOYEES WORLDWIDE",
      description: "Chemid is powered by a global workforce of over 15,000 dedicated professionals across multiple regions.",
    },
    {
      number: 80,
      label: "WASTE REDUCTION",
      description: "Through our recycling initiatives, Chemid has helped reduce plastic and chemical waste by 80% across several key markets.",
    },
  ];

  // ✅ Trigger animation when in view
  const handleAnimationStart = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    stats.forEach((stat, index) => {
      const duration = 1500;
      const start = Date.now();
      const animate = () => {
        const now = Date.now();
        const elapsed = now - start;
        if (elapsed < duration) {
          const progress = elapsed / duration;
          const valueNow = Math.floor(progress * stat.number);
          setValues((prev) => {
            const newValues = [...prev];
            newValues[index] = valueNow;
            return newValues;
          });
          requestAnimationFrame(animate);
        } else {
          setValues((prev) => {
            const newValues = [...prev];
            newValues[index] = stat.number;
            return newValues;
          });
        }
      };
      requestAnimationFrame(animate);
    });
  };

  return (
    <section className=" md:flex gap-5 justify-center min-h-screen relative items-center my-20">
        <GiChemicalBolt className='md:text-[25vw] text-[60vw] absolute left-[-2vw] text-[var(--muted)] floating' />
        <div className='w-[95%] h-[2px] absolute left-[2vw] top-[5vw] bg-[var(--primary)] rounded-2xl'/>
        <div className='w-[2px] h-[90vh] absolute left-[5vw] top-[1vw] bg-[var(--primary)] rounded-2xl'/>
        <div className='w-[60%] h-full absolute left-0 bg-[var(--primary)]/10 rounded-2xl'/>
      <div className="md:w-[50%]">
        {/* ✅ Use onViewportEnter to trigger animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={handleAnimationStart}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 z-20 relative"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-b border-[var(--muted)] pb-6"
            >
              <div className="flex flex-col">
                <span className="text-5xl md:text-[4vw] font-bold text-[var(--primary)]">
                  {values[index].toLocaleString()}
                  {index === 3 && '%'} {/* Add % for 80 */}
                </span>
                <p className="md:text-[1vw] font-bold uppercase tracking-wider text-gray-500 mt-2">{stat.label}</p>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-[0.9vw]">{stat.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <FAQSection/>
    </section>
  );
};

export default CounterSection;