import React, { useMemo } from "react";
import { products } from "../products";
import { ProductProp } from "../types";

function useProducts() {
  const Products: ProductProp[] = [...products];
  const Brands = useMemo(() => {
    const _products: { [key: string]: ProductProp } = {};
    products.forEach(
      (product) => (_products[product.brand.toLowerCase()] = product)
    );
    return Object.keys(_products);
  }, [products]);

  const Sizes = useMemo(() => {
    const _products: { [key: string]: ProductProp } = {};
    products.forEach((product) => (_products[product.size] = product));
    return Object.keys(_products);
  }, [products]);

  const DressCategory = useMemo(() => {
    const _products: { [key: string]: ProductProp } = {};
    products.forEach((product) => (_products[product.category] = product));
    return Object.keys(_products);
  }, [products]);

  return { Products, Brands, Sizes, DressCategory };
}

export default useProducts;
