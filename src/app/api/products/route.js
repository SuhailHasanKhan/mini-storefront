
export async function GET() {
  const products = [
    { id: 'p1', name: 'iPhone', price: 1000, category: 'Electronics', stock: 50 },
    { id: 'p2', name: 'Counch', price: 3500, category: 'Furniture', stock: 31 },
    { id: 'p3', name: 'Tablet', price: 700, category: 'Electronics', stock: 41 },
    { id: 'p4', name: 'Coffee Machines', price: 40, category: 'Home', stock: 67 },
    { id: 'p5', name: 'Earphones', price: 100, category: 'Electronics', stock: 82 },
    { id: 'p6', name: 'Cabinet', price: 230, category: 'Furniture', stock: 45 },
    { id: 'p7', name: 'Lamp', price: 60, category: 'Home', stock: 18 },
    { id: 'p8', name: 'Gaming Monitor', price: 270, category: 'Electronics', stock: 3 },
    { id: 'p9', name: 'Dining Table', price: 1950, category: 'Furniture', stock: 1 },
    { id: 'p10', name: 'Air Fryer', price: 120, category: 'Home', stock: 41 }
  ];
  return Response.json(products);
}