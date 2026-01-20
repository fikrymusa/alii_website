
import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

// import Header from "../components/layout/Header";
// import Footer from "../components/layout/Footer";
import { Outlet } from "react-router";
import Sidebar from "./admin/Sidebar";
import Header from "./admin/Header";
import Footer from "./admin/Footer";


// import Sidebar from "../components/layout/SIdebar";
// import { fetchData } from "../utils/api";


// Layout
const LayoutPrivate = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={``}>
      <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-900">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

        {/* Main */}
        <div className="flex flex-col flex-1">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* <Breadcrumbs title={"heeel"}/> */}
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LayoutPrivate;
