import {
  Heart,
  Sparkles,
  Sun,
  Moon,
  Menu,
  X,
  Link,
} from "lucide-react";

const Navbar = ({
  activeTab,
  setActiveTab,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setActiveTab("home")}
          >
            <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-xl mr-2">
              <Heart className="h-8 w-8 text-red-500 animate-pulse" />
            </div>
            <span className="font-bold text-lg text-gray-800 dark:text-white tracking-tight animate-pulse"
            onClick={() => window.open("https://www.jarurat.care/", "_blank")}>
              Jarurat Care
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                activeTab === "home"
                  ? "bg-gray-100 dark:bg-gray-800 text-red-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-red-500"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => setActiveTab("volunteer")}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                activeTab === "volunteer"
                  ? "bg-gray-100 dark:bg-gray-800 text-red-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-red-500"
              }`}
            >
              Volunteer
            </button>
            <button
              onClick={() => setActiveTab("Help Us")}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                activeTab === "Help Us"
                  ? "bg-gray-100 dark:bg-gray-800 text-red-600"
                  : "text-gray-500 dark:text-gray-400 hover:text-red-500"
              }`}>
                <a href="https://www.jarurat.care/donate" target="_blank" rel="noopener noreferrer">
                  Help Us
                </a>
            </button>

            <button
              onClick={() => setActiveTab("chat")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "chat"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100"
              }`}
            >
              <Sparkles size={16} />
              AI Support
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition-all border border-gray-100 dark:border-gray-700"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-gray-500 dark:text-gray-400"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 dark:text-gray-400"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 p-4 space-y-2">
          <button
            onClick={() => {
              setActiveTab("home");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left p-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300"
          >
            Home
          </button>

          <button
            onClick={() => {
              setActiveTab("volunteer");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left p-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300"
          >
            Volunteer
          </button>

          <button
            onClick={() => {
              setActiveTab("chat");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left p-3 rounded-xl text-base font-medium text-red-600 bg-red-50 dark:bg-red-900/20 flex items-center gap-2"
          >
            <Sparkles size={16} />
            AI Support
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
