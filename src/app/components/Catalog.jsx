
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

  

  




}