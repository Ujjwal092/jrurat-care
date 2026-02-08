import { useState } from "react";
import { PlusCircle, Lightbulb, Loader } from "lucide-react";
import { callGeminiAPI } from "../api/gemini";

const FirstAidKitGen = () => {
  const [scenario, setScenario] = useState("");
  const [kit, setKit] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateKit = async () => {
    setLoading(true);

    const prompt = `Generate a specific, bulleted first-aid kit list for this scenario: "${
      scenario || "General home safety"
    }".
Explain why each item is needed.`;

    const response = await callGeminiAPI(
      [{ role: "user", parts: [{ text: prompt }] }],
      "You are a disaster management and medical safety expert."
    );

    setKit(response);
    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-blue-100 dark:border-blue-900/20 my-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left */}
        <div className="md:w-1/3">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl w-fit mb-4">
            <PlusCircle className="text-blue-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold dark:text-white mb-2">
            ✨ Custom First-Aid Kit
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            
          </p>
        </div>

        {/* Right */}
        <div className="md:w-2/3 w-full">
      <div className="flex flex-col sm:flex-row gap-2 w-full">
  <input
    type="text"
    placeholder="e.g. Road trip, Monsoon, Camping, Elder care"
    className="flex-1 p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
    value={scenario}
    onChange={(e) => setScenario(e.target.value)}
  />

  <button
    onClick={generateKit}
    disabled={loading}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl flex items-center gap-2 w-full sm:w-auto justify-center"
  >
    {loading ? (
      <Loader className="animate-spin" />
    ) : (
      <Lightbulb />
    )}
    Build
  </button>
</div>


          {kit && (
            <div className="mt-6 p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800 text-sm dark:text-gray-300 whitespace-pre-line animate-fade-in">
              {kit}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstAidKitGen;
