import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PACKAGES", path: "/packages" },
    { name: "CONTACT", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src="/CeyCodez_Logo.png" alt="Logo" className="w-12 h-12" />
          <img src="/CeyCodez_name.png" alt="Name" className="w-40" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-semibold tracking-wide relative pb-2 transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-black/40 backdrop-blur-md rounded-b-xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-2 font-semibold transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
