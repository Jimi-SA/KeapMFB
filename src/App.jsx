import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import HelpDesk from "./pages/HelpDesk";
import Investment from "./pages/Investment";
import ChatBot from "./components/Chatbot";
import CookieConsent from "./components/CookieConsent";
import ComingSoon from "./components/ComingSoon";
import LoanServices from "./pages/products/LoanServices";
import SavingsAccounts from "./pages/products/SavingsAccounts";

const App = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      setAtTop(true); // Ensure at top state is properly set
      setShowHeader(true); // Always show header at the top
    } else {
      setAtTop(false);
    }

    // Debounce scroll event handling to avoid too many updates
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setShowHeader(false); // Hide on scroll down
    } else if (currentScrollY < lastScrollY.current) {
      setShowHeader(true); // Show on scroll up
    }

    lastScrollY.current = currentScrollY; // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation styles for header
  const headerStyle = useSpring({
    transform: showHeader ? "translateY(0)" : "translateY(-100%)",
    config: { tension: 250, friction: 30 }, // Smoother animation
  });

  return (
    <Router>
      <span className="md:flex hidden justify-end bg-teal-950 space-x-7 text-white py-2 pr-10">
        <FaFacebook className="h-4 w-4 cursor-pointer hover:text-gray-400" />
        <FaLinkedin className="h-4 w-4 cursor-pointer hover:text-gray-400" />
        <FaInstagram className="h-4 w-4 cursor-pointer hover:text-gray-400" />
        <FaTwitter className="h-4 w-4 cursor-pointer hover:text-gray-400" />
      </span>
      <animated.div
        className={`${
          atTop ? "" : "fixed top-0 w-full z-50 left-0"
        } transition-transform duration-300 ease-in-out`}
        style={headerStyle}
      >
        <Header />
      </animated.div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<Aboutus />} />
        <Route path="/Contact-us" element={<Contactus />} />
        <Route path="/Help-desk" element={<HelpDesk />} />
        <Route path="/Investment" element={<Investment />} />
        <Route path="/Product/Loan-services" element={<LoanServices />} />
        <Route path="/Product/Savings-Accounts" element={<SavingsAccounts />} />
        <Route path="/Comingsoon" element={<ComingSoon />} />
      </Routes>
      <Footer />
      <ChatBot/>
      <CookieConsent/>
    </Router>
  );
};

export default App;
