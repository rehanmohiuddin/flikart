import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductProp } from "../../types";

/*  

 _id: uuid(),
    title: "realme C11 2021 (Cool Grey, 64 GB)  (4 GB RAM)",
    description:
      "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB \n 16.51 cm (6.5 inch) HD+ Display \n 8MP Rear Camera | 5MP Front Camera \n 5000 mAh Battery \n Octa-core Processor",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70",
    images: [
      "https://dummyjson.com/image/i/products/1/1.jpg",
      "https://dummyjson.com/image/i/products/1/2.jpg",
      "https://dummyjson.com/image/i/products/1/3.jpg",
      "https://dummyjson.com/image/i/products/1/4.jpg",
      "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    ],

*/

function Index({
  product,
  bg = "transparent",
  flex = "flex-col justify-center	w-56",
  img = "w-full",
  children,
}: {
  product: ProductProp;
  bg?: string;
  flex?: string;
  img?: string;
  children?: any;
}) {
  const {
    _id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
    size,
  } = product;
  return (
    <div
      key={_id}
      className={`p-2 box-border  items-center border-solid border-1 border-gray-100 hover:scale-80  ${flex} ${bg}`}
    >
      <img className={img} src={thumbnail} />
      <div className="p-2 box-border w-full flex-col">
        <div className="text-xl font-semibold capitalize">{title}</div>
        <div className="text-base font-bold">₹{price}</div>
        <div className="text-green-600 font-semibold">
          {discountPercentage} <span className=" ">%off </span>
        </div>
        <div className="text-semibold mb-2">
          <span className="text-slate-400 ">Size : </span> {size}
        </div>
        <span className="bg-sky-700 text-white p-2 box-border w-full text-sm whitespace-nowrap rounded">
          {brand}
        </span>
        <div className="text-lg capitalize p-2 px-0">{category}</div>
        {children}
      </div>
    </div>
  );
}

export default Index;
