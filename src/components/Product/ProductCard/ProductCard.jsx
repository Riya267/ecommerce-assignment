import React from "react";

const ProductCard = ({
  image,
  title,
  price,
  variants = [],
  inStock = true,
  onAddToCart,
}) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.price}>${price.toFixed(2)}</p>

      {variants.length > 0 && (
        <select style={styles.select}>
          {variants.map((variant, idx) => (
            <option key={idx} value={variant}>
              {variant}
            </option>
          ))}
        </select>
      )}

      <button
        onClick={onAddToCart}
        style={{
          ...styles.button,
          backgroundColor: inStock ? "#4CAF50" : "#ccc",
          cursor: inStock ? "pointer" : "not-allowed",
        }}
        disabled={!inStock}
      >
        {inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    padding: "16px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    marginBottom: "12px",
  },
  title: {
    fontSize: "1.1rem",
    marginBottom: "8px",
  },
  price: {
    fontWeight: "bold",
    marginBottom: "8px",
  },
  select: {
    padding: "6px",
    marginBottom: "12px",
  },
  button: {
    padding: "10px",
    border: "none",
    color: "white",
    fontWeight: "bold",
    borderRadius: "4px",
  },
};

export default ProductCard;
