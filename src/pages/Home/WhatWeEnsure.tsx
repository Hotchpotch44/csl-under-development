"use client";
import { motion } from "framer-motion";
import { Award, Leaf, Shield, Users } from "lucide-react";
import { BsArrowUpRight } from "react-icons/bs";
import Circle from "../../components/Common/Circle";

const whyChooseUs = [
  {
    id: "01",
    icon: Award,
    title: "ISO Certified Quality",
    description:
      "All our products meet international quality standards lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    shortDesc: "*Eum no idque amet deterrus",
  },
  {
    id: "02",
    icon: Shield,
    title: "Safety First",
    description:
      "Comprehensive safety protocols in all operations lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    shortDesc: "*Eum no idque amet deterrus",
  },
  {
    id: "03",
    icon: Leaf,
    title: "Environmental Commitment",
    description:
      "Sustainable practices and eco-friendly solutions lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    shortDesc: "*Eum no idque amet deterrus",
  },
  {
    id: "04",
    icon: Users,
    title: "Expert Team",
    description:
      "Experienced chemists and industry professionals lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    shortDesc: "*Eum no idque amet deterrus",
  },
];

const WhatWeEnsure = () => {
  return (
    <section className="relative w-full pt-[10%] min-h-[120vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Circle Background */}
      <div className="absolute left-[-2%] top-[25%] w-full h-full">
        <Circle />
      </div>

      {/* Faint Background Image */}
      <img
        src="https://i.imgur.com/L0EIepn.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 border-b-2 border-[var(--primary)] pb-4 mb-20">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative text-center md:text-left"
        >
          <h2 className="text-[8vw] md:text-[5vw] font-bold text-[var(--primary)] leading-tight">
            What we <br /> ensuring
          </h2>
          <div className="hidden md:block absolute top-0 left-[-0.2vw] w-[1px] h-[300px] border border-[var(--primary)]"></div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 max-w-2xl text-center md:text-left"
        >
          <p className="text-gray-700 text-[3vw] md:text-lg leading-relaxed">
            Chemid Inc. is committed to advancing sustainable material solutions
            and cutting-edge recycling technologies, driving a cleaner and more
            sustainable future for the benefit of future generations.
          </p>
        </motion.div>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-6 w-full px-6 md:px-0">
        {whyChooseUs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative group border-2 border-black/10 bg-white/10 backdrop-blur-sm transition-all duration-300 cursor-pointer overflow-hidden 
              p-6 sm:p-8 w-full sm:w-[45%] lg:w-[23%] min-h-[50vw] sm:min-h-[30vw] lg:min-h-[25vw]`}
          >
            {/* ID Number */}
            <p className="text-[10vw] sm:text-[5vw] lg:text-[3em] text-[var(--primary)] stroke-text">
              {item.id}
            </p>

            {/* Hover Arrow */}
            <motion.div
              className="absolute top-6 right-6 w-6 h-6 text-gray-400 group-hover:text-[var(--primary)] transition-colors duration-300"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <BsArrowUpRight className="text-[6vw] sm:text-[3vw] lg:text-[2vw] group-hover:text-[var(--primary)] duration-300 group-hover:rotate-45 transition-all" />
            </motion.div>

            {/* Card Content */}
            <div className="flex flex-col pl-2 pt-4 sm:pl-5 sm:pt-5">
              {/* Icon */}
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-2xl flex items-center justify-center text-white"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--primary), var(--secondary))",
                }}
              >
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              {/* Title */}
              <h3 className="text-[4vw] sm:text-[2vw] lg:text-[1.3vw] font-bold group-hover:text-[var(--primary)] transition-all duration-500 mb-3 sm:mb-5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[3vw] sm:text-[1.5vw] lg:text-[0.8vw] mb-4">
                {item.description}
              </p>

              {/* Short Description */}
              <p className="text-gray-500 text-[2.5vw] sm:text-[1vw] mt-2 sm:mt-4">
                {item.shortDesc}
              </p>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeEnsure;
