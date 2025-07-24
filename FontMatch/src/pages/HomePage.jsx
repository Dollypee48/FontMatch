import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <section className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4 leading-tight">
          Elevate Your Typography
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          FontMatch helps you find the perfect Google Font combinations
          for your next project. Preview, adjust, and copy in seconds.
        </p>
        <Link
          to="/tool"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
        >
          Try the Tool
        </Link>
      </section>

     
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Live Preview</h2>
            <p className="text-gray-600">
              Instantly preview font pairings in headings and body text. Adjust
              size and weight with ease.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Perfect Pairings</h2>
            <p className="text-gray-600">
              Explore curated Google Fonts that work beautifully together, from
              bold to minimalist.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold text-gray-800 mb-2">One-Click Copy</h2>
            <p className="text-gray-600">
              Copy CSS links and class-ready fonts in one click. No hassle, no clutter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
