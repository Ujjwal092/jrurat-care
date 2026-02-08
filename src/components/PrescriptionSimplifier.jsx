import { useState } from "react";
import { FileText, Sparkles, Loader } from "lucide-react";
import { callGeminiAPI } from "../api/gemini";

const PrescriptionSimplifier = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const simplify = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const systemPrompt =
      "You are a medical pharmacist assistant. Explain prescriptions simply. Always include a disclaimer.";

    const res = await callGeminiAPI(
      [{ role: "user", parts: [{ text: input }] }],
      systemPrompt
    );

    setResult(res);
    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="text-purple-600" />
        <h3 className="font-bold text-lg">✨ Prescription Simplifier</h3>
      </div>

      <textarea
        className="w-full p-3 rounded-xl"
        rows="3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={simplify}
        className="mt-3 w-full flex items-center justify-center bg-purple-600 text-white py-2 rounded-xl"
      >
        {loading ? <Loader className="animate-spin" /> :
         <Sparkles className="size-6 mr-2" />}
        Simplify
      </button>

      {result && (
        <div className="mt-4 p-4 bg-purple-50 rounded-xl text-sm">
          {result}
        </div>
      )}
    </div>
  );
};

export default PrescriptionSimplifier;
