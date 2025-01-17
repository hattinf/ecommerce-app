
export async function getServerSideProps() {
  const res = await fetch('https://your-api-endpoint.com/products');
  const products = await res.json();

  return {
    props: { products },
  };
}

export default function ProductsSSR({ products }) {
  return (
    <div>
      <h1>Products (SSR)</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
