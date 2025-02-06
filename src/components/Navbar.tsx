import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [showMenu, setShowMenu] = useState(false);

  // Unified click handler for all menu items
  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId); // Scroll to section
    setShowMenu(false); // Close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="w-full">
        <div className="flex justify-between items-left">
          <button
            onClick={() => handleMenuClick("topsec")}
            className="px-8 py-4 text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Yash Aanand
            </h1>
          </button>

          {/* Mobile menu button */}
          <div className="sm:hidden px-4 py-4">
            <button
              type="button"
              onClick={() => setShowMenu(!showMenu)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={showMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${showMenu ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${showMenu ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex gap-2 px-8">
            <button
              onClick={() => handleMenuClick("about")}
              className="rounded-lg text-gray-300 hover:text-blue-400 transition-colors my-2 px-3 hover:bg-gradient-to-r from-purple-600 to-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-300"
            >
              About
            </button>
            <button
              onClick={() => handleMenuClick("projects")}
              className="rounded-lg text-gray-300 hover:text-blue-400 transition-colors my-2 px-3 hover:bg-gradient-to-r from-purple-600 to-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => handleMenuClick("resume")}
              className="rounded-lg text-gray-300 hover:text-blue-400 transition-colors my-2 px-3 hover:bg-gradient-to-r from-purple-600 to-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-300"
            >
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="sm:hidden origin-top bg-gray-900/70 backdrop-blur-md shadow-xl rounded-lg"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {},
              }}
              className="space-y-2 px-4 py-3"
            >
              {["About", "Projects", "Resume"].map((item, index) => (
                <motion.button
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  onClick={() => handleMenuClick(item.toLowerCase())}
                  className="block w-full text-center rounded-lg px-4 py-3 text-lg font-semibold text-gray-300 hover:bg-gradient-to-r from-purple-600 to-blue-500 hover:text-white transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-300"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
