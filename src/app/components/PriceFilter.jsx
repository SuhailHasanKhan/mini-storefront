'use client';

export default function PriceFilter({ value, onChange }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium">Max price</span>
      <input className="border rounded-md px-2 py-1 bg-white" type="number" min="0" value={value} onChange={(e) => onChange(e.target.value)} placeholder="No limit"/>
    </label>
  );
}