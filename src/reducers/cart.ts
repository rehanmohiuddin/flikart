import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  DECREMENT_PRODUCT_QUANTITY,
  INCREMENT_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from "../actions";

const cartState = {
  items: {},
  wishlist: {},
  total: 0,
};

const cart = (
  state: {
    items: { [key: string]: { quantity: number; price: number } };
    wishlist: { [key: string]: {} };
    total: number;
  } = {
    ...cartState,
  },
  action: any
) => {
  const { type, payload } = action;
  const { _id } = payload?.product ?? {};
  const { items, wishlist } = state;
  const cloneWishlist = { ...wishlist };

  switch (type) {
    case ADD_TO_CART:
      const newProduct = { ...payload.product, quantity: 1 };
      const id = payload.product._id;
      if (wishlist[id]) {
        delete cloneWishlist[_id];
      }
      return {
        ...state,
        items: {
          ...state.items,
          [id]: items[id]
            ? { ...newProduct, quantity: items[id].quantity + 1 }
            : newProduct,
        },
        wishlist: { ...cloneWishlist },
        total: state.total + payload.product.price,
      };
    case INCREMENT_PRODUCT_QUANTITY:
      const incrPid = payload._id;
      return {
        ...state,
        items: {
          ...items,
          [incrPid]: {
            ...items[incrPid],
            quantity: items[incrPid].quantity + 1,
          },
        },
      };

    case DECREMENT_PRODUCT_QUANTITY:
      const decrPid = payload._id;
      if (items[decrPid].quantity === 1) {
        const cloneItems = { ...items };
        delete cloneItems[decrPid];
        return {
          ...state,
          items: cloneItems,
        };
      }
      return {
        ...state,
        items: {
          ...items,
          [decrPid]: {
            ...items[decrPid],
            quantity: Math.abs(items[decrPid].quantity - 1),
          },
        },
        total: state.total - items[decrPid].price,
      };
    case REMOVE_FROM_CART:
      const cloneObj: any = state.items;
      delete cloneObj[_id];
      return {
        ...state,
        items: { ...cloneObj },
        total: state.total - payload.product.price,
      };
    case ADD_TO_WISHLIST:
      const cloneCart = { ...items };
      cloneCart[_id] && delete cloneCart[_id];
      return {
        ...state,
        wishlist: { ...wishlist, [_id]: payload.product },
        items: { ...cloneCart },
      };
    case REMOVE_FROM_WISHLIST:
      // const cloneWishlist = { ...items };
      cloneWishlist[_id] && delete cloneWishlist[_id];
      return {
        ...state,
        wishlist: { ...cloneWishlist },
      };
    default:
      return {
        ...state,
      };
  }
};

export default cart;
