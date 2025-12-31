type Product = {
  id: string;
  name: string;
  description: string;
  price_cents: number;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  const data = await res.json();
  return data.products ?? [];
}

export default async function StorePage() {
  const products = await getProducts();

  return (
    <main style={{ maxWidth: 900, margin: "64px auto" }}>
      <h1>Store</h1>

      {products.length === 0 && (
        <p>No products available.</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 24,
          marginTop: 32,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: 16,
              borderRadius: 8,
            }}
          >
            <h2>{p.name}</h2>
            <p style={{ opacity: 0.8 }}>{p.description}</p>
            <p style={{ marginTop: 8, fontWeight: "bold" }}>
              ${(p.price_cents / 100).toFixed(2)}
            </p>

            <button disabled style={{ marginTop: 12 }}>
              Coming Soon
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
