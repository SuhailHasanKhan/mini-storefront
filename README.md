#  Mini Storefront (React + Next.js)

A simple storefront web app built with **React (Next.js App Router)** and **Tailwind CSS**.  
Users can browse products, filter by category or price, add items to a cart, and see real-time stock updates.  
This project demonstrates key React skills: **state**, **props**, **effects**, **lifting state**, and **conditional rendering**.

---

## ⚙️ Setup

1. **Create project**
   ```bash
   npx create-next-app@latest mini-storefront

2. **Install & run**
    ```bash
    cd mini-storefront
    npm run dev

3. **Add files**
Place the following structure in your project:
    ```bash
    src/app/
      page.jsx
      api/products/route.js
      components/
        Catalog.jsx
        ProductList.jsx
        ProductCard.jsx
        CategoryFilter.jsx
        PriceFilter.jsx
        CartSummary.jsx
        StatusMessage.jsx

4. **Run the app**
    ```bash
    Visit ➜ http://localhost:3000


 5. **Rubric Checklist**
    ```bash
    Project Setup & Structure	    Correct Next.js + Tailwind setup and folder layout
    Components + JSX + Keys	        Reusable components, proper JSX, key={product.id} in lists
    Props + Lifting State     	    Shared state in Catalog.jsx passed via props to children
    State + Controlled Inputs	    useState for filters/cart; controlled <select> + <input>
    Effects + Cleanup	            useEffect for fetching and stock updates; clearInterval cleanup
    UX + Conditional Rendering	    StatusMessage handles loading, error, and empty states