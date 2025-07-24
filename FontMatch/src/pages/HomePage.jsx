import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white p-6">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6 text-center">
        Welcome to FontMatch
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl text-center">
        Discover the perfect Google Font combinations for your design projects.
        Easily preview headings and body fonts, adjust sizes, and copy ready-to-use links.
      </p>
      <Link
        to="/tool"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
      >
        Get Started
      </Link>
    </div>
  );
}

export default HomePage;
