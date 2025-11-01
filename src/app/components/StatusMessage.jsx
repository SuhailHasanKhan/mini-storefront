'use client';

export default function StatusMessage({ loading, ifError, ifEmpty }) {
  if (loading)
    return <p className="mb-3 text-sm text-slate-500">Products are loading, Please Wait...</p>;
  if (ifError) return <p className="mb-3 text-sm text-red-500">{ifError}</p>;
  if (ifEmpty)
    return (
      <p className="mb-3 text-sm text-slate-500">
        Sorry, No products match your filters.
      </p>
    );
  return null;
}