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
    alert("Google Fonts link copied to clipboard!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">
        🎨 FontMatch – Google Font Pairing Tool
      </h1>

      {/* Font Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FontSelector label="Heading Font" font={headingFont} setFont={setHeadingFont} />
        <FontSelector label="Body Font" font={bodyFont} setFont={setBodyFont} />
      </div>

      {/* Font Size Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <TextControls
          label="Heading"
          size={headingSize}
          setSize={setHeadingSize}
        />
        <TextControls
          label="Body"
          size={bodySize}
          setSize={setBodySize}
        />
      </div>

      {/* Font Preview */}
      <FontPreview
        headingFont={headingFont}
        bodyFont={bodyFont}
        headingSize={headingSize}
        bodySize={bodySize}
      />

      {/* Google Fonts Link */}
      <div className="bg-gray-50 p-4 rounded border border-gray-200 mt-10">
        <p className="text-sm font-medium mb-2">Google Fonts Link:</p>
        <code className="block text-xs break-all bg-white p-3 rounded border border-gray-300 mb-3">
          {fontLink}
        </code>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          Copy Google Fonts Link
        </button>
      </div>
    </div>
  );
}

export default Home;
