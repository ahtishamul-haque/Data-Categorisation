import React from "react";

function CardItem({ category, total }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{category}</h2>
        <span className="total">₹{total}</span>
      </div>
    </div>
  );
}

export default CardItem;
