import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { LiaFlaskSolid } from "react-icons/lia";
import { GiChemicalDrop, GiFizzingFlask } from "react-icons/gi";
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Each slide now includes two extra small images
const heroSlides = [
  {
    id: "01",
    title: "Innovating the Future of Chemical Manufacturing",
    subtitle:
      "At Color Star Chem, we develop sustainable and high-performance textile auxiliaries, dyes, and industrial chemicals. Our mission is to support industries with advanced formulations that ensure quality, safety, and environmental responsibility.",
    image:
      "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Explore Products",
    smallImg1: "https://i.imgur.com/VAI7n8b.jpeg",
    smallImg2:
      "https://images.pexels.com/photos/3822765/pexels-photo-3822765.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    small_card: {
      title: "Quality That Performs",
      description: "We deliver chemical solutions that combine innovation, reliability, and sustainability.",
    },
    hero_icon: <LiaFlaskSolid />,
  },
  {
    id: "02",
    title: "Global Experts in Chemical Import & Export",
    subtitle:
      "We specialize in sourcing and distributing high-grade chemicals for textile, leather, and industrial applications. With strong partnerships and a focus on quality control, we ensure timely delivery and consistent performance worldwide.",
    image:
      "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Learn More",
    smallImg1: "https://i.imgur.com/QL8l5vZ.jpeg",
    smallImg2:
      "https://images.pexels.com/photos/3822765/pexels-photo-3822765.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    small_card: {
      title: "Global Network",
      description: "Trusted by industries worldwide for our consistency and chemical excellence.",
    },
    hero_icon: <GiFizzingFlask />,
  },
  {
    id: "03",
    title: "Comprehensive Chemical Solutions Worldwide",
    subtitle:
      "From textile auxiliaries to specialty dyes, Color Star Chem serves industries across continents with innovative formulations. Our focus on R&D and customer satisfaction drives us to create solutions that empower progress.",
    image:
      "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Contact Us",
    smallImg1: "https://i.imgur.com/ekpH84R.jpeg",
    smallImg2:
      "https://images.pexels.com/photos/3822765/pexels-photo-3822765.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    small_card: {
      title: "Innovative Chemistry",
      description: "Driven by science, inspired by sustainability — chemistry that creates a better tomorrow.",
    },
    hero_icon: <GiChemicalDrop />,
  },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 15000); // Change slide every 15 seconds
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const goToPrev = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  const current = heroSlides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Full Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          exit={{ scale: 1.3 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.image})` }}
          />

          {/* Black Overlay with full fade */}
          <motion.div
            initial={{ opacity: 1 }} // fully black on enter
            animate={{ opacity: 0.5 }} // relax to semi-transparent
            exit={{ opacity: 1 }} // fully black on exit
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-black"
          />
        </motion.div>
      </AnimatePresence>

      {/* Animated Content (Text + Small Images) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-[1vw]"
        >
          <div className=" md:mb-[5vh] mb-[22vh]">
            <h1 className="md:text-[7vw] text-[10vw]  font-bold mb-[10vh] bg-gradient-to-r from-white to-[var(--secondary)] bg-clip-text text-transparent  stroke-white">
              {current.title}
            </h1>
          </div>

          {/* Small Images - Bottom Right */}
          <div className="absolute bottom-[2vw]  left-[4vw] md:flex hidden space-x-4 w-[25vw] justify-end">
            <motion.img
              src={current.smallImg1}
              alt="Detail 1"
              className="w-[50%] h-[20vh] border-2 border-[var(--accent)]/40 object-cover rounded-lg shadow-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            />
            <motion.div
              className="w-[30vw] h-[20vh] rounded-xl border-2 border-[var(--accent)]/40 p-[0.4vw] bg-white/20 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-start text-[0.9vw]">
                {current.small_card?.title}
              </p>
              <p className="text-start text-[0.7vw] mt-[1.2vh] border-t pt-[0.5vw]">
                {current.small_card?.description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="md:w-[20vw] w-[92.2vw] h-[35vh] rounded-xl p-[1.5vw]  z-10 md:bottom-[2vw] bottom-[14vh] right-[4vw] absolute bg-white/20 backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, ease: "easeOut" }}
        >
          <p className="md:text-[4vw] text-5xl text-[var(--accent)] border-b mb-[1vh]">
            {current?.id}
          </p>
          <p className="md:text-[0.8vw] text-[4vw] text-white text-justify">
            {current.subtitle}
          </p>
        </motion.div>
        <motion.div
          className="z-10 md:bottom-[28vh] md:left-[-2vw] left-[20vw] bottom-[55vh] absolute floating"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, ease: "easeOut" }}
        >
          <p className="md:text-[20vw] text-[60vw] text-white/10">{current.hero_icon}</p>
        </motion.div>
      </AnimatePresence>

      {/* Slider Dots */}
      <div className="absolute  md:gap-[0.4vw] gap-[2vw] md:bottom-[2vw] bottom-[8vw] md:left-[48vw] left-[77vw] flex flex-col justify-center items-end md:items-center z-30">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300  ${
              currentSlide === index
                ? "bg-[var(--accent)] w-18 h-1"
                : "bg-white/50 w-10 h-1"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-[4vw] md:bottom-[25vh] bottom-0 border-2 border-[var(--accent)]/40 transform -translate-y-1/2 z-30 p-2 bg-white/10 cursor-pointer rounded-xl hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
      >
        <IoIosArrowRoundBack className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute md:left-[10vw] left-[20vw] md:bottom-[25vh] bottom-0 transform -translate-y-1/2 border-2 border-[var(--accent)]/40 z-30 p-2 bg-white/10 cursor-pointer rounded-xl hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
      >
        <IoIosArrowRoundForward className="w-8 h-8 text-white" />
      </button>
    </section>
  );
};

export default HeroSection;