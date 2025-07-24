function ExploreCard({ pair }) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-1" style={{ fontFamily: pair.heading }}>
        {pair.heading}
      </h3>
      <p className="text-sm" style={{ fontFamily: pair.body }}>
        {pair.body}
      </p>
      <p className="mt-2 text-xs text-gray-500">
        {pair.heading} + {pair.body}
      </p>
    </div>
  );
}

export default ExploreCard;
