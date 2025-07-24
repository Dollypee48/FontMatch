import { useState, useEffect } from "react";
import FontSelector from "../components/FontSelector";
import FontPreview from "../components/FontPreview";
import TextControls from "../components/TextControls";
import { loadFonts } from "../utils/loadFont";

function Home() {
  const [headingFont, setHeadingFont] = useState("Roboto");
  const [bodyFont, setBodyFont] = useState("Open Sans");
  const [headingSize, setHeadingSize] = useState(32);
  const [bodySize, setBodySize] = useState(16);

  useEffect(() => {
    loadFonts([headingFont, bodyFont]);
  }, [headingFont, bodyFont]);

  const fontLink = `https://fonts.googleapis.com/css2?family=${headingFont.replace(
    / /g,
    "+"
  )}&family=${bodyFont.replace(/ /g, "+")}&display=swap`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fontLink);
    alert("✅ Google Fonts link copied to clipboard!");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-blue-50">
      
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
        🎨 FontMatch – Google Font Pairing Tool
      </h1>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FontSelector
          label="Heading Font"
          font={headingFont}
          setFont={setHeadingFont}
        />
        <FontSelector
          label="Body Font"
          font={bodyFont}
          setFont={setBodyFont}
        />
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <TextControls
          label="Heading Size"
          size={headingSize}
          setSize={setHeadingSize}
        />
        <TextControls
          label="Body Size"
          size={bodySize}
          setSize={setBodySize}
        />
      </div>

    
      <FontPreview
        headingFont={headingFont}
        bodyFont={bodyFont}
        headingSize={headingSize}
        bodySize={bodySize}
      />

      
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-12 shadow-sm">
        <p className="text-sm font-semibold text-blue-800 mb-2">
          Google Fonts Link:
        </p>
        <code className="block text-xs font-mono break-all bg-white text-gray-800 p-4 rounded border border-blue-100 mb-4">
          {fontLink}
        </code>
        <button
          onClick={copyToClipboard}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition"
        >
          Copy Google Fonts Link
        </button>
      </div>
    </div>
  );
}

export default Home;
