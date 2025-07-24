import { useEffect, useState } from "react";
import { fetchGoogleFonts } from "../utils/fontApi";

const FontSelector = ({ label, font, setFont }) => {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        const data = await fetchGoogleFonts();
        setFonts(data.slice(0, 100)); // Limit to first 100 fonts
      } catch (err) {
        console.error("Error loading fonts:", err);
      }
    };

    loadFonts();
  }, []);

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-blue-800 mb-2">
        {label}
      </label>
      <select
        value={font}
        onChange={(e) => setFont(e.target.value)}
        className="w-full px-4 py-2 bg-white border border-blue-300 text-blue-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      >
        {fonts.map((f) => (
          <option key={f.family} value={f.family}>
            {f.family}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelector;
