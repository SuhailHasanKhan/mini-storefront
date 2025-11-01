'use client';

export default function CartSummary({ cart, products, forDecrease, forClear }) {
    let entries = Object.entries(cart);
    let totalItems = 0;
    let totalPrice = 0;
    let items = entries.map(([id, qty]) => {
      let product = products.find((p) => p.id === id);
      if (!product) return null;
      let fullPrice = product.price * qty;
      totalItems += qty;
      totalPrice += linePrice;
      return { id, name: product.name, qty, price: product.price, fullPrice };
    })
    .filter(Boolean);       
}