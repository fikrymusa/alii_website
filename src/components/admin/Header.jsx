import { Moon, Sun, User, LogOut, Settings, Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { logout } from "../../utils/api";
// import { logout } from "../../utils/api";
// import AmiPeriode from "../AmiPeriode";


const Header = ({ darkMode, setDarkMode, onMenuToggle }) => {

  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const ud = JSON.parse(localStorage.getItem("data")) || null;

  const changeDarkmod = () => {
    localStorage.setItem('darkmode', darkMode)
  }

  useEffect(() => {
    changeDarkmod()
  },[darkMode])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-gray-800 dark:to-gray-700 text-white shadow-md">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          {/* Hamburger Menu untuk Mobile */}
          {isMobile && (
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg hover:bg-white/20 transition"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          
          <h2 className="text-lg font-semibold capitalize truncate max-w-[140px] md:max-w-none">
            {ud && ud?.role} ALII Dashboard
          </h2>
        </div>
        
        <div className="flex items-center gap-3 relative">
          {/* Search Input untuk Desktop */}
          {!isMobile && (
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-lg px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-900 w-40 lg:w-56"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          )}

          {/* Search Toggle untuk Mobile */}
          {isMobile && (
            <>
              {showSearch ? (
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-gray-800 dark:to-gray-700 p-4 flex items-center z-10">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="rounded-lg px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-900 w-full pr-10"
                      autoFocus
                    />
                    <button 
                      onClick={() => setShowSearch(false)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 dark:text-gray-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 rounded-lg hover:bg-white/20 transition"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </>
          )}

          {/* <AmiPeriode /> */}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-white/20 transition hidden sm:block"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white flex-shrink-0"
            >
              <img
                src="https://i.pravatar.cc/100" // contoh avatar dummy
                alt="User"
                className="w-full h-full object-cover"
              />
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseLeave={()=>setOpen(false)}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl shadow-lg overflow-hidden z-40"
                >
                  <ul className="flex flex-col">
                    <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                      <User size={16} /> Profile
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                      <Settings size={16} /> Settings
                    </li>
                    <li onClick={logout} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                      <LogOut size={16} /> Logout
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;