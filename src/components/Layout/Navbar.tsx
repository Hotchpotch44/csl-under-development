import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowNavbar(window.scrollY <= lastScrollY || window.scrollY < 20);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => setIsMenuOpen(false), [location]);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`fixed top-0 left-0 w-full z-999 transition-all duration-300 border-b border-[var(--muted)]/10 ${isScrolled
              ? "bg-white/60 shadow-lg backdrop-blur-md text-black"
              : "bg-transparent text-white"
            }`}
        >
          <nav className="mx-auto w-full md:h-[6vw] h-[20vw]">
            <div className="flex justify-between items-center pt-[0.5vw] px-[3vw]">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: "-2vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <Link to="/" className="flex items-center">
                  <div className="md:w-[10vw] flex w-[15vw]">
                    <img
                      className="md:w-[4vw] w-[15vw]"
                      src="https://i.imgur.com/09ok0BR.png"
                      alt="logo"
                    />
                    <p>Beta</p>
                  </div>
                </Link>
              </motion.div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-[1.5vw]">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-[2vw] py-[0.4vw] text-center uppercase font-bold text-[0.8vw] rounded-[2vw] transition-all duration-200
                      ${location.pathname === item.path
                        ? "bg-[var(--primary)] text-white"
                        : isScrolled
                          ? "text-black hover:text-[var(--primary)] bg-white/20 hover:bg-white/40"
                          : "text-white border border-white/10 bg-white/20 backdrop-blur-md hover:text-[var(--primary)] hover:bg-white/30"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden w-[10vw] lg:block">
                 <Link to="/contact"><button className="px-[2vw] py-[0.8vw] rounded-[2vw] bg-[var(--primary)] text-white font-bold text-[1vw] transition-transform hover:scale-[1.03]">
                  Get A Quote!
                </button></Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-[1.2vw] rounded-[2vw]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <BiX className="w-[12vw] h-[12vw]" />
                ) : (
                  <BiMenu className="w-[12vw] h-[12vw]" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden bg-white/90 backdrop-blur-sm border-t border-gray-200"
                >
                  <div className="flex flex-col px-[4vw] py-[3vw] gap-[2vw]">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`px-[2.5vw] py-[1.2vw] text-center font-bold text-[3.5vw] rounded-[2vw] transition-colors
                          ${location.pathname === item.path
                            ? "bg-[var(--primary)] text-white"
                            : "text-black hover:text-[var(--primary)] bg-gray-100/50"
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link to="/contact">
                      <button className="mt-[1vw] px-[2.5vw] py-[1.2vw] rounded-[2vw] bg-[var(--primary)] text-white font-bold text-[3.5vw]">
                        Get A Quote!
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
