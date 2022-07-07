import { v4 as uuid } from "uuid";
import { ProductProp } from "./types";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

// export const carouselOffers = [
//   {
//     _id: uuid(),
//     title: "Iphone 13 Offer",
//     image:
//       "https://res.cloudinary.com/dupx0mrty/image/upload/v1647361463/ecommerce/hero_iphonese_preorder__e4eta8trjs66_mediumtall-removebg-preview_ysrrax.png",
//   },
//   {
//     _id: uuid(),
//     title: "Iphone's Discounted Offer",
//     image:
//       "https://res.cloudinary.com/dupx0mrty/image/upload/v1647361148/ecommerce/hero_ipadair__flhdv47anjqu_medium-removebg-preview_iv4ldg.png",
//   },
//   {
//     _id: uuid(),
//     title: "Iphone's Discounted Offer",
//     image:
//       "https://res.cloudinary.com/dupx0mrty/image/upload/v1647361210/ecommerce/promo_watch_lte__djeaso7ukrsm_medium-removebg-preview_lva1ao.png",
//   },
//   {
//     _id: uuid(),
//     title: "Introducing Galaxy S22 Series",
//     image:
//       "https://res.cloudinary.com/dupx0mrty/image/upload/v1647361352/ecommerce/1440x6401-removebg-preview_qkdvxm.png",
//   },
//   {
//     _id: uuid(),
//     title: "Galaxy Book2 Series The new way to PC",
//     image:
//       "https://res.cloudinary.com/dupx0mrty/image/upload/v1647362443/ecommerce/Galaxy_Book2_Series_banner_1440x6401-removebg-preview_rhqvgk.png",
//   },
// ];

// export const brands:any=[
//   "Vintage Apparel",
//   "FREE FIRE",
//   "Vintage Apparel",
//   "The Warehouse",
//   "RED MICKY MOUSE",
//   ""
// ]

export const products: ProductProp[] = [
  {
    _id: 51,
    title: "half sleeves T shirts",
    description:
      "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
    price: 23,
    discountPercentage: 12.76,
    rating: 4.26,
    stock: 132,
    brand: "Vintage Apparel",
    category: "men",
    thumbnail: "https://dummyjson.com/image/i/products/51/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/51/1.png",
      "https://dummyjson.com/image/i/products/51/2.jpg",
      "https://dummyjson.com/image/i/products/51/3.jpg",
      "https://dummyjson.com/image/i/products/51/thumbnail.jpg",
    ],
    size: "XL",
  },
  {
    _id: 52,
    title: "FREE FIRE T Shirt",
    description:
      "quality and professional print - It doesn't just look high quality, it is high quality.",
    price: 10,
    discountPercentage: 14.72,
    rating: 4.52,
    stock: 128,
    brand: "FREE FIRE",
    category: "men",
    thumbnail: "https://dummyjson.com/image/i/products/52/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/52/1.png",
      "https://dummyjson.com/image/i/products/52/2.png",
      "https://dummyjson.com/image/i/products/52/3.jpg",
      "https://dummyjson.com/image/i/products/52/4.jpg",
      "https://dummyjson.com/image/i/products/52/thumbnail.jpg",
    ],
    size: "M",
  },
  {
    _id: 53,
    title: "printed high quality T shirts",
    description: "Brand: vintage Apparel ,Export quality",
    price: 35,
    discountPercentage: 7.54,
    rating: 4.89,
    stock: 6,
    brand: "Vintage Apparel",
    category: "men",
    thumbnail: "https://dummyjson.com/image/i/products/53/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/53/1.webp",
      "https://dummyjson.com/image/i/products/53/2.jpg",
      "https://dummyjson.com/image/i/products/53/3.jpg",
      "https://dummyjson.com/image/i/products/53/4.jpg",
      "https://dummyjson.com/image/i/products/53/thumbnail.jpg",
    ],
    size: "S",
  },
  {
    _id: 54,
    title: "Pubg Printed Graphic T-Shirt",
    description:
      "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking",
    price: 46,
    discountPercentage: 16.44,
    rating: 4.62,
    stock: 136,
    brand: "The Warehouse",
    category: "men",
    thumbnail: "https://dummyjson.com/image/i/products/54/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/54/1.jpg",
      "https://dummyjson.com/image/i/products/54/2.jpg",
      "https://dummyjson.com/image/i/products/54/3.jpg",
      "https://dummyjson.com/image/i/products/54/4.jpg",
      "https://dummyjson.com/image/i/products/54/thumbnail.jpg",
    ],
    size: "L",
  },
  {
    _id: 55,
    title: "Money Heist Printed Summer T Shirts",
    description: "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched",
    price: 66,
    discountPercentage: 15.97,
    rating: 4.9,
    stock: 122,
    brand: "The Warehouse",
    category: "men",
    thumbnail: "https://dummyjson.com/image/i/products/55/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/55/1.jpg",
      "https://dummyjson.com/image/i/products/55/2.webp",
      "https://dummyjson.com/image/i/products/55/3.jpg",
      "https://dummyjson.com/image/i/products/55/4.jpg",
      "https://dummyjson.com/image/i/products/55/thumbnail.jpg",
    ],
    size: "M",
  },
  {
    _id: 41,
    title: "NIGHT SUIT",
    description: "NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.",
    price: 55,
    discountPercentage: 15.05,
    rating: 4.65,
    stock: 21,
    brand: "RED MICKY MOUSE",
    category: "women",
    thumbnail: "https://dummyjson.com/image/i/products/41/thumbnail.webp",
    images: [
      "https://dummyjson.com/image/i/products/41/1.jpg",
      "https://dummyjson.com/image/i/products/41/2.webp",
      "https://dummyjson.com/image/i/products/41/3.jpg",
      "https://dummyjson.com/image/i/products/41/4.jpg",
      "https://dummyjson.com/image/i/products/41/thumbnail.webp",
    ],
    size: "XL",
  },
  {
    _id: 42,
    title: "Stiched Kurta plus trouser",
    description:
      "FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN",
    price: 80,
    discountPercentage: 15.37,
    rating: 4.05,
    stock: 148,
    brand: "Digital Printed",
    category: "women",
    thumbnail: "https://dummyjson.com/image/i/products/42/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/42/1.png",
      "https://dummyjson.com/image/i/products/42/2.png",
      "https://dummyjson.com/image/i/products/42/3.png",
      "https://dummyjson.com/image/i/products/42/4.jpg",
      "https://dummyjson.com/image/i/products/42/thumbnail.jpg",
    ],
    size: "S",
  },
  {
    _id: 43,
    title: "frock gold printed",
    description:
      "Ghazi fabric long frock gold printed ready to wear stitched collection (G992)",
    price: 600,
    discountPercentage: 15.55,
    rating: 4.31,
    stock: 150,
    brand: "Ghazi Fabric",
    category: "women",
    thumbnail: "https://dummyjson.com/image/i/products/43/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/43/1.jpg",
      "https://dummyjson.com/image/i/products/43/2.jpg",
      "https://dummyjson.com/image/i/products/43/3.jpg",
      "https://dummyjson.com/image/i/products/43/4.jpg",
      "https://dummyjson.com/image/i/products/43/thumbnail.jpg",
    ],
    size: "L",
  },
  {
    _id: 44,
    title: "Ladies Multicolored Dress",
    description:
      "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.",
    price: 79,
    discountPercentage: 16.88,
    rating: 4.03,
    stock: 2,
    brand: "Ghazi Fabric",
    category: "women",
    thumbnail: "https://dummyjson.com/image/i/products/44/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/44/1.jpg",
      "https://dummyjson.com/image/i/products/44/2.jpg",
      "https://dummyjson.com/image/i/products/44/3.jpg",
      "https://dummyjson.com/image/i/products/44/4.jpg",
      "https://dummyjson.com/image/i/products/44/thumbnail.jpg",
    ],
    size: "L",
  },
  {
    _id: 45,
    title: "Malai Maxi Dress",
    description:
      "Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff",
    price: 50,
    discountPercentage: 5.07,
    rating: 4.67,
    stock: 96,
    brand: "IELGY",
    category: "women",
    thumbnail: "https://dummyjson.com/image/i/products/45/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/45/1.jpg",
      "https://dummyjson.com/image/i/products/45/2.webp",
      "https://dummyjson.com/image/i/products/45/3.jpg",
      "https://dummyjson.com/image/i/products/45/4.jpg",
      "https://dummyjson.com/image/i/products/45/thumbnail.jpg",
    ],
    size: "L",
  },
];
