function Checkbox() {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="shrink-0 size-4 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      />
      <label className="text-sm text-gray-900">Default checkbox</label>
    </div>
  );
}

export default Checkbox;
