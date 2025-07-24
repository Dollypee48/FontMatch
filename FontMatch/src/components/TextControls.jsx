function TextControls({ label = "Font Size", size, setSize }) {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">{label}: {size}px</label>
      <input
        type="range"
        min="12"
        max="60"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

export default TextControls;
