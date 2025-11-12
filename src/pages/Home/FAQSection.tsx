import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null); // Only one open
  const [showMore, setShowMore] = useState(false);

  const initialFAQs = [
    {
      question: "What products does Chemid Inc. specialize in?",
      answer: "We specialize in sustainable materials, advanced polymers, and eco-friendly chemical solutions for industrial and consumer use.",
    },
    {
      question: "Is Chemid committed to sustainability?",
      answer: "Yes, we are deeply committed to sustainability through innovation, waste reduction, and green chemistry practices.",
    },
    {
      question: "How many countries do you operate in?",
      answer: "We have a presence in over 85 countries and serve clients globally.",
    },
  ];

  const additionalFAQs = [
    {
      question: "Do you offer custom chemical solutions?",
      answer: "Yes, we provide tailored chemical formulations based on client specifications and industry requirements.",
    },
    {
      question: "What is your R&D focus?",
      answer: "Our R&D focuses on green chemistry, recyclable materials, and energy-efficient production methods.",
    },
  ];

  const allFAQs = [...initialFAQs, ...additionalFAQs];

  return (
    <section className="md:w-[30%] relative">
      {/* Floating Question Icon */}
     <FaQuestion className='text-[20vw] absolute top-[5vw] right-[-30%] text-[var(--muted)] floating' />

      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-xl relative"
        >
          {/* Header */}
          <div className="mb-8">
            <h3
              className="md:text-[0.6vw] text-[3vw] uppercase tracking-wider text-[var(--primary)] mb-2 md:w-[18vw] text-center p-2 rounded-4xl bg-[var(--muted)]"
            
            >
              WORKING TOGETHER TO CREATE POSITIVE, LASTING IMPACT
            </h3>
            <h2
              className="md:text-[3vw] text-4xl font-bold text-[var(--primary)] mb-6"
             
            >
              Brighter & Healthier Future
            </h2>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {allFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: 'auto',
                }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                // Only show if it's in the visible list
                style={{
                  display: index < 3 || showMore ? 'block' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full border-b md:text-[1vw] border-[var(--secondary)] flex justify-between items-center py-4 text-left text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300"
               
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`md:w-[1.2vw] md:h-[1.2vw] w-[5vw] h-[5vw] text-[var(--primary)] transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <motion.div
                  initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  animate={
                    openFAQ === index
                      ? { opacity: 1, height: 'auto' }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p
                    className="text-gray-600 mt-2 md:text-[0.9vw] text-sm"
                    style={{ lineHeight: '1.6' }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowMore(!showMore)}
            className="mt-8 inline-flex items-center md:text-[1vw] px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-md hover:bg-[var(--secondary)] transition-colors duration-300"
           
          >
            {showMore ? 'View Less' : 'View All'} →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;