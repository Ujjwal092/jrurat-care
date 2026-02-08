import { useState } from "react";
import {
  Sparkles,
  Loader,
  CheckCircle,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { callGeminiAPI } from "../api/gemini";

const VolunterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "General Support",
    motivation: "",
  });

  const [loading, setLoading] = useState(false);
  const [isDrafting, setIsDrafting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAIDraft = async () => {
    if (!formData.name) return;
    setIsDrafting(true);

    const prompt = `Write a short, professional volunteer application bio for ${formData.name}. 
Role: ${formData.role}. 
Include keywords: ${formData.motivation || "helping others, healthcare, community service"}. 
Max 40 words.`;

    const draft = await callGeminiAPI(
      [{ role: "user", parts: [{ text: prompt }] }],
      "You are a professional assistant."
    );

    setFormData((prev) => ({ ...prev, motivation: draft }));
    setIsDrafting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

 

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-24 p-10 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl text-center border dark:border-gray-700">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-black dark:text-white mb-2">
          Application Submitted 🎉
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Thank you for stepping up. Our team will contact you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-bold text-red-600 hover:underline"
        >
          Register another volunteer
        </button>
      </div>
    );
  }

  /* form */

  return (
    <div className="max-w-2xl mx-auto mt-14 p-8 sm:p-10 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black dark:text-white">
          Become a Volunteer
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Your time can save lives. Join Jarurat Care.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">

        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute left-4 top-4 text-gray-400" size={18} />
            <input
              required
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-red-500 outline-none"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-red-500 outline-none"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className="absolute left-4 top-4 text-gray-400" size={18} />
          <input
            placeholder="Phone Number (optional)"
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-red-500"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        {/* Role */}
        <select
          className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 dark:text-white outline-none"
          value={formData.role}
          onChange={(e) =>
            setFormData({ ...formData, role: e.target.value })
          }
        >
          <option>General Support</option>
          <option>Paramedic / Nurse</option>
          <option>Doctor</option>
          <option>Driver</option>
        </select>

        {/* SOP */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-bold text-gray-500 dark:text-gray-400">
              Statement of Purpose
            </label>

            <button
              type="button"
              onClick={handleAIDraft}
              disabled={isDrafting || !formData.name}
              className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl
                bg-purple-50 dark:bg-purple-900/30 text-purple-600
                disabled:opacity-50"
            >
              {isDrafting ? (
                <Loader size={12} className="animate-spin" />
              ) : (
                <Sparkles size={12} />
              )}
              Draft with AI
            </button>
          </div>

          <textarea
            rows={4}
            placeholder="Why do you want to volunteer with Jarurat Care?"
            className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-red-500"
            value={formData.motivation}
            onChange={(e) =>
              setFormData({ ...formData, motivation: e.target.value })
            }
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-5 rounded-2xl bg-red-600 hover:bg-red-700 transition
            text-white font-bold text-lg shadow-xl shadow-red-500/20"
        >
          {loading ? "Submitting..." : "Register as Volunteer"}
        </button>
      </form>
    </div>
  );
};

export default VolunterForm;
