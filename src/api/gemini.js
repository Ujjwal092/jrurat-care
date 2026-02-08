const apiKey = import.meta.env.VITE_GEMINI_KEY;
console.log("Gemini API Key:", apiKey ? "Loaded" : "Missing");

export const callGeminiAPI = async (messages, systemPrompt = "", isJson = false) => {
  if (!apiKey) return "API key is missing. Please set it in .env.local";

  try {
    const payload = {
      contents: messages,
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    if (isJson) {
      payload.generationConfig = { responseMimeType: "application/json" };
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Something went wrong.";
  } catch (err) {
    console.error("Gemini API error:", err);
    return "Connection error. Please try again later.";
  }
};
