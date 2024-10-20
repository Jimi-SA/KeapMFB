import React from "react";

const SavingsAdvert = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-12">
        <div className="container scale-90 mx-auto px-6">
          <h1 className="text-5xl font-bold text-center">
            Your Savings, Your Future
          </h1>
          <p className="text-lg text-center mt-4">
            Open a savings account with Nigeria Microfinance today and secure
            your financial future with flexible, high-yield savings options.
          </p>
          <div className="mt-8 text-center">
            <button className="bg-white text-green-600 py-3 px-8 rounded-full shadow-lg hover:bg-gray-200">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Why Save with Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-8">
            Why Save with Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-green-600/20 text-white rounded-full h-20 w-20 flex items-center justify-center text-3xl mb-4">
                💰
              </div>
              <h3 className="text-xl font-semibold mb-2">High Interest Rates</h3>
              <p className="text-gray-600">
                Enjoy some of the most competitive interest rates to maximize your savings.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-green-600/20 text-white rounded-full h-20 w-20 flex items-center justify-center text-3xl mb-4">
                🔒
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Your funds are secure and fully insured under Nigerian financial regulations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-green-600/20 text-white rounded-full h-20 w-20 flex items-center justify-center text-3xl mb-4">
                📱
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Access</h3>
              <p className="text-gray-600">
                Manage your account anytime, anywhere with our mobile banking app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Account Types Section */}
      <section className=" scale-90 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Explore Our Savings Accounts
          </h2>

          {/* Account Type 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/500"
                alt="Regular Savings"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <h3 className="text-3xl font-semibold mb-4">Regular Savings</h3>
              <p className="text-lg text-gray-600 mb-4">
                A perfect choice for everyday saving with easy access to your
                funds. Earn attractive interest rates while keeping your
                savings flexible.
              </p>
              <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-500">
                Learn More
              </button>
            </div>
          </div>

          {/* Account Type 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-16">
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/500"
                alt="Fixed Deposit"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
              <h3 className="text-3xl font-semibold mb-4">Fixed Deposit</h3>
              <p className="text-lg text-gray-600 mb-4">
                Lock your savings for a fixed period and enjoy higher returns.
                Perfect for those looking to maximize their savings over time.
              </p>
              <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-500">
                Learn More
              </button>
            </div>
          </div>

          {/* Account Type 3 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/500"
                alt="High-Yield Savings"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <h3 className="text-3xl font-semibold mb-4">High-Yield Savings</h3>
              <p className="text-lg text-gray-600 mb-4">
                Grow your savings faster with our High-Yield Savings Account.
                Designed for individuals who want to earn more on their savings.
              </p>
              <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-500">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Start Your Savings Journey Today</h2>
          <p className="text-lg mb-8">
            Open a savings account and take the first step towards financial security. It's fast, easy, and rewarding.
          </p>
          <button className="bg-white text-green-600 py-3 px-8 rounded-full shadow-lg hover:bg-gray-200">
            Open an Account
          </button>
        </div>
      </section>
    </div>
  );
};

export default SavingsAdvert;
