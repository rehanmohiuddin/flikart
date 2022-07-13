import React, { FormEvent, useMemo, useRef, useState } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import { products } from "../products";
import { ProductProp } from "../types";
import useProducts from "../hooks/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "../actions";
function App() {
  const { Products, Brands, Sizes, DressCategory } = useProducts();
  const [activeFilters, setActiveFilter] = useState<{ [key: string]: any }>({});
  const Filters = Object.keys(activeFilters);
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: any) => state.cart);

  const filterOptions: { [key: string]: string[] } = {
    Brands: [...Brands],
    Category: [...DressCategory],
    Sizes: [...Sizes],
  };

  const filter: { [key: string]: any } = {
    products: [...Products],
    Brands: function (brandKey: string) {
      this.products = this.products.filter(
        ({ brand }: ProductProp) =>
          brand.toLowerCase() === brandKey.toLowerCase()
      );
      return this;
    },
    Category: function (catKey: string) {
      this.products = this.products.filter(
        ({ category }: ProductProp) => category === catKey
      );
      return this;
    },
    Sizes: function (sizeKey: string) {
      this.products = this.products.filter(
        ({ size }: ProductProp) => size === sizeKey
      );
      return this;
    },
  };

  const handleFilter = (e: FormEvent<HTMLInputElement>) => {
    const filterType: string | null = e.currentTarget.dataset.filter ?? null;
    const isActive = e.currentTarget.checked;
    !isActive &&
      filterType &&
      setActiveFilter((actFil) => {
        delete actFil[filterType];
        return { ...actFil };
      });
    filterType &&
      isActive &&
      setActiveFilter({ ...activeFilters, [filterType]: e.currentTarget.name });
  };

  const FilteredProducts: ProductProp[] = useMemo(() => {
    Filters.forEach((key) => {
      filter[key](activeFilters[key]);
    });
    return Filters.length > 0 ? [...filter.products] : [...Products];
  }, [Products, activeFilters]);

  return (
    <div className="flex flex-col w-full box-border">
      <Header />
      <div className="flex w-full h-full">
        <div className="border-solid border-1 border-slate-200 h-full w-48">
          <div className="flex w-full justify-between items-center p-2 box-border pb-0">
            <span className="p-2 text-xl font-bold">Filters</span>
            {Filters.length > 0 && (
              <span
                onClick={() => setActiveFilter({})}
                className="bg-slate-200 p-2 mt-2 box-border rounded text-sm cursor-pointer"
              >
                Clear All
              </span>
            )}
          </div>
          {Object.keys(filterOptions).map((key) => (
            <div key={key} className="p-4 pt-2 box-border">
              <div className="text-lg font-semibold uppercase ">{key}</div>
              {filterOptions[key].map((option) => (
                <div key={key} className="flex items-center gap-2 p-1">
                  <input
                    className="cursor-pointer caret-blue-300"
                    type={"checkbox"}
                    name={option}
                    checked={activeFilters[key] === option}
                    data-filter={key}
                    onChange={handleFilter}
                  />
                  <div className="whitespace-nowrap tracking-wide capitalize">
                    {option}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="p-2 w-full flex flex-wrap gap-2 justify-center">
          {FilteredProducts.map((product) => (
            <Product
              product={product}
              children={
                <div className="flex-col p-2 box-border w-full gap-2">
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          product,
                        })
                      )
                    }
                    className="box-border p-2 rounded font-poppins cursor-pointer bg-indigo-500 border-0 text-white"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        addToWishlist({
                          product,
                        })
                      )
                    }
                    className="box-border mt-2 p-2 rounded font-poppins cursor-pointer bg-indigo-500 border-0 text-white"
                  >
                    Add To WishList
                  </button>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
