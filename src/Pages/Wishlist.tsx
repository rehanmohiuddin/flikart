import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementProductQuantity,
  incrementProductQuantity,
  removeFromWishlist,
} from "../actions";
import Header from "../components/Header";
import Product from "../components/Product";
import { products } from "../products";

function Cart() {
  const dispatch = useDispatch();
  const { wishlist, total } = useSelector((state: any) => state.cart);
  const itemsKey = Object.keys(wishlist);

  const getDiscountedPrice = (price: number) => price - price * 0.1;

  const WishListItem = (key: string) => {
    const { _id, quantity } = wishlist[key];
    return (
      <Product
        product={wishlist[key]}
        flex="flex h-full w-full justify-start relative"
        bg="bg-white"
        img="w-36"
        children={
          <div className=" right-2 bottom-5 flex justify-center box-border gap-2">
            <button
              onClick={() =>
                dispatch(removeFromWishlist({ product: wishlist[key] }))
              }
              className="box-border p-2 m-4 cursor-pointer mb-0 mr-0 ml-0 border-solid border-1 border-indigo-300 bg-white rounded w-full "
            >
              Delete
            </button>
            <button
              onClick={() => dispatch(addToCart({ product: wishlist[key] }))}
              className="box-border p-2 m-4 cursor-pointer mb-0 mr-0 ml-0 border-solid border-1 border-indigo-300 bg-white rounded w-full "
            >
              Move To Cart
            </button>
          </div>
        }
      />
    );
  };

  return (
    <div className="flex flex-col w-full box-border">
      <Header />
      <div className="flex w-full box-border bg-slate-100">
        <div className="flex-col w-12/12 p-2 flex-wrap	min-h-screen">
          <div className="bg-white flex flex-wrap">
            {itemsKey.map((key) => WishListItem(key))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
