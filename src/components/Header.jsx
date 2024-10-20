import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  // Determine active menu based on the current path
  const getActiveMenu = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path.startsWith("/About-us")) return "about";
    if (path.startsWith("/Product")) return "products";
    if (path.startsWith("/Investment")) return "Investments";
    if (path.startsWith("/Contact-us")) return "contact";
    if (path.startsWith("/Help-desk")) return "help";
    return "";
  };

  const activeMenu = getActiveMenu();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown("");
    } else {
      setOpenDropdown(menu);
    }
  };

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight text-gray-900">
          <a href="/" className="hover:opacity-75 transition-opacity duration-300">
            Keap <span className="text-amber-600">MicroFinance</span>
          </a>
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden lg:flex space-x-8 relative">
          <a
            href="/"
            className={`text-md font-medium hover:text-amber-400  transition-colors duration-200 ${
              activeMenu === "home" ? "text-amber-600 font-extrabold" : "text-gray-700"
            }`}
          >
            Home
          </a>
          <a
            href="/About-us"
            className={`text-md font-medium  hover:text-amber-400 transition-colors duration-200 ${
              activeMenu === "about" ? "text-amber-600 font-extrabold" : "text-gray-700"
            }`}
          >
            About Us
          </a>

          {/* Dropdown Menu for Products */}
          <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("products")}
            onMouseLeave={() => toggleDropdown("")}
          >
            <a
              className={`text-md font-medium flex items-center tra hover:text-amber-400 nsition-colors duration-200 ${
                activeMenu === "products" ? "text-amber-600 font-extrabold" : "text-gray-700"
              }`}
            >
             Products
              {/* Caret icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                  openDropdown === "products" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>

            {/* Dropdown */}
            {openDropdown === "products" && (
              <div className="absolute left-0 pt-5 w-48 py-2 bg-white shadow-lg rounded-md">
                <a
                  href="/Product/Loan-services"
                  className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-amber-600 hover:text-white"
                >
                  Loan Services
                </a>
                <a
                  href="/Product/Savings-Accounts"
                  className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-amber-600 hover:text-white"
                >
                  Savings Accounts
                </a>
              </div>
            )}
          </div>

          <a
            href="/Investment"
            className={`text-md font-medium transi hover:text-amber-400 tion-colors duration-200 ${
              activeMenu === "Investments" ? "text-amber-600 font-extrabold" : "text-gray-700"
            }`}
          >
            Investments
          </a>
          <a
            href="/Contact-us"
            className={`text-md font-medium tr hover:text-amber-400 ansition-colors duration-200 ${
              activeMenu === "contact" ? "text-amber-600 font-extrabold" : "text-gray-700"
            }`}
          >
            Contact Us
          </a>
          <a
            href="/Help-desk"
            className={`text-md font-medium hover:text-amber-400  transition-colors duration-200 ${
              activeMenu === "help" ? "text-amber-600 font-extrabold" : "text-gray-700"
            }`}
          >
            Help Center
          </a>
        </nav>

        {/* Apply Now button for larger screens */}
        <div className="hidden lg:block">
          <a
            href="/Comingsoon"
            className="bg-transparent border-2 border-amber-600 text-amber-600 shadow-md font-medium py-2 px-6 rounded-sm hover:bg-amber-600 hover:text-white transition-colors duration-200"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none hover:text-amber-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

        {/* Mobile Navigation */}
        <div
        className={`lg:hidden bg-white shadow-md fixed h-screen inset-0 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end bg-white p-4">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-amber-600 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start pl-2 space-y-6 mt-8">
          <a
            href="/About-us"
            className={`text-gray-700 text-xl font-medium ${
              activeMenu === "about" ? "text-amber-600 font-extrabold" : "hover:text-amber-600"
            } transition-colors duration-200`}
          >
            About Us
          </a>
          <div className="relative w-full">
            <button
              onClick={() => toggleDropdown("products")}
              className={`text-gray-700 text-xl font-medium flex justify-between items-center w-full ${
                activeMenu === "products" ? "text-amber-600 font-extrabold" : "hover:text-amber-600"
              } transition-colors duration-200`}
            >
              Products <span className={`ml-2 ${openDropdown === "products" ? "rotate-180" : ""}`}>▼</span>
            </button>
            {openDropdown === "products" && (
              <div className="mt-2 bg-white rounded-md shadow-md w-full">
                <a
                  href="/Product/Loan-services"
                  className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-amber-600 hover:text-white"
                >
                  Loan Services
                </a>
                <a
                  href="/Product/Savings-Accounts"
                  className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-amber-600 hover:text-white"
                >
                  Savings Accounts
                </a>
              </div>
            )}
          </div>
          <a
            href="/Investment"
            className={`text-gray-700 text-xl font-medium ${
              activeMenu === "Investments" ? "text-amber-600 font-extrabold" : "hover:text-amber-600"
            } transition-colors duration-200`}
          >
            Investments
          </a>
          <a
            href="/Contact-us"
            className={`text-gray-700 text-xl font-medium ${
              activeMenu === "contact" ? "text-amber-600 font-extrabold" : "hover:text-amber-600"
            } transition-colors duration-200`}
          >
            Contact Us
          </a>
          <a
            href="/Help-desk"
            className={`text-gray-700 text-xl font-medium ${
              activeMenu === "help" ? "text-amber-600 font-extrabold" : "hover:text-amber-600"
            } transition-colors duration-200`}
          >
            Help Center
          </a>
          <a
            href="/apply"
            className="bg-amber-600 text-white font-medium py-3 px-8 rounded-full hover:bg-amber-700 transition duration-300"
          >
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;