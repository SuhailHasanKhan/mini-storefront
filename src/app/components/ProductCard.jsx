'use client';

export default function ProductCard({ product, onAtc }) {
    let { name, price, category, stock } = product;
    let ifOut = stock === 0;


    return (
        <div className="bg-white border rounded-md p-4 flex flex-col gap-3">
            <div>
                <h2 className="text-base font-semibold">{name}</h2>
                <h4 className="text-xs text-slate-500">{category}</h4>
            </div>

            <p className="text-lg font-bold">${price}</p>
            <p className={`text-sm ${ifOut ? 'text-red-500' : 'text-green-600'}`}>
                {ifOut ? 'Out of stock' : `In stock: ${stock}`}
            </p>

            <button onClick={() => onAtc(product)}
                    disabled={ifOut}
                    className={`w-full py-2 text-sm rounded-md ${ifOut ? 'bg-slate-200 text-slate-500 cursor-not-allowed' : 'bg-slate-900 text-white'}`}>
                    {ifOut ? 'Unavailable' : 'Add to cart'}
            </button>
        </div>
    );
}