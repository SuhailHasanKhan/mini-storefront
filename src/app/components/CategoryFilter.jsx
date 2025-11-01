'use client';

export default function CategoryFilter({ value, onChange, products }) {
    let categories = ['Electronics', 'Furniture', 'Home'];

    return (
        <label className="flex flex-col gap-1 text-sm">
            <div><h4>Category</h4></div>
            <select value={value} onChange={(e) => onChange(e.target.value)} className="border rounded-md px-2 py-1 bg-white">
                <option value="all">All</option>
                {categories.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>
        </label>
    );
}