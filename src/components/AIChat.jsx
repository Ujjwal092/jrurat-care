import { useState, useEffect, useRef } from "react";
import {
  Stethoscope,
  Send,
  ShieldAlert,
  Phone,
} from "lucide-react";

import { callGeminiAPI } from "../api/gemini";
import PrescriptionSimplifier from "./PrescriptionSimplifier";

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      role: "model",
      parts: [
        {
          text:
            "Hello! I am Jarurat Care AI.\n\nTell me what’s going on.\n\n⚠️ For medical emergencies, call 108 immediately.",
        },
      ],
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", parts: [{ text: input }] };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const systemPrompt =
      "You are Jarurat Care Assistant. Help with first aid, triage, and NGO info. Always warn that you are not a doctor. If the situation sounds like a major emergency, start with '⚠️ CALL 108 IMMEDIATELY'.";

    const botText = await callGeminiAPI(
      [...messages, userMsg],
      systemPrompt
    );

    setMessages((prev) => [
      ...prev,
      { role: "model", parts: [{ text: botText }] },
    ]);
    setIsTyping(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Chat Container */}
      <div className="lg:col-span-2 flex flex-col h-[650px] rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 p-5 flex items-center gap-3 text-white">
          <div className="bg-white/20 p-2 rounded-xl">
            <Stethoscope size={22} />
          </div>
          <div>
            <h3 className="font-black text-lg">AI Care Triage</h3>
            <p className="text-xs text-red-100 font-semibold">
              24×7 AI Medical Assistant
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 bg-gray-50 dark:bg-gray-950">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-red-600 text-white rounded-br-none"
                    : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border dark:border-gray-700 rounded-bl-none"
                }`}
              >
                {m.parts[0].text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="text-xs text-gray-400 italic">
              AI is typing…
            </div>
          )}

          <div ref={endRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSend}
          className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center gap-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe symptoms, injury, or ask for help..."
            className="flex-1 px-5 py-3 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition text-white p-3 rounded-full shadow-lg"
          >
            <Send size={20} />
          </button>
        </form>
      </div>

      {/* Right Panel */}
      <div className="space-y-6">
        <PrescriptionSimplifier />

        <div className="rounded-2xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-6">
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold mb-3">
            <ShieldAlert size={18} />
            Emergency Alert
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            If the situation is life-threatening, do not wait for chat support.
          </p>

          <a
            href="tel:108"
            className="block text-center bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-xl font-bold"
          >
            <Phone size={16} className="inline mr-2" />
            Call 108 Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
