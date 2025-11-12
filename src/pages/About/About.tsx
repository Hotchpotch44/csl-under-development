"use client";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import DynamicHeroSection from "../../components/Common/DynamicHeroSection";

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <DynamicHeroSection
        title="About Us"
        subtitle="High-quality chemical solutions for every industry"
      />

      {/* About Section */}
      <motion.section
        className="w-[100vw] py-[6vw] px-[6vw] bg-(--secondary)/5"
      >
        <div className="max-w-[90vw] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[5vw]">
          {/* Left Content */}
          <motion.div

            className="w-full lg:w-[50%]"
          >
            <h2 className="md:text-[2.8vw] text-4xl font-bold text-(--primary) mb-[2vw] md:leading-[3.2vw]">
              Leading the Future of Chemical Innovation
            </h2>
            <p className="md:text-[1.1vw] text-gray-700 md:leading-[1.9vw] mb-[2vw]">
              At <span className="text-(--primary) font-semibold">Color Star Chem</span>,
              we are dedicated to delivering safe, effective, and sustainable
              chemical solutions across industries. With decades of expertise in
              <span className="text-(--secondary) font-medium"> textile, dyes, and laboratory formulations</span>,
              our mission is to empower manufacturers with reliable performance and
              environmental responsibility.
            </p>
            <p className="md:text-[1.1vw] text-gray-700 md:leading-[1.9vw] mb-[3vw]">
              We take pride in combining innovation with precision — ensuring
              every batch we produce meets the highest standards of quality and safety.
              From <span className="font-medium text-(--secondary)">research and development</span>
              to <span className="font-medium text-(--secondary)">global supply chains</span>,
              we deliver excellence at every step.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full md::w-[45%] relative"
          >
            <div className="relative rounded-[1.2vw] overflow-hidden shadow-lg">
              <img
                src="https://i.imgur.com/pZFOSPU.png"
                alt="About Color Star Chem"
                className="w-full h-[35vw] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-(--primary)/20 mix-blend-multiply"></div>
            </div>
            <div className="absolute bottom-[-2vw] right-[-2vw] bg-(--secondary) text-white px-[1.5vw] py-[1vw] rounded-[0.8vw] shadow-xl">
              <p className="md:text-[1.6vw] text-3xl font-bold">20+</p>
              <p className="md:text-[0.9vw] font-medium leading-tight text-sm">
                Years of<br />Experience
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission / Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-[100vw] py-[8vw] px-[6vw] bg-white"
      >
        <div className="max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[5vw]">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group p-[3vw] rounded-[1.5vw] border border-(--primary)/20 bg-gradient-to-br from-(--primary)/10 to-white hover:from-(--primary)/15 hover:to-white shadow-md hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute top-[-2vw] left-[3vw] bg-(--primary) p-[1vw] rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Target className="md:w-[2.2vw] md:h-[2.2vw] h-[8vw] w-[8vw] text-white" />
            </div>
            <div className="md:mt-[3vw] mt-[8vw]">
              <h3 className="md:text-[2vw] text-4xl font-bold text-(--primary) mb-[1.2vw] tracking-tight">
                Our Mission
              </h3>
              <p className="md:text-[1.1vw] text-gray-700 md:leading-[1.9vw]">
                To create sustainable and high-performance chemical solutions that
                empower industries while protecting the planet for future generations.
                We aim to deliver <span className="text-(--primary) font-medium">innovation, precision, and trust</span>
                in every molecule we produce.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group p-[3vw] rounded-[1.5vw] border border-(--secondary)/20 bg-gradient-to-br from-(--secondary)/10 to-white hover:from-(--secondary)/15 hover:to-white shadow-md hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute top-[-2vw] left-[3vw] bg-(--secondary) p-[1vw] rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Eye className="md:w-[2.2vw] md:h-[2.2vw] h-[8vw] w-[8vw] text-white" />
            </div>
            <div className="md:mt-[3vw] mt-[8vw]">
              <h3 className="md:text-[2vw] text-4xl  font-bold text-(--secondary) mb-[1.2vw] tracking-tight">
                Our Vision
              </h3>
              <p className="md:text-[1.1vw] text-gray-700 md:leading-[1.9vw]">
                To become a <span className="text-(--secondary) font-medium">global leader in chemical innovation</span>,
                known for quality, sustainability, and integrity — setting new standards
                in the world of industrial and textile chemistry.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
