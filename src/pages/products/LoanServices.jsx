import React from "react";

const LoanServices = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Nigeria's No. 1 Microfinance</h1>
          <p className="text-lg text-center mt-2">
            Business, School, Personal, and Investment Loans at Your Fingertips!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Find the Loan That's Right for You</h2>
          <p className="text-lg text-gray-600">
            Whether you're looking to grow your business, fund your education, manage personal expenses, or invest for the future, we have the perfect loan option for you.
          </p>
        </div>

        {/* Loan Types Section */}
        <div className="grid grid-cols-1 scale-95 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Loan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Business Loans</h3>
            <p className="text-gray-600 mb-4">
              Our business loans provide you with the capital needed to expand, purchase inventory, or manage cash flow efficiently. Competitive rates and flexible repayment terms.
            </p>
            <button className="bg-teal-800 text-white py-2 px-4 rounded hover:bg-teal-700">
              Apply Now
            </button>
          </div>

          {/* School Loan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">School Loans</h3>
            <p className="text-gray-600 mb-4">
              We understand the importance of education. Our school loans help you pay for tuition, books, and living expenses. Easy and flexible repayment plans for students.
            </p>
            <button className="bg-teal-800 text-white py-2 px-4 rounded hover:bg-teal-700">
              Apply Now
            </button>
          </div>

          {/* Personal Loan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Personal Loans</h3>
            <p className="text-gray-600 mb-4">
              Manage your personal expenses with ease. Whether it's medical bills, home improvement, or a special event, our personal loans provide quick and easy access to funds.
            </p>
            <button className="bg-teal-800 text-white py-2 px-4 rounded hover:bg-teal-700">
              Apply Now
            </button>
          </div>

          {/* Investment Loan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Investment Loans</h3>
            <p className="text-gray-600 mb-4">
              Ready to invest in your future? Our investment loans offer you the resources to make wise financial decisions and grow your portfolio with confidence.
            </p>
            <button className="bg-teal-800 text-white py-2 px-4 rounded hover:bg-teal-700">
              Apply Now
            </button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-4">Why Choose Us?</h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            We are committed to providing accessible and affordable loans to individuals and businesses in Nigeria. Our flexible repayment plans, quick approval process, and excellent customer service make us a top choice for microfinance loans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Quick Approval</h3>
              <p className="text-gray-600">
                Get your loan approved in no time with our fast and efficient approval process. No unnecessary delays.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Flexible Repayment</h3>
              <p className="text-gray-600">
                Enjoy flexible repayment options tailored to your financial needs, so you can manage your loan with ease.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is here to assist you at every step, ensuring a smooth and hassle-free experience.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-teal-700 text-white py-12">
          <h2 className="text-3xl font-semibold text-center mb-4">Ready to Apply?</h2>
          <p className="text-lg text-center mb-6">
            Take the first step towards securing your future with a loan that works for you. Apply today and let us help you achieve your goals.
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-teal-700 py-3 px-6 rounded font-semibold hover:bg-gray-200">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoanServices;
