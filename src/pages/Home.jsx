import React from "react";
import { motion } from "framer-motion";
import {
  DevicePhoneMobileIcon,
  DocumentIcon,
  ShoppingBagIcon,
  BanknotesIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { TbCurrencyNaira } from "react-icons/tb";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
); // Register ArcElement for Pie chart

const HomePage = () => {
  const data = {
    labels: [
      "TCF HH Count",
      "TCF SME Count",
      "NIB HH Count",
      "NIB SME Count",
      "AGSMEIS Count",
      "ABP Count",
    ],
    datasets: [
      {
        data: [643486, 114476, 31462, 3523, 32355, 107035], // Use actual values as needed
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Carousel */}
      <section>
        <div className="shadow-lg">
          <img src="/banner1.png" alt="" className="h-[40vh] w-full object-cover" />
        </div>
      </section>

      {/* App Download Section */}

      <section>
        <div className="bg-gray-50 px-8 md:py-16 py-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="text-center md:text-left max-w-lg">
              <h1 className="text-3xl font-bold text-teal-600 mb-4">
                Bank With Us!
              </h1>
              <p className="text-gray-700 mb-4">
                Whether you are interested in Micro savings, micro loans, or you
                simply want a school-targeted loan... We've got you covered.
              </p>
              <p className="text-gray-700 mb-6">
                With over 115 branches all over Nigeria, we are committed to
                delivering exceptional financial services to all parts of the
                country. Visit our branches wherever you are.{" "}
                <a href="#" className="text-green-600">
                  See branches
                </a>
              </p>
              <div className="flex justify-center md:scale-100 scale-90 text-sm md:text-md md:justify-start space-x-4">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                  Internet Banking
                </button>
                <button className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-4 rounded">
                  Google Play
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                  App Store
                </button>
              </div>
            </div>

            {/* Right Section - Icon Pattern with Continuous Rotation */}
            <div className="relative w-full md:w-1/2 mt-20 md:mt-0 flex items-center justify-center">
              <motion.div
                className="relative flex items-center justify-center w-64 h-64"
                animate={{}}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                {/* Center Phone Icon */}
                <motion.div className="absolute">
                  <DevicePhoneMobileIcon className="h-20 w-20 text-orange-500" />
                </motion.div>

                {/* Surrounding Icons */}
                <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <DocumentIcon className="h-10 w-10 text-teal-600" />
                </motion.div>
                <motion.div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <ShoppingBagIcon className="h-10 w-10 text-teal-600" />
                </motion.div>
                <motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <BanknotesIcon className="h-10 w-10 text-orange-500" />
                </motion.div>
                <motion.div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                  <GlobeAltIcon className="h-10 w-10 text-teal-600" />
                </motion.div>
                <motion.div className="absolute top-12 right-10">
                  <CalendarDaysIcon className="h-10 w-10 text-teal-600" />
                </motion.div>

                {/* New Finance Icons */}
                <motion.div className="absolute bottom-12 left-12">
                  <CreditCardIcon className="h-10 w-10 text-teal-600" />
                </motion.div>
                <motion.div className="absolute top-10 left-10">
                  <ChartBarIcon className="h-10 w-10 text-teal-600" />
                </motion.div>
                <motion.div className="absolute bottom-10 right-10">
                  <TbCurrencyNaira className="h-10 w-10 text-teal-600" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Balance Sheet Lending (OBSL) */}
      <section className="py-16 px-8">
        <div className="md:grid flex flex-col-reverse md:grid-cols-2">
          <div className="md:-ml-0 -ml-5 ">
            <img src="/short2.svg" alt="" />
          </div>
          <div className="container py-7 md:py-0 mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              On-Balance Sheet Lending (OBSL)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The On-Balance Sheet Lending facility is an internal loan offered
              by NIRSAL Microfinance Bank, separate from Central Bank of Nigeria
              intervention funds, funded from depositors’ savings.
            </p>
          </div>
        </div>
      </section>

      {/* AGRIC Small Medium Enterprise Scheme (AGSMEIS) */}
      <section className="bg-gray-100 px-8 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            AGRIC Small Medium Enterprise Scheme (AGSMEIS)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Access up to N3M at 9% per annum from the Agric, Small, and Medium
            Enterprise Scheme (AGSMEIS), an initiative by the Central Bank of
            Nigeria (CBN).
          </p>

          {/* Bar Chart */}
          <div className="max-w-4xl mx-auto">
            <Bar
              data={{
                labels: ["2020", "2021", "2022", "2023"], // Sample years
                datasets: [
                  {
                    label: "Amount Disbursed (₦B)",
                    data: [50, 70, 100, 150], // Sample data
                    backgroundColor: [
                      "rgba(75, 192, 192, 0.6)", // Teal
                      "rgba(131, 214, 129, 0.6)", // Transition color
                      "rgba(210, 174, 78, 0.6)", // Transition color
                      "rgba(255, 193, 7, 0.6)", // Amber
                    ],
                    borderColor: [
                      "rgba(75, 192, 192, 1)", // Teal
                      "rgba(131, 214, 129, 1)", // Transition color
                      "rgba(210, 174, 78, 1)", // Transition color
                      "rgba(255, 193, 7, 1)", // Amber
                    ],
                    borderWidth: 1,
                    borderRadius: 10,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "AGSMEIS Loan Disbursement Over the Years",
                    font: {
                      size: 18,
                    },
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-8">
  {/* Pie Chart Header */}
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
    Loan Distribution by Category
  </h3>
  <div className="grid md:grid-cols-2 gap-8">
    {/* Left Section for List */}
    <div className=" mx-auto py-4 w-full">
      <ul className="space-y-4 grid grid-cols-3 gap-4">
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">TCF HH Count</span>
          <span className="text-gray-500">643,486</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">TCF HH Value</span>
          <span className="text-gray-500">₦261,400,000,000</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">TCF SME Count</span>
          <span className="text-gray-500">114,476</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">TCF SME Value</span>
          <span className="text-gray-500">₦112,500,000,000</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">NIB HH Count</span>
          <span className="text-gray-500">31,462</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">NIB HH Value</span>
          <span className="text-gray-500">₦14,300,000,000</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">NIB SME Count</span>
          <span className="text-gray-500">3,523</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">NIB SME Value</span>
          <span className="text-gray-500">₦2,100,000,000</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">AGSMEIS Count</span>
          <span className="text-gray-500">32,355</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">AGSMEIS Value</span>
          <span className="text-gray-500">₦118,396,107,435.10</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">ABP Count</span>
          <span className="text-gray-500">107,035</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">ABP Value</span>
          <span className="text-gray-500">₦33,800,000,000</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">NYIF Count</span>
          <span className="text-gray-500">5,539</span>
        </li>
        <li className=" grid bg-white shadow-md p-2 rounded-lg">
          <span className="font-semibold text-gray-700">NYIF Value</span>
          <span className="text-gray-500">₦1,967,000,000</span>
        </li>
      </ul>
    </div>

    {/* Right Section for Pie Chart */}
    <div className="mt-10 w-[75%] mx-auto">
      <Pie data={data} options={{ responsive: true }} />
    </div>
  </div>
</section>
<section className="bg-gray-100 py-16">
      <div className="container scale-90 md:scale-100 mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Stay updated with the latest news and offers. Join our mailing list!
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent mb-4 md:mb-0"
          />
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-r-md transition duration-300 ease-in-out">
            Subscribe
          </button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default HomePage;
