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
      totalPrice += fullPrice;
      return { id, name: product.name, qty, price: product.price, fullPrice };
    })
    .filter(Boolean);   
    
    return (
        <aside className="bg-white border rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
            {items.length === 0 ? (
                <p className="text-sm text-slate-500 mb-3">Cart is empty!</p>
            ) : (
                <ul className="mb-3 space-y-2">
                    {items.map((item) => (
                        <li key={item.id} className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-medium">{item.name}</p>
                                <p className="text-xs text-slate-500">
                                    ${item.price} × {item.qty} = ${item.fullPrice}
                                </p>
                            </div>
                            <button onClick={() => forDecrease(item.id)} className="text-xs border rounded px-2 py-1">
                                #
                            </button>

                        </li>
                    ))}        
                </ul>
            )}
            <div className="text-sm flex justify-between mb-1">
                <span>Total items:</span> <span>{totalItems}</span>
            </div>
            <div className="text-sm flex justify-between mb-3">
                <span>Total price:</span> <span className="font-semibold">${totalPrice}</span>
            </div>

            <button onClick={forClear} disabled={items.length === 0} className="w-full py-2 text-sm rounded-md bg-slate-900 text-white disabled:bg-slate-200">
                Clear your cart
            </button>

        </aside>
    );
}