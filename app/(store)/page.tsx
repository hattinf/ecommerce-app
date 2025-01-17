export default async function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        {/* Link to ssr */}
        <a href="/products-ssr">Products SSR</a>

        {/* link to csr */}
        <a href="/products-csr">Products CSR</a>
      </div>
    </div>
  );
}
