import { motion } from 'framer-motion';
import { PiFlaskThin } from 'react-icons/pi';

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-t from-white to-[var(--accent)] z-[9999] flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Flask with Shake */}
        <motion.div
          animate={{
            rotate: [-5, 5, -5, 5, 0], // smoother sway
            y: [0, -4, 0, -2, 0],      // gentle bobbing
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 3, // slower & smoother
              ease: "easeInOut",
            },
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            },
          }}
          className="text-[var(--primary)] text-9xl relative"
        >
          <PiFlaskThin className="drop-shadow-lg" />
        </motion.div>

        {/* Bubbles Container */}
        <div className="absolute top-[10%] left-[58%] transform -translate-x-1/2 w-8 h-px">
          {/* This is where bubbles rise from */}
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className=" font-medium mt-4 text-4xl bg-gradient-to-r from-[black] to-[var(--primary)] border p-2 bg-clip-text text-transparent select-none"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageLoader;