
'use client';

import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  let [products, setProducts] = useState([]);
  let[loading, setLoading] = useState(true);
  let [error, setError] = useState('');
  let [selectedCategory, setSelectedCategory] = useState('all');
  let [maxPrice, setMaxPrice] = useState('');
  let [cart, setCart] = useState({});

  useEffect(() => {
    fetch('/api/products')
        .then((res) => {
            if (!res.ok) throw new Error('Oops! Failed to load Products');
            return res.json();
        })
        .then((data) => {
            setProducts(data);
            setError('');
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    let id = setInterval(() => {
        setProducts((prev) => {
            if (prev.length === 0) return prev;
            let n = Math.floor(Math.random() * prev.length);
            return prev.map((p, ids) =>
                ids === n ? { ...p, stock: Math.max(p.stock - 1, 0) } : p
            );
        });
    }, 10000);
    return () => clearInterval(id);
  }, [products]);
  
  let filteredProducts = products.filter((p) => {
    let matchForCategory = selectedCategory === 'all' || p.category === selectedCategory;
    let matchForPrice = maxPrice === '' || p.price <= Number(maxPrice);
    return matchForCategory && matchForPrice;
  });

  function addingToCart(product) {
    if (product.stock === 0) return;
    setCart((e) => ({ ...e, [product.id]: (e[product.id] || 0) + 1 }));
    setProducts((e) =>
      e.map((p) => (p.id === product.id ? { ...p, stock: p.stock - 1 } : p))
    );
  }

  function handleClearCart() {
    setProducts((e) =>
      e.map((p) => {
        let qty = cart[p.id] || 0;
        return { ...p, stock: p.stock + qty };
      })
    );
    setCart({});
  }

  function decreasingEvent(id) {
    setCart((e) => {
      let qty = e[id];
      if (!qty) return e;
      let next = { ...e, [id]: qty - 1 };
      if (next[id] <= 0) delete next[id];
      return next;
    });
    setProducts((e) =>
      e.map((p) => (p.id === id ? { ...p, stock: p.stock + 1 } : p))
    );
  }



  




}