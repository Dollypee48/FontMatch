import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        ✨ About FontMatch
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        <strong>FontMatch</strong> is a smart and simple tool that helps designers, developers, and creatives find the perfect font combinations with ease. Whether you're building a brand, designing a website, or creating a visual project, FontMatch takes the guesswork out of pairing fonts.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">🎯 Why FontMatch?</h2>
      <p className="text-gray-700 mb-6">
        Typography matters — the right font combination can instantly elevate your work. But finding matching fonts is time-consuming and confusing. FontMatch makes it effortless by giving you curated and AI-powered font pairings that look beautiful together.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">🔍 What You Can Do</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Explore recommended font pairs</li>
        <li>Preview them live in your design</li>
        <li>Adjust font size for heading and body</li>
        <li>Copy Google Fonts link for easy use</li>
        <li>Stay inspired with modern typography</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">🛠️ Built With</h2>
      <p className="text-gray-700">
        React, Tailwind CSS, Google Fonts API and a passion for clean, accessible design.
      </p>
    </div>
  );
};

export default About;
