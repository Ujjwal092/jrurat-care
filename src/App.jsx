import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Volunteer from "./pages/Volunteer";
import Chat from "./pages/Chat";

const App = () => {
  // Load theme and last tab from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; // convert string to boolean
  });

  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "home";
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Persist theme
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Persist last active tab
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Pages */}
      <main className="flex-1">
        {activeTab === "home" && (
          <div className="animate-fade-in">
            <Home setActiveTab={setActiveTab} />
          </div>
        )}
        {activeTab === "volunteer" && (
          <div className="animate-fade-in">
            <Volunteer />
          </div>
        )}
        {activeTab === "chat" && (
          <div className="animate-fade-in">
            <Chat />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
