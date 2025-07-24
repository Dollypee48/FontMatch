import { useEffect, useState } from "react";
import { fetchGoogleFonts } from "../utils/fontApi";

const FontSelector = ({ label, font, setFont }) => {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        const data = await fetchGoogleFonts();
        setFonts(data.slice(0, 100)); // first 100 fonts
      } catch (err) {
        console.error("Error loading fonts:", err);
      }
    };

    loadFonts();
  }, []);

  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        value={font}
        onChange={(e) => setFont(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
