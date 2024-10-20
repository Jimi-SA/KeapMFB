import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-950 px-8 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Information */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-amber-500 mb-4">
            Keap <span className="text-amber-600">MicroFinance</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering individuals and businesses with financial solutions to thrive and grow. Keap MicroFinance provides a range of loan, savings, and investment products tailored to meet your needs.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#products" className="hover:text-amber-600 transition-colors duration-200">Products</a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-600 transition-colors duration-200">About Us</a>
            </li>
            <li>
              <a href="#resources" className="hover:text-amber-600 transition-colors duration-200">Resources</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-600 transition-colors duration-200">Contact Us</a>
            </li>
            <li>
              <a href="#apply" className="hover:text-amber-600 transition-colors duration-200">Apply Now</a>
            </li>
          </ul>
        </div>
        
        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#help" className="hover:text-amber-600 transition-colors duration-200">Help Center</a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-amber-600 transition-colors duration-200">FAQs</a>
            </li>
            <li>
              <a href="#terms" className="hover:text-amber-600 transition-colors duration-200">Terms & Conditions</a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-amber-600 transition-colors duration-200">Privacy Policy</a>
            </li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-2">Address: 123 Bank Street, Financial District, City, Country</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-2">Phone: +123-456-7890</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-2">Email: info@Keapmicrofinance.com</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-amber-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.559c-.883.392-1.832.656-2.828.775a4.92 4.92 0 002.163-2.717 9.837 9.837 0 01-3.127 1.195 4.92 4.92 0 00-8.379 4.482 13.96 13.96 0 01-10.141-5.148 4.822 4.822 0 001.523 6.573 4.909 4.909 0 01-2.229-.616v.061a4.927 4.927 0 003.946 4.829 4.996 4.996 0 01-2.224.084 4.935 4.935 0 004.6 3.417A9.868 9.868 0 010 21.539a13.91 13.91 0 007.548 2.213c9.056 0 14.01-7.504 14.01-14.009 0-.214-.004-.427-.015-.639A10.025 10.025 0 0024 4.559z" />
              </svg>
            </a>
            <a href="#" className="hover:text-amber-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c-5.052 0-9.162 4.11-9.162 9.162 0 4.457 3.246 8.16 7.518 9.032v-6.348h-2.275v-2.684h2.275v-2.075c0-2.251 1.363-3.495 3.362-3.495.954 0 1.771.07 2.006.102v2.329h-1.377c-1.08 0-1.294.513-1.294 1.268v1.872h2.586l-.337 2.684h-2.249v6.331c4.281-.87 7.528-4.579 7.528-9.034 0-5.052-4.11-9.162-9.162-9.162z" />
              </svg>
            </a>
            <a href="#" className="hover:text-amber-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.773 6.859a8.464 8.464 0 01-2.427.664 4.257 4.257 0 001.868-2.345 8.517 8.517 0 01-2.703 1.033 4.239 4.239 0 00-7.233 2.894 4.256 4.256 0 00.111.97A12.034 12.034 0 012.67 5.623a4.227 4.227 0 001.314 5.654 4.223 4.223 0 01-1.922-.53v.054a4.242 4.242 0 003.401 4.157 4.233 4.233 0 01-1.917.073 4.249 4.249 0 003.96 2.94 8.501 8.501 0 01-5.264 1.814c-.341 0-.679-.02-1.013-.058a12.02 12.02 0 006.496 1.905c7.791 0 12.045-6.457 12.045-12.046 0-.183-.004-.366-.012-.548A8.58 8.58 0 0024 4.557a8.434 8.434 0 01-2.427.666 4.251 4.251 0 001.867-2.345z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-10 pt-4 text-center">
        <p className="text-gray-400 text-sm">&copy; 2024 Keap MicroFinance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
