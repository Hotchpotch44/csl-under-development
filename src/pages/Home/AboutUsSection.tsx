import { motion } from 'framer-motion';
import { GiOilDrum } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const WeProvide = () => {
  return (
    <section className="py-20 relative overflow-hidden flex items-center min-h-screen">

        <GiOilDrum className='absolute md:text-[25vw] text-[60vw] left-[-5%] top-[10vh]  text-[var(--primary)]/12 rotate-12 floating' />
      {/* Hexagon Background Pattern */}
      <div className="w-[80vw] mx-auto md:px-[2vw] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-[3vw] ">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 md:text-center lg:text-left border-r-2 border-[var(--secondary)]"
          >
            <span className="inline-block shadow-2xl bg-[var(--muted)] text-[var(--secondary)] text-xs font-semibold px-[1vw] py-[0.6vw] rounded-full uppercase tracking-wider mb-[1.2vh]">
              Laboratory
            </span>
            <div className='md:w-[38vw] w-[80vw] absolute h-[2px] bg-[var(--secondary)] mb-[1vw]'></div>

            <h2 className="md:text-[3vw] text-2xl font-bold text-[var(--primary)] mb-[2vw] leading-tight">
              We Provide Reliable & High-Quality Chemical Solutions
            </h2>

            <p className="text-gray-600 mb-[2vw] md:text-[1vw] leading-relaxed">
              Welcome to <strong>Color Star Chem</strong>, a leading chemical manufacturing and research facility dedicated to innovation, safety, and sustainability.
              We specialize in the development and production of advanced industrial chemicals, specialty polymers, and sustainable materials.
            </p>

            <ul className="space-y-4  mb-[3vw]">
              <li className="flex items-start">
                <svg className="md:w-[1vw] md:h-[1vw] h-[5vw] w-[5vw] text-[var(--primary)] mt-[0.2vw] mr-[0.5vw] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 md:text-[0.8vw] text-sm">Advanced R&D in green chemistry and sustainable processes</span>
              </li>
              <li className="flex items-start">
                <svg className="md:w-[1vw] md:h-[1vw] h-[5vw] w-[5vw] text-[var(--primary)] mt-[0.2vw] mr-[0.5vw] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700  md:text-[0.8vw] text-sm">ISO-certified facilities with strict quality control</span>
              </li>
              <li className="flex items-start">
                 <svg className="md:w-[1vw] md:h-[1vw] h-[5vw] w-[5vw] text-[var(--primary)] mt-[0.2vw] mr-[0.5vw] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700  md:text-[0.8vw] text-sm">Supplying high-purity chemicals to global industries</span>
              </li>
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center px-[2vw] py-[1vw] bg-[var(--primary)] text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Right Side: Images & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 md:flex gap-[2vw] space-y-6"
          >
            <div className="relative group  md:w-[35vw]">
              <img
                src="https://i.imgur.com/VAI7n8b.jpeg"
                alt="Research Scientist"
                className="rounded-xl shadow-lg w-full object-cover hover:scale-105 transition-transform duration-300 border-2 border-[var(--primary)]/40"
              />
                <div className="bg-white p-[2vw] border-4 border-[var(--primary)]/20 rounded-xl shadow-lg flex items-center justify-between mt-[3vh] animate-bounce">
                <div className='md:h-[2vw] md:w-[2vw] h-[10vw] w-[10vw] rounded-full bg-[var(--primary)] absolute bottom-[-1.2vw] left-[-1vw]'></div>
              <div className="md:text-[3vw] text-5xl font-bold text-[var(--primary)]  p-5 rounded-2xl bg-[var(--muted)]">15</div>
              <div className="text-gray-700 ml-2">
                <div className="font-semibold text-2xl md:text-[1vw]">Years</div>
                <div className="text-sm md:text-[0.7vw]">Of Experience in Chemical Manufacturing</div>
              </div>
            </div>
            </div>

          

            <div className="relative group ">
              <img
                src="https://i.imgur.com/ekpH84R.jpeg"
                alt="Lab Technician"
                className="rounded-xl md:h-[40vh] mt-20 shadow-lg w-full object-cover border-2 border-[var(--primary)]/40 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeProvide;