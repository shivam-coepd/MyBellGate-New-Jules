import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Features", path: "/features" },
    { name: "Security", path: "/security" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-t-2 border-secondary bg-white/80 backdrop-blur-md shadow-ambient">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tighter text-primary flex items-center gap-2"
        >
          {/* <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span> */}
          <img
            src="src/assets/mygatebell_logo.png"
            alt="MyGateBell Logo"
            className="w-7 h-7 md:w-9 md:h-9 object-contain transition-transform duration-300 hover:scale-110"
          />
          <span className="">MyGateBell</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans'] text-sm tracking-tight antialiased">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${
                isActive(link.path)
                  ? "text-secondary font-semibold border-b-2 border-secondary pb-1"
                  : "text-on-surface-variant hover:text-secondary hover:font-semibold transition-all"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="px-5 py-2.5 text-sm font-medium text-on-surface-variant hover:text-secondary hover:font-semibold hover:bg-secondary-container/10 rounded-[10px] transition-all">
            Login
          </button>
          <button className="px-5 py-2.5 text-sm font-medium bg-secondary text-white rounded-[10px] shadow-lg active:scale-95 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
