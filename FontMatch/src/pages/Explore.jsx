import fontPairs from '../fonts';

function Explore() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Explore Font Pairings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {fontPairs.map((pair, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 bg-white shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold mb-1" style={{ fontFamily: pair.heading }}>
              {pair.heading}
            </h3>
            <p className="text-sm" style={{ fontFamily: pair.body }}>
              {pair.body}
            </p>
            <p className="mt-2 text-xs text-gray-500">{pair.heading} + {pair.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
