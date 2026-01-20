import React from "react";
import { ArrowBigRightDash, ArrowRightIcon, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-white py-16 overflow-hidden ">
      {/* Background Image dengan Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/footer.png"
          alt="Footer Background"
          className="w-full h-full object-cover rounded-t-3xl"
        />
        {/* Overlay untuk meningkatkan readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-t-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <h2 className="text-title font-semibold max-w-2xl text-center">
            Islamic AI for a Better Future{" "}
          </h2>
          <p className="max-w-xl text-center">
            ALII hadir untuk membentuk kemampuan digital dunia Islam agar mampu
            memimpin perubahan melalui literasi AI yang kuat, riset inovatif,
            dan komitmen menjaga kemaslahatan masyarakat.
          </p>

          <button className="bg-slate-100 rounded-xl  flex items-center gap-2 w-fit px-4 py-2">
            <span className="text-white p-2 rounded-md bg-black ">
              {/* <ArrowRight size={14}/> */}
              <ArrowRightIcon size={14} />
            </span>
            <p className="text-slate-800 text-sm">Join Our Innovation</p>
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            {/* <div className="text-2xl font-bold mb-4">@ ALII</div> */}
            <img alt="Logo ALII UINJKT" src="/assets/images/alii-logo-white.png" className="h-12"/>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              AI yang Menguatkan Ilmu Pengetahuan dan Akhlak: Sinergi Teknologi Cerdas dengan Etika Keislaman Modern
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 w-full sm:w-auto text-center">
                Get early news
              </button>
                  <a className="p-3 border border-gray-400 rounded-lg hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a className="p-3 border border-gray-400 rounded-lg hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto flex items-center justify-center">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a className="p-3 border border-gray-400 rounded-lg hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto flex items-center justify-center">
    TikTok
                  </a>

            </div>
          </div>

          {/* Features Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Main Menu</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/tentang"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="/program"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                >
                  Program
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                >
                  Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                >
                  Communication
                </a>
              </li> */}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Product</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                >
                  Early access
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 hover:underline"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 ALII-UINJKT. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
