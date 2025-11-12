import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GiFizzingFlask } from "react-icons/gi";
import CategoryData from "../../components/data/sayed/categories.json";

const ProductCategoriesSection = () => {
  const productCategories = CategoryData.categories;

  return (
    <section className="py-[5vw] relative overflow-hidden">
      {/* Background Glow */}
      <div
        className={`absolute top-[25%] right-0 w-[30vw] h-[30vw] rounded-full blur-[10vw] transition-opacity duration-1000 ease-in-out opacity-70
        bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)]`}
      ></div>

      {/* Floating Flask Icon */}
      <GiFizzingFlask className="md:text-[50vw] text-[80vw] left-[-10vw] top-[10vw] absolute text-[var(--primary)]/10 floating" />

      {/* Header Section */}
      <div className="md:max-w-[80vw]  mx-auto flex flex-col md:flex-row items-center gap-[5vw]">
        {/* Left Title */}
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <h2 className="md:text-[5vw] text-4xl font-bold text-[var(--primary)] md:leading-[5.5vw]">
            Our Product <br /> Categories
          </h2>
          <div className="w-[0.1vw] h-[120vh] top-[80%] md:left-[-5vw] left-[-20vw] absolute border border-[var(--primary)] "></div>
        </motion.div>

        {/* Right Description */}
        <motion.div
          initial={{ opacity: 0, x: 5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 w-[80vw] md:max-w-[40vw]"
        >
          <p className="md:text-[1.2vw] text-gray-700 md:leading-[1.8vw]">
            Explore our range of high-quality chemical products designed for
            industry, healthcare, and sustainability.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-[95vw] mx-auto px-[2vw] mt-[5vw] mb-[5vw] border border-[var(--primary)]"></div>

      {/* Category Grid */}
      <div className="max-w-[80vw] mx-auto px-[1vw] lg:px-[1vw] relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1vw]">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-[var(--primary)]/20 md:h-[55vh] bg-gradient-to-t from-[var(--primary)]/10 to-white p-[1vw] rounded-[2vw] shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              {/* Title + Circle */}
              <div className="h-[vw] mb-[vw] flex items-center gap-[1vw] relative">
                <div className="md:h-[2vw] md:w-[2vw] h-[10vw] w-[10vw] rounded-full bg-gradient-to-l from-[var(--primary)] to-[var(--muted)]" />
                <p className="md:text-[0.8vw] font-medium">{category.name}</p>
              </div>

              {/* Image */}
              <div className="relative h-[50%] mb-[0vw]  mt-[1vh] overflow-hidden rounded-4xl">
                <img
                  src={category.image_url}
                  alt={category.image_description}
                  className="w-full h-full rounded-[1.5vw] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute md:top-[1vw] top-[2vw] right-[5vw] md:right-[1vw] bg-white rounded-full px-[0.8vw] py-[0.4vw] text-[0.8vw] font-semibold flex items-center gap-[0.4vw]">
                  <Star className="md:w-[0.9vw] md:h-[0.9vw] text-[var(--primary)]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-[1vw]">
                <h3 className="md:text-[1.3vw] text-2xl font-semibold text-[var(--primary)] mb-[0.8vw]">
                  {category.name}
                </h3>
                <p className="text-gray-600 md:text-[1vw] md:leading-[1.5vw] mb-[1.5vw]">
                  {category.description}
                </p>

                {/* Bottom Icons */}
                <div className="flex items-center justify-between mt-[1vw]">
                  <div className="flex space-x-[0.8vw]">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <svg
                        className="md:w-[1vw] md:h-[1vw] h-[5vw] w-[5vw]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <svg
                       className="md:w-[1vw] md:h-[1vw] h-[5vw] w-[5vw]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <svg
                        className="md:w-[1vw] md:h-[1vw] h-[5vw] w-[5vw]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                      </svg>
                    </button>
                  </div>
                  <button className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors">
                    <svg
                      className="w-[1.4vw] h-[1.4vw]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
