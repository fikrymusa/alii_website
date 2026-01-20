import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/program", label: "Program" },
    { href: "/kontak", label: "Kontak" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 shadow-sm border-b border-gray-200" 
          : "bg-white"
      }`}
    >
      <div className="max-w-screen-2xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <img
                alt="logo alii uinjkt"
                src="/assets/images/alii-logo-black.png"
                className="h-8 w-auto"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/120x32?text=ALII";
                }}
              />
              <div className="hidden sm:block">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900 leading-tight">ALII</span>
                  <span className="text-xs text-gray-500 leading-tight">UIN Jakarta</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="/auth/login"
              className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors duration-200 shadow-sm"
            >
              Login
            </a>
          </div>

          {/* Hamburger menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              ref={hamburgerRef}
              onClick={toggleMenu}
              className="hamburger-btn p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - ABSOLUTE POSITIONING */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-16 left-0 right-0 mx-4 bg-white rounded-lg shadow-xl border border-gray-200 z-50 md:hidden overflow-hidden"
            >
              {/* Navigation Items */}
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Login Button */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <a
                  href="/auth/login"
                  className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors duration-200 shadow-sm"
                  onClick={handleNavClick}
                >
                  Login
                </a>
              </div>

              {/* Footer with Arabic Text */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <p className="text-xs text-gray-500 text-center mb-1">
                  ALII UIN Jakarta
                </p>
                <p className="text-xs text-gray-400 text-center leading-relaxed" style={{ fontFamily: 'system-ui' }}>
                  آنا مدينة العلم وعلي بابه
                </p>
                <p className="text-xs text-gray-400 text-center mt-1">
                  "Aku adalah kota ilmu dan Ali adalah pintunya"
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;