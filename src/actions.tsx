const ADD_TO_CART = "ADD_TO_CART";
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
const INCREMENT_PRODUCT_QUANTITY = "INCREMENT_PRODUCT_QUANTITY";
const DECREMENT_PRODUCT_QUANTITY = "DECREMENT_PRODUCT_QUANTITY";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const addToCart = (payload: any) => ({
  type: ADD_TO_CART,
  payload,
});

const addToWishlist = (payload: any) => ({
  type: ADD_TO_WISHLIST,
  payload,
});

const removeFromWishlist = (payload: any) => ({
  type: REMOVE_FROM_WISHLIST,
  payload,
});

const incrementProductQuantity = (payload: any) => ({
  type: INCREMENT_PRODUCT_QUANTITY,
  payload,
});

const decrementProductQuantity = (payload: any) => ({
  type: DECREMENT_PRODUCT_QUANTITY,
  payload,
});

const removeFromCart = (payload: any) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export {
  ADD_TO_CART,
  INCREMENT_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
  DECREMENT_PRODUCT_QUANTITY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  incrementProductQuantity,
  removeFromCart,
  addToCart,
  decrementProductQuantity,
  addToWishlist,
  removeFromWishlist,
};
