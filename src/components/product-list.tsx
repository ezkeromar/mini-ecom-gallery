import React, { useEffect, useState } from "react";
import ProductItem from "./product-item";
import { Product } from "../types/product";
import ProductFilter from "./product-filter";

export default function ProductList() {
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async (category = 'all') => {
    try {
        let response;
      if (category === 'all') {
        response = await fetch("https://fakestoreapi.com/products");
      } else {
        response = await fetch("https://fakestoreapi.com/products/category/" +  category);
      }
      const products = await response.json() as Product[];
      setProducts(products);
      console.log(products, "products");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="grid grid-cols-12 gap-3">
      <ProductFilter onCategoryChange={(category) => loadProducts(category)} />
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
