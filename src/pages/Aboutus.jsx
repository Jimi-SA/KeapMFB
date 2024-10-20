import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-black text-white text-center py-32">
        <h1 className="text-4xl font-bold">You Are In Great Company</h1>
        <p className="mt-4 text-lg">
          Empowering individuals and businesses through financial services
        </p>
      </div>

      {/* Who We Are */}
      <section className="py-16 max-w-6xl mx-auto px-6 md:px-0">
        <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
        <p className="text-lg text-center text-gray-700">
          Keap Microfinance is committed to fostering financial inclusion across
          Nigeria by providing accessible and affordable financial services.
          With a customer-centric approach and innovative technology, we ensure
          that individuals and businesses thrive through our dedicated banking
          solutions.
        </p>
      </section>

      {/* Mission, Vision, Core Values */}
      <section className="bg-white py-20  mx-auto px-8 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-center text-gray-600">
            Driven by our commitment to excellence, we strive to transform lives
            through our financial solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 px-8 gap-10 scale-95 pt-10 space-y-8 md:space-y-0">
          {/* Mission */}
          <div className="flex flex-col px-4 items-center text-center">
            <div className="flex justify-center mb-4">
              <img
                src="/path/to/mission-icon.svg"
                alt="Mission Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Mission</h3>
            <p className="text-gray-600">
              To be an efficient National Microfinance Bank, providing
              affordable products and services in Nigeria, using appropriate
              technology and a motivated workforce.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col md:border-x px-4  items-center text-center">
            <div className="flex justify-center mb-4">
              <img
                src="/path/to/vision-icon.svg"
                alt="Vision Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Vision</h3>
            <p className="text-gray-600">
              To deliver transformative financial and non-financial services
              across Nigeria.
            </p>
          </div>

          {/* Core Values */}
          <div className="flex flex-col px-4 items-center text-center">
            <div className="flex justify-center mb-4">
              <img
                src="/path/to/values-icon.svg"
                alt="Core Values Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Core Values</h3>
            <p className="text-gray-600">Integrity and Excellent Service.</p>
          </div>
        </div>
      </section>

      {/* Why Keap Microfinance */}
      <section className="bg-teal-700 text-gray-50 py-20 mx-auto px-6 md:px-0">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Keap Microfinance?
        </h2>
        <div className="flex justify-center">
        <p className="text-lg max-w-4xl text-center text-400-700">
          Keap Microfinance is a licensed institution regulated by the Central
          Bank of Nigeria (CBN), incorporated to offer specialized microfinance
          services. We empower Nigerians by offering tailored banking solutions
          designed to meet their needs.
        </p>
        </div>
      </section>

      {/* Corporate Social Responsibility */}
      <section className="bg-white py-24 mx-auto px-6 md:px-0">
        <h2 className="text-3xl font-bold text-center mb-8">
          Corporate Social Responsibility
        </h2>
       <div className=" flex justify-center">
       <p className="text-lg max-w-6xl text-center text-gray-700">
          Our CSR initiatives focus on environmental sustainability, including
          tree planting campaigns to combat desertification and other
          environmental challenges across Nigeria.
        </p>
       </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50 max-w-6xl mx-auto px-6 md:px-0">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Leadership Card 1 */}
          <div>
            <img
              src="/path/to/leader1.jpg"
              alt="Leader 1"
              className="w-44 h-44 shadow-md border-teal-700 border rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Managing Director</p>
          </div>

          {/* Leadership Card 2 */}
          <div>
            <img
              src="/path/to/leader2.jpg"
              alt="Leader 2"
              className="w-44 h-44 shadow-md border-teal-700 border rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Executive Director, Operations</p>
          </div>

          {/* Leadership Card 3 */}
          <div>
            <img
              src="/path/to/leader3.jpg"
              alt="Leader 3"
              className="w-44 h-44 shadow-md border-teal-700 border rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Michael Brown</h3>
            <p className="text-gray-600">Executive Director, Finance</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-700 text-white py-12 text-center">
        <div className="md:scale-100 scale-90">
        <h2 className="text-3xl font-bold">Ready To Get Started?</h2>
        <p className="mt-4 text-lg">
          At Keap Microfinance, the customer is king, and we are here to serve
          you!
        </p>
        <button className="mt-6 bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-600">
          Contact Us
        </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
