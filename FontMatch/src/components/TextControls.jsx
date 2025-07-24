function TextControls({ label = "Font Size", size, setSize }) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-semibold text-blue-800">
        {label}: <span className="text-blue-600 font-bold">{size}px</span>
      </label>
      <input
        type="range"
        min="12"
        max="60"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
        className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
    </div>
  );
}

export default TextControls;
