import React from "react";

export default function ProductCard({ name, price, inStock, rating, tags }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="font-bold text-green-600">{price}</p>
      <p className="text-green-400">재고: {inStock ? "재고 있음" : "품절"}</p>
      <p>평점: {rating}</p>
      <div>
        {tags.map((tag) => {
          return (
            <span className="text-xs bg-blue-300 rounded-full p-1 m-1">
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}
