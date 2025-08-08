import React from "react";

export default function Category({ label, value, setFilter }) {
  return (
    <button
      className="btn btn-outline-dark btn-sm m-2"
      onClick={() => setFilter(value)}
    >
      {label}
    </button>
  );
}
