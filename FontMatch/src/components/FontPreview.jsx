import { useEffect } from "react";

function FontPreview({ headingFont, bodyFont, headingSize, bodySize }) {
  useEffect(() => {
    const fontFamilies = [headingFont, bodyFont];
    const linkId = "dynamic-font-preview-link";

    const existingLink = document.getElementById(linkId);
    if (existingLink) existingLink.remove();

    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?${fontFamilies
      .map((font) => `family=${font.replace(/ /g, "+")}`)
      .join("&")}&display=swap`;

    document.head.appendChild(link);
  }, [headingFont, bodyFont]);

  const headingStyle = {
    fontFamily: `'${headingFont}', sans-serif`,
    fontSize: `${headingSize}px`,
  };

  const bodyStyle = {
    fontFamily: `'${bodyFont}', sans-serif`,
    fontSize: `${bodySize}px`,
    lineHeight: "1.6",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-10 border border-gray-200">
      <h2 className="mb-4 font-bold text-gray-900" style={headingStyle}>
        Sample Heading Using {headingFont}
      </h2>
      <p className="text-gray-700" style={bodyStyle}>
        This is a preview of body text using the <strong>{bodyFont}</strong>{" "}
        font. Adjust the heading and body font selections, as well as the font
        sizes, to visualize how your typography choices pair together in real
        scenarios.
      </p>
    </div>
  );
}

export default FontPreview;
