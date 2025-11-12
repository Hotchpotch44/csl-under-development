import { motion } from "framer-motion";
import { Shield, Award, Leaf, CheckCircle } from "lucide-react";
import { FaFlaskVial } from "react-icons/fa6";
import {
  GiCellarBarrels,
  GiChemicalDrop,
  GiFizzingFlask,
  GiWaterFlask,
} from "react-icons/gi";
import { PiFlaskThin } from "react-icons/pi";

const Hero: React.FC = () => {
  return (
    <div>
      {/* Safety & Compliance */}
      <section className="py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] relative">
        <FaFlaskVial className="absolute top-[10%] left-20 floating text-4xl text-[var(--accent)]" />
        <GiFizzingFlask className="absolute hidden md:block top-[80%] left-40 floating text-4xl text-[var(--accent)]" />
        <PiFlaskThin className="absolute top-[75%] right-48  hidden md:block floating text-4xl text-[var(--accent)]" />
        <GiWaterFlask className="absolute top-[20%] right-40  hidden md:block floating text-4xl text-[var(--accent)]" />
        <GiCellarBarrels className="absolute top-[35%] right-[30%]  hidden md:block floating text-4xl text-[var(--accent)]" />
        <GiChemicalDrop className="absolute top-[20%] left-[25%]  hidden md:block floating text-4xl text-[var(--accent)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Safety & Compliance
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our commitment to safety and regulatory compliance is unwavering
              across all operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="w-full h-[2px] bg-white/40 absolute top-[50%]"></div>
            {[
              {
                icon: Shield,
                title: "OSHA Compliance",
                desc: "Full adherence to safety regulations",
              },
              {
                icon: Award,
                title: "ISO Certified",
                desc: "Quality management systems",
              },
              {
                icon: Leaf,
                title: "Environmental",
                desc: "Eco-friendly practices",
              },
              {
                icon: CheckCircle,
                title: "Regular Audits",
                desc: "Continuous monitoring",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-6 bg-gradient-to-t  z-20 from-[var(--primary)] to-[var(--secondary)] rounded-4xl shadow-md"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
