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
    lineHeight: "1.7",
  };

  return (
    <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl shadow-md">
      <h2
        className="mb-4 text-gray-900 font-bold tracking-tight"
        style={headingStyle}
      >
        Sample Heading —{" "}
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded-md">
          {headingFont}
        </span>
      </h2>
      <p className="text-gray-800" style={bodyStyle}>
        This is a preview of the body text using{" "}
        <span className="font-semibold text-blue-700">{bodyFont}</span>. Use
        the controls to adjust font sizes and test how your heading and paragraph
        fonts look together in a real layout scenario.
      </p>
    </div>
  );
}

export default FontPreview;
