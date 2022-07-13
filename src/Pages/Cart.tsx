import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementProductQuantity,
  incrementProductQuantity,
  removeFromCart,
} from "../actions";
import Header from "../components/Header";
import Product from "../components/Product";
import { products } from "../products";

function Cart() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: any) => state.cart);
  const itemsKey = Object.keys(items);

  const getDiscountedPrice = (price: number) => price - price * 0.1;

  const CartItem = (key: string) => {
    const { _id, quantity } = items[key];
    return (
      <Product
        product={items[key]}
        flex="flex h-48 w-full justify-start relative"
        bg="bg-white"
        img="w-36"
        children={
          <div className="absolute right-2 bottom-5 flex-col justify-center box-border">
            <div className="flex gap-2">
              <button
                onClick={() =>
                  dispatch(
                    decrementProductQuantity({
                      _id: _id,
                    })
                  )
                }
                className="font-poppins p-1 box-border border-solid border-1 border-slate-100 bg-white rounded-2xl w-7 h-7 font-bold"
              >
                -
              </button>
              <input
                value={quantity}
                type={"number"}
                className="outline-0 border-solid border-1 border-slate-100 w-8 p-1 text-xs font-poppins"
              />
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      product: items[key],
                    })
                  )
                }
                className="font-poppins p-1 box-border border-solid border-1 border-slate-100 bg-white rounded-2xl w-7 h-7 font-bold"
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                dispatch(
                  removeFromCart({
                    product: items[key],
                  })
                )
              }
              className="box-border p-2 m-4 cursor-pointer mb-0 mr-0 ml-0 border-solid border-1 border-indigo-300 bg-white rounded w-full "
            >
              Remove
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
        <div className="flex-col w-8/12 p-2 flex-wrap	min-h-screen">
          <div className="bg-white h-5/6">
            {itemsKey.map((key) => CartItem(key))}
          </div>
        </div>
        <div className="flex-col w-4/12 p-2 min-h-screen box-border ">
          <div className="bg-white h-2/6 flex-col">
            <div className="box-border p-4 font-semibold text-lg">
              Items ({itemsKey.length})
            </div>
            <div className="flex w-full p-4 box-border justify-between">
              <div className="text-lg">Price</div>
              <div className="text-lg">₹ {total}</div>
            </div>
            <div className="flex w-full p-4 box-border justify-between">
              <div className="text-lg">Discount</div>
              <div className="text-lg">10 %</div>
            </div>
            <div className="flex w-full p-4 box-border justify-between">
              <div className="text-lg">Total</div>
              <div className="text-lg">₹ {getDiscountedPrice(total)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
