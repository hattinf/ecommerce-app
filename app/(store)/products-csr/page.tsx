"use client";

import ProductsView from "@/components/ProductsView";
import { Product } from "@/sanity.types";
import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";

export default function ProductsPage() {
  const [products, setProducts] = useState([] as Product[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch('(*[_type == "product"] | order(name asc) )')
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products (Sanity Client)</h1>
      <ProductsView products={products} />
    </div>
  );
}
