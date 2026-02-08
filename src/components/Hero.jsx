import { Activity, Sparkles } from "lucide-react";

const Hero = ({ setActiveTab }) => (
  <div className="relative bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">

      {/* Left side text */}
      <div
        className="lg:w-1/2 w-full text-center lg:text-left z-10"
        style={{ animation: "fadeUp 0.8s ease forwards", opacity: 0 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-semibold mb-6 select-none">
          <Activity size={16} /> 24/7 AI Support
        </div>

        <h1
          className="font-black leading-tight mb-6 text-gray-900 dark:text-white"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
          }}
        >
          Jarurat Means <span className="text-red-600">Need.</span> <br /> We Bridge It.
        </h1>

        <p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
          style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.125rem)" }}
        >
          From AI-driven symptom triage to connecting with local volunteers for emergency transport, we're building the future of community healthcare.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={() => setActiveTab("chat")}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold shadow-xl shadow-red-500/20 transition-transform duration-200 transform hover:-translate-y-1 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-red-400"
            aria-label="Get AI Support"
          >
            <Sparkles size={20} /> Get AI Support
          </button>
          <button
            onClick={() => setActiveTab("volunteer")}
            className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-400"
            aria-label="Become a Volunteer"
          >
            Become a Volunteer
          </button>
        </div>
      </div>

      {/* Right side stats */}
      <div
        className="lg:w-1/2 w-full relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        style={{ animation: "fadeUp 1s ease forwards", opacity: 0, animationDelay: "0.3s" }}
      >
        <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full -z-10"></div>

        {[{
          title: "Lives Impacted",
          value: "5k+",
          textColor: "text-red-600"
        }, {
          title: "Volunteers",
          value: "1k+",
          textColor: "text-blue-600"
        }].map(({ title, value, textColor }, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 mt-8 cursor-default select-none transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
          >
            <div className={`${textColor} font-bold text-4xl mb-2`}>{value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">{title}</div>
          </div>
        ))}

        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 col-span-1 sm:col-span-2 cursor-default select-none transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold dark:text-white">Active Requests</span>
            <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
          </div>
          <div className="space-y-3">
            <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full"></div>
            <div className="h-2 w-2/3 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 640px) {
            /* Smaller padding on mobile */
            .max-w-7xl {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }
          }
        `}
      </style>
    </div>
  </div>
);

export default Hero;
