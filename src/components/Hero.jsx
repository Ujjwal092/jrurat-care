import { Activity, Sparkles } from "lucide-react";

const Hero = ({ setActiveTab }) => (
  <div className="relative bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 text-center lg:text-left z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-semibold mb-6">
          <Activity size={16} /> 24/7 Humanitarian Support
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight mb-6">
          Jarurat Means <span className="text-red-600">Need.</span> <br/> We Bridge It.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
          From AI-driven symptom triage to connecting with local volunteers for emergency transport, we're building the future of community healthcare.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button onClick={() => setActiveTab('chat')} className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold shadow-xl shadow-red-500/20 transition-all flex items-center justify-center gap-2">
            <Sparkles size={20} /> Get AI Support
          </button>
          <button onClick={() => setActiveTab('volunteer')} className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
            Become a Volunteer
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full"></div>
        <div className="relative grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 mt-8">
            <div className="text-red-600 font-bold text-4xl mb-2">5k+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">Lives Impacted</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="text-blue-600 font-bold text-4xl mb-2">1k+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">Volunteers</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 col-span-2">
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
      </div>
    </div>
  </div>
);
export default Hero;