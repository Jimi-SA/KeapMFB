import React from "react";

const Investment = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal-800 text-white">
        <div className="container mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-4">
            Invest with Keap Investment
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Secure Your Future with Proven Investment Strategies
          </p>
          <a
            href="#invest-now"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Invest Now
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            About Keap Investment
          </h2>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-2/3 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Keap Investment is a trusted investment company with years of
                experience in growing and managing wealth for individuals and
                businesses. We focus on sustainable and profitable investment
                strategies that ensure long-term growth and stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
  <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <img 
      src="/banner1.png" 
      alt="Investment Opportunities" 
      className="w-full h-auto shadow-lg"
    />
    <div className="space-y-4 mr-8">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
        Why Invest with Keap?
      </h1>
      <p className="text-lg text-gray-600">
        Our goal is to offer exceptional investment opportunities in various sectors, including real estate, technology, and agriculture. With a team of experienced financial experts, we provide personalized investment plans tailored to meet the unique needs of each investor.
      </p>
    </div>
  </div>
</section>


      {/* Investment Opportunities Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 pb-10 pt-5 text-center mb-8">
            Our Investment Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Real Estate Investment */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Real Estate
              </h3>
              <p className="text-gray-600 mb-6">
                We invest in high-growth real estate opportunities across
                commercial and residential markets. Our properties are chosen
                for their potential to appreciate in value over time, providing
                steady returns for our investors.
              </p>
              <a
                href="#real-estate"
                className="text-amber-500 hover:text-amber-600 font-semibold"
              >
                Learn More
              </a>
            </div>

            {/* Technology Investments */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Technology
              </h3>
              <p className="text-gray-600 mb-6">
                Keap Investment is at the forefront of innovation by investing
                in cutting-edge technology startups and established tech
                companies. Our portfolio includes businesses that are leading
                the charge in AI, blockchain, and renewable energy.
              </p>
              <a
                href="#technology"
                className="text-amber-500 hover:text-amber-600 font-semibold"
              >
                Learn More
              </a>
            </div>

            {/* Agriculture Investment */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Agriculture
              </h3>
              <p className="text-gray-600 mb-6">
                We believe in sustainable agriculture that feeds the future.
                Keap Investment partners with local and international farms to
                drive innovation in agricultural technology and food production,
                ensuring stable, long-term growth.
              </p>
              <a
                href="#agriculture"
                className="text-amber-500 hover:text-amber-600 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold text-gray-800">
        The Importance of Diversification in Investments
      </h2>
      <p className="text-lg text-gray-600">
        Diversification is a crucial strategy for managing risk and enhancing returns. By spreading your investments across different asset classes—such as stocks, bonds, real estate, and agriculture—you reduce the potential impact of a poor-performing asset on your overall portfolio. 
      </p>
      <p className="text-lg text-gray-600">
        This approach not only minimizes risk but also provides opportunities to capitalize on growth in various sectors. At Keap Investment, we encourage our clients to diversify their portfolios to achieve long-term financial stability and success.
      </p>
      <p className="text-lg text-gray-600">
        Join us in exploring diverse investment opportunities that align with your financial goals and risk tolerance.
      </p>
    </div>
    <img 
      src="/banner1.png" 
      alt="Investment Diversification" 
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>
</section>


      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Why Invest with Keap?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="text-6xl text-amber-500 mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Expertise & Experience
              </h3>
              <p className="text-gray-600">
                With a team of financial experts, we ensure that your
                investments are backed by industry knowledge and experience.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="text-6xl text-amber-500 mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                High Returns
              </h3>
              <p className="text-gray-600">
                Our investment strategies are designed to maximize returns while
                minimizing risks, ensuring a steady growth of your wealth.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="text-6xl text-amber-500 mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600">
                With investments across various industries and regions, we
                provide global investment opportunities to diversify your
                portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Invest?</h2>
          <p className="text-lg mb-6">
            Join hundreds of successful investors who trust Keap Investment with
            their financial future. Take the first step today!
          </p>
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Investment;
