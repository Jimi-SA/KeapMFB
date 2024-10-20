import React, { useState } from "react";
import { faqs } from "../data/Faq";

  

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <li className="mb-4">
      <button
        className="w-full text-left font-semibold text-gray-800 focus:outline-none transition-colors duration-200 hover:text-amber-600"
        onClick={toggleOpen}
      >
        {question}
        <span className="float-right">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </li>
  );
};

const HelpDesk = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    gender: "",
    phoneNumber: "",
    email: "",
    bvn: "",
    nmfbAccountNumber: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API request)
    console.log("Form submitted:", form);
  };

  return (
    <div className="grid grid-cols-1 px-8 mb-20 md:grid-cols-2 gap-10">
      {/* Social media and FAQ section */}
      <div className=" items-center flex flex-col mt-16 h-full overflow-y-auto md:px-0 px-4">
        <img src="/banner1.png" alt="" className="w-full h-52 object-cover pb-10" />
        <p className="text-gray-600 md:text-3xl font-semibold text-center">Let's keep in touch!</p>
        <p className="text-gray-500 md:text-lg md:py-10 text-sm text-center">
          Find us on any of these platforms, we respond in 1-2 business days.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-amber-600 hover:text-amber-700 transition">
            Facebook
          </a>
          <a href="#" className="text-amber-600 hover:text-amber-700 transition">
            Twitter
          </a>
          <a href="#" className="text-amber-600 hover:text-amber-700 transition">
            LinkedIn
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-500 mb-6">
            Have questions? Check out our FAQ section to find answers to common queries.
          </p>
          <ol className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleOpen(index)}
              />
            ))}
          </ol>
        </div>
      </div>

      {/* Complaint Form */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full p-8 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">KMF Complaint Form</h1>
          <p className="text-gray-600 mb-6">Please fill in your details and complaint below.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Other Name</label>
              <input
                type="text"
                name="otherName"
                value={form.otherName}
                onChange={handleChange}
                placeholder="Enter Other Name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Gender *</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">BVN Number</label>
              <input
                type="text"
                name="bvn"
                value={form.bvn}
                onChange={handleChange}
                placeholder="Enter BVN number"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">NMFB Account Number</label>
              <input
                type="text"
                name="nmfbAccountNumber"
                value={form.nmfbAccountNumber}
                onChange={handleChange}
                placeholder="Enter NMFB account number"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Category *
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              required
            >
              <option value="">Select Category</option>
              <option value="loan">Loan Complaint</option>
              <option value="account">Account Issues</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your complaint"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 p-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md w-full transition"
            >
              Submit Complaint
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
