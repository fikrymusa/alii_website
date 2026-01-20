import { motion } from "framer-motion";
// import { menu } from "../../utils/constants/menu";
import { Menu, LogOut, ArrowBigLeft } from "lucide-react";

import { useState, useRef, useEffect } from "react";
// import { userDetail } from "../../utils/api";
import SidebarProfile from "./SidebarProfile";
import { menu } from "../../utils/menu";

const Sidebar = ({ isOpen, toggle }) => {
  const userDetail = ""
  const ud = userDetail;
  const role = ud?.role || 'admin'
  const navRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({});

const updateTooltipPosition = (index, rect) => {
  setTooltipPosition(prev => ({
    ...prev,
    [index]: {
      top: rect.top + rect.height / 2,
      visible: true
    }
  }));
};

// Fungsi untuk menyembunyikan tooltip
const hideTooltip = (index) => {
  setTooltipPosition(prev => ({
    ...prev,
    [index]: {
      ...prev[index],
      visible: false
    }
  }));
};

  return (
    <motion.aside
      initial={{ width: 72 }}
      animate={{ width: isOpen ? 240 : 72 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
      className="h-screen bg-gradient-to-b from-blue-400 to-blue-600 dark:from-gray-900 dark:to-gray-800 text-white shadow-lg sticky top-0 flex flex-col justify-between"
    >
      {/* Wrapper atas harus flex-1 agar nav bisa scroll */}
      <div className="flex flex-col flex-1 min-h-0">
        {/* Header Sidebar */}
        <div className="flex items-center justify-between p-4 flex-shrink-0">
          {isOpen && (
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-xl font-bold whitespace-nowrap">ALII</h1>
              <span className="text-sm opacity-75 pt-2">V.01</span>
            </div>
          )}
          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:bg-white/20 transition"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Menu */}
        <nav 
          ref={navRef}
          className="flex-1 overflow-y-auto mt-4 space-y-2 pr-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent overflow-visible"
        >
          {menu &&
            menu
            .filter(it => it.role === role)
            .map((item, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={(e) => {
                  if (!isOpen) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    updateTooltipPosition(index, rect);
                  }
                }}
                onMouseLeave={() => !isOpen && hideTooltip(index)}
              >
                <a 
                  href={item?.path}
                  className="group relative flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-white/20 rounded-lg transition"
                >
                  {/* Icon */}
                  {item.icon}

                  {/* Label jika sidebar open */}
                  {isOpen && <span>{item.label}</span>}
                </a>

                {/* Tooltip jika sidebar close */}
                {!isOpen && (
                  <div 
                    className="fixed px-2 py-1 rounded-md bg-gradient-to-r from-blue-400 to-blue-800 text-white text-xs whitespace-nowrap transition-all duration-200 z-50 pointer-events-none shadow-lg"
                    style={{
                      opacity: tooltipPosition[index]?.visible ? 1 : 0,
                      top: tooltipPosition[index]?.top,
                      left: 72 + 8, // Lebar sidebar + margin
                      transform: 'translateY(-50%)'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <ArrowBigLeft size={15} />
                      {item.label}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </nav>
      </div>

      {/* User Info Sticky Bottom */}
      <SidebarProfile isOpen={isOpen} />
    </motion.aside>
  );
};

export default Sidebar;