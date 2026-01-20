import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">@ wone</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
            <a href="#sourcing" className="text-gray-700 hover:text-gray-900 font-medium">Sourcing</a>
            <a href="#evaluation" className="text-gray-700 hover:text-gray-900 font-medium">Evaluation</a>
            <a href="#tracking" className="text-gray-700 hover:text-gray-900 font-medium">Tracking</a>
            <a href="#communication" className="text-gray-700 hover:text-gray-900 font-medium">Communication</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Get early access
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
              <a href="#sourcing" className="text-gray-700 hover:text-gray-900 font-medium">Sourcing</a>
              <a href="#evaluation" className="text-gray-700 hover:text-gray-900 font-medium">Evaluation</a>
              <a href="#tracking" className="text-gray-700 hover:text-gray-900 font-medium">Tracking</a>
              <a href="#communication" className="text-gray-700 hover:text-gray-900 font-medium">Communication</a>
              <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full">
                Get early access
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;