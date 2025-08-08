import React from "react";
import Category from "./Category";

export const CATEGORY_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Women's Clothing", value: "women's clothing" },
  { label: "Jewelery", value: "jewelery" },
  { label: "Electronics", value: "electronics" },
];

export default function Categories({ setFilter, filterProduct }) {
  return (
    <div>
      {CATEGORY_OPTIONS.map((category) => (
        <Category
          label={category.label}
          value={category.value}
          setFilter={category.value === "all" ? setFilter : filterProduct}
        />
      ))}
    </div>
  );
}
