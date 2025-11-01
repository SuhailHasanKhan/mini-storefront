'use client';

import ProductCard from './ProductCard';

export default function ProductList({ products, onAtc }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAtc={onAtc} />
      ))}
    </div>
  );
}